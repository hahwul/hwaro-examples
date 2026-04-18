+++
title = "Variables and Types"
weight = 1
description = "Learn how to store data and understand the basic data types in Python"

[extra]
difficulty = "beginner"
+++

## Concept

A **variable** is a name that refers to a value stored in memory. In Python, you create a variable by assigning a value with the `=` operator. You do not need to declare a type -- Python figures it out automatically.

Python has several built-in data types. The most common ones are:

| Type    | Description              | Example          |
|---------|--------------------------|------------------|
| `int`   | Whole numbers            | `42`             |
| `float` | Decimal numbers          | `3.14`           |
| `str`   | Text strings             | `"hello"`        |
| `bool`  | True or False            | `True`           |
| `None`  | Represents no value      | `None`           |

## Example

```python
# Assigning variables
name = "Alice"
age = 30
height = 5.7
is_student = False

# Checking types
print(type(name))       # <class 'str'>
print(type(age))        # <class 'int'>
print(type(height))     # <class 'float'>
print(type(is_student)) # <class 'bool'>

# Variables can be reassigned
age = 31
print(age)  # 31

# Multiple assignment
x, y, z = 1, 2, 3
print(x, y, z)  # 1 2 3
```

## Type Conversion

You can convert between types using built-in functions:

```python
# String to integer
user_input = "42"
number = int(user_input)
print(number + 8)  # 50

# Integer to string
count = 10
message = "Items: " + str(count)
print(message)  # Items: 10

# Float to integer (truncates toward zero)
pi = 3.99
print(int(pi))  # 3
```

## Naming Rules

Variable names must follow these rules:

- Must start with a letter or underscore (`_`)
- Can contain letters, digits, and underscores
- Case-sensitive (`age` and `Age` are different variables)
- Cannot be a Python keyword (`if`, `for`, `class`, etc.)

By convention, Python uses `snake_case` for variable names:

```python
# Good
user_name = "Bob"
max_retry_count = 5

# Avoid
userName = "Bob"   # camelCase is not idiomatic Python
MaxRetryCount = 5  # PascalCase is reserved for class names
```

## Exercise

Write a program that:

1. Creates a variable `temperature_f` set to `98.6`
2. Converts it to Celsius using the formula: `(F - 32) * 5 / 9`
3. Stores the result in `temperature_c`
4. Prints both values with labels

Expected output:

```
Fahrenheit: 98.6
Celsius: 37.0
```

### Solution

```python
temperature_f = 98.6
temperature_c = (temperature_f - 32) * 5 / 9

print("Fahrenheit:", temperature_f)
print("Celsius:", round(temperature_c, 1))
```
