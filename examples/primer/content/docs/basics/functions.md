+++
title = "Functions and Scope"
weight = 3
description = "Organize code into reusable blocks and understand variable scope"

[extra]
difficulty = "intermediate"
+++

## Concept

A **function** is a named block of code that performs a specific task. Functions let you write code once and reuse it many times. They also make programs easier to read, test, and maintain.

## Defining Functions

Use the `def` keyword to define a function:

```python
def greet(name):
    return "Hello, " + name + "!"

message = greet("Alice")
print(message)  # Hello, Alice!
```

A function can have:

- **Parameters**: inputs the function accepts
- **Return value**: the result sent back to the caller
- **Docstring**: a description of what the function does

```python
def calculate_area(width, height):
    """Calculate the area of a rectangle."""
    return width * height

area = calculate_area(5, 3)
print(area)  # 15
```

## Default Parameters

You can give parameters default values. If the caller does not provide a value, the default is used:

```python
def power(base, exponent=2):
    return base ** exponent

print(power(3))      # 9  (uses default exponent=2)
print(power(3, 3))   # 27
print(power(2, 10))  # 1024
```

## Keyword Arguments

Call functions using parameter names for clarity:

```python
def create_user(name, age, role="member"):
    return {"name": name, "age": age, "role": role}

# Positional arguments
user1 = create_user("Alice", 30)

# Keyword arguments (order does not matter)
user2 = create_user(age=25, name="Bob", role="admin")

print(user1)  # {'name': 'Alice', 'age': 30, 'role': 'member'}
print(user2)  # {'name': 'Bob', 'age': 25, 'role': 'admin'}
```

## Returning Multiple Values

Python functions can return multiple values as a tuple:

```python
def min_max(numbers):
    return min(numbers), max(numbers)

lowest, highest = min_max([4, 1, 7, 2, 9])
print("Min:", lowest)   # Min: 1
print("Max:", highest)  # Max: 9
```

## Scope

**Scope** determines where a variable is accessible. Python has two main scopes:

- **Local scope**: variables defined inside a function. They exist only during the function call.
- **Global scope**: variables defined at the top level of a script. They are accessible everywhere.

```python
message = "global"

def show_scope():
    message = "local"
    print("Inside function:", message)

show_scope()               # Inside function: local
print("Outside function:", message)  # Outside function: global
```

The local variable `message` inside the function is a different variable than the global `message`. They share the same name but occupy separate memory.

### The `global` Keyword

To modify a global variable from inside a function, use the `global` keyword. Use this sparingly -- it makes code harder to follow:

```python
counter = 0

def increment():
    global counter
    counter += 1

increment()
increment()
print(counter)  # 2
```

## Example: Building a Simple Calculator

```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error: division by zero"
    return a / b

operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
}

def calculate(a, op, b):
    """Perform a calculation using the given operator."""
    if op not in operations:
        return "Error: unknown operator"
    return operations[op](a, b)

print(calculate(10, "+", 5))   # 15
print(calculate(10, "/", 3))   # 3.3333333333333335
print(calculate(10, "/", 0))   # Error: division by zero
```

## Exercise

Write a function called `fibonacci` that:

1. Takes an integer `n` as input
2. Returns a list of the first `n` Fibonacci numbers
3. Handles the edge case where `n` is 0 or negative

Expected usage:

```python
print(fibonacci(8))   # [0, 1, 1, 2, 3, 5, 8, 13]
print(fibonacci(1))   # [0]
print(fibonacci(0))   # []
```

### Solution

```python
def fibonacci(n):
    if n <= 0:
        return []
    if n == 1:
        return [0]

    sequence = [0, 1]
    while len(sequence) < n:
        sequence.append(sequence[-1] + sequence[-2])
    return sequence

print(fibonacci(8))   # [0, 1, 1, 2, 3, 5, 8, 13]
print(fibonacci(1))   # [0]
print(fibonacci(0))   # []
```
