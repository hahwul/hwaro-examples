+++
title = "Lattices After Shor"
date = "2026-02-27"
description = "Shor's algorithm makes factoring cheap for a large enough quantum computer, so RSA's wall stops being a wall. We look at why lattice problems and Learning With Errors are the leading replacement."
tags = ["post-quantum", "lattices", "modern"]

[extra]
block = "0x06"
duration = "49 min"
guest = "Dr. Yusuf Okonkwo, post-quantum standards contributor"
cipher = "Lattice-based encryption via Learning With Errors"
preview = "Shor's algorithm doesn't care how big your primes are. Lattices might survive it. We ask what learning-with-errors actually makes hard to learn."
preview_rot13 = "Fube'f nytbevguz qbrfa'g pner ubj ovt lbhe cevzrf ner. Ynggvprf zvtug fheivir vg. Jr nfx jung yrneavat-jvgu-reebef npghnyyl znxrf uneq gb yrnea."
+++

Everything in block 0x05 rested on factoring staying hard. Peter Shor's 1994 algorithm is the reason that bet stops paying out: given a large enough fault-tolerant quantum computer, Shor's algorithm factors an RSA modulus — and solves the closely related discrete logarithm problem that protects Diffie-Hellman and elliptic-curve key exchange — in polynomial time. Nobody has built a quantum computer large enough to threaten deployed key sizes yet. Standards bodies are not waiting to find out when.

<!-- more -->

## A different kind of hard problem

Lattice-based cryptography doesn't try to build a better factoring problem; it moves to a completely different one that, as far as anyone has shown, gets no easier on a quantum computer. Picture a grid of points spreading out infinitely in several dimensions — a lattice. Given a "bad," skewed basis for describing that lattice, finding the point nearest to some arbitrary target coordinate is computationally hard, even though the same problem is trivial if you're handed a "good," near-orthogonal basis instead. The gap between having the good basis (private key) and only the bad one (public key) is where the security lives.

## Learning With Errors, concretely

The specific hard problem most post-quantum lattice schemes lean on is Learning With Errors, introduced by Oded Regev in 2005. You're given many noisy linear equations and asked to recover the secret vector they were built from:

```text
Secret vector:     s = (s1, s2, ..., sn)
Public sample i:   (a_i, b_i) where b_i = <a_i, s> + e_i  (mod q)
                    a_i is random and public
                    e_i is small random "error" noise
                    e_i is what makes recovering s hard
```

Without the error term, recovering `s` from enough samples is ordinary linear algebra — solvable instantly. With it, the equations are only *approximately* true, and the best known algorithms for extracting `s` anyway, quantum or classical, scale exponentially with the lattice dimension for well-chosen parameters. That's the whole trick: noise you can still decrypt through if you hold the secret, but that buries the structure from anyone who doesn't.

## Cited in this episode

- Peter Shor, *Algorithms for Quantum Computation: Discrete Logarithms and Factoring* (1994)
- Oded Regev, *On Lattices, Learning with Errors, Random Linear Codes, and Cryptography* (2005)
- NIST's post-quantum cryptography standardization process, module-lattice finalists

That's the season so far — six blocks, six ways of hiding a message, each one built on the last one's ruins. New episodes land as we record them; catch up on the [full run of episodes](/episodes/) or read more [about the show](/about/).
