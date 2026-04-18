+++
title = "Control Flow"
weight = 2
description = "Make decisions with if/else and repeat actions with loops"

[extra]
difficulty = "beginner"
+++

## Concept

Control flow determines the order in which statements execute. Without it, programs would run every line exactly once from top to bottom. Two fundamental control flow tools are **conditionals** (if/else) and **loops** (for/while).

## Conditionals

Use `if`, `elif`, and `else` to execute code only when a condition is true:

```python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(grade)  # B
```

### Comparison Operators

| Operator | Meaning                |
|----------|------------------------|
| `==`     | Equal to               |
| `!=`     | Not equal to           |
| `<`      | Less than              |
| `>`      | Greater than           |
| `<=`     | Less than or equal     |
| `>=`     | Greater than or equal  |

### Logical Operators

Combine conditions with `and`, `or`, and `not`:

```python
age = 25
has_license = True

if age >= 16 and has_license:
    print("You can drive")

temperature = 35

if temperature < 0 or temperature > 40:
    print("Extreme weather warning")

is_raining = False

if not is_raining:
    print("No umbrella needed")
```

## For Loops

A `for` loop iterates over a sequence of values:

```python
# Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Using range() to repeat a fixed number of times
for i in range(5):
    print(i)  # Prints 0, 1, 2, 3, 4

# range with start, stop, step
for i in range(2, 10, 3):
    print(i)  # Prints 2, 5, 8
```

## While Loops

A `while` loop repeats as long as a condition is true:

```python
count = 0
while count < 5:
    print(count)
    count += 1
# Prints 0, 1, 2, 3, 4
```

> Be careful with while loops. If the condition never becomes false, the loop runs forever.

## Break and Continue

- `break` exits the loop immediately
- `continue` skips to the next iteration

```python
# Find the first even number
numbers = [1, 3, 7, 4, 9, 2]
for n in numbers:
    if n % 2 == 0:
        print("First even:", n)
        break
# Output: First even: 4

# Skip negative numbers
values = [10, -3, 5, -1, 8]
total = 0
for v in values:
    if v < 0:
        continue
    total += v
print("Sum of positives:", total)  # 23
```

## Example: FizzBuzz

A classic programming exercise that combines loops and conditionals:

```python
for i in range(1, 21):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)
```

## Exercise

Write a program that:

1. Loops through numbers 1 to 50
2. Collects all numbers divisible by 7 into a list
3. Prints the list and its length

Expected output:

```
Divisible by 7: [7, 14, 21, 28, 35, 42, 49]
Count: 7
```

### Solution

```python
divisible = []
for i in range(1, 51):
    if i % 7 == 0:
        divisible.append(i)

print("Divisible by 7:", divisible)
print("Count:", len(divisible))
```
