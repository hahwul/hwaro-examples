+++
title = "Error Handling"
weight = 1
description = "Handle errors gracefully with try/except and custom exceptions"

[extra]
difficulty = "intermediate"
+++

## Concept

Errors are inevitable in programming. Files might not exist, networks can fail, and users often provide unexpected input. **Error handling** lets your program respond to problems gracefully instead of crashing.

Python uses **exceptions** for error handling. When something goes wrong, Python raises an exception. You can catch these exceptions and decide what to do.

## Try and Except

The `try`/`except` block catches exceptions:

```python
try:
    number = int(input("Enter a number: "))
    result = 100 / number
    print("Result:", result)
except ValueError:
    print("That is not a valid number")
except ZeroDivisionError:
    print("Cannot divide by zero")
```

### Common Exception Types

| Exception          | When it occurs                          |
|--------------------|-----------------------------------------|
| `ValueError`       | Wrong value (e.g., `int("abc")`)        |
| `TypeError`        | Wrong type (e.g., `"a" + 1`)           |
| `KeyError`         | Missing dictionary key                  |
| `IndexError`       | List index out of range                 |
| `FileNotFoundError`| File does not exist                     |
| `ZeroDivisionError`| Division by zero                        |
| `AttributeError`   | Object has no such attribute            |

## The Full Try Block

A complete `try` block can include `else` and `finally`:

```python
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found, using default data")
    content = "default"
else:
    # Runs only if no exception occurred
    print("File loaded successfully")
finally:
    # Always runs, whether or not an exception occurred
    print("Cleanup complete")
```

- `else`: executes when the `try` block succeeds without errors
- `finally`: executes no matter what, useful for cleanup

## Raising Exceptions

Use `raise` to signal an error in your own code:

```python
def withdraw(balance, amount):
    if amount <= 0:
        raise ValueError("Amount must be positive")
    if amount > balance:
        raise ValueError("Insufficient funds")
    return balance - amount

try:
    new_balance = withdraw(100, 150)
except ValueError as e:
    print("Error:", e)
# Output: Error: Insufficient funds
```

## Custom Exceptions

Define your own exception classes for domain-specific errors:

```python
class ValidationError(Exception):
    """Raised when input validation fails."""
    pass

class NotFoundError(Exception):
    """Raised when a requested resource is not found."""
    pass

def find_user(users, user_id):
    if not isinstance(user_id, int):
        raise ValidationError("User ID must be an integer")
    for user in users:
        if user["id"] == user_id:
            return user
    raise NotFoundError(f"User {user_id} not found")

users = [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"},
]

try:
    user = find_user(users, 3)
except ValidationError as e:
    print("Validation:", e)
except NotFoundError as e:
    print("Not found:", e)
# Output: Not found: User 3 not found
```

## Example: Safe File Reader

A practical function that reads a file with proper error handling:

```python
def read_config(filepath, required_keys=None):
    """Read a config file and return a dictionary of key=value pairs."""
    config = {}

    try:
        with open(filepath, "r") as f:
            for line_number, line in enumerate(f, start=1):
                line = line.strip()
                if not line or line.startswith("#"):
                    continue
                if "=" not in line:
                    raise ValueError(
                        f"Line {line_number}: expected key=value format"
                    )
                key, value = line.split("=", 1)
                config[key.strip()] = value.strip()

    except FileNotFoundError:
        print(f"Config file not found: {filepath}")
        return None
    except ValueError as e:
        print(f"Parse error: {e}")
        return None

    if required_keys:
        missing = [k for k in required_keys if k not in config]
        if missing:
            print(f"Missing required keys: {missing}")
            return None

    return config

# Usage
result = read_config("app.conf", required_keys=["host", "port"])
if result:
    print("Config loaded:", result)
else:
    print("Using default configuration")
```

## Exercise

Write a function called `safe_divide` that:

1. Takes a list of tuples `[(a, b), ...]`
2. Divides `a` by `b` for each tuple
3. Returns a list of results, substituting `None` for any division that fails
4. Handles `ZeroDivisionError` and `TypeError`

Expected usage:

```python
pairs = [(10, 2), (9, 0), (8, "x"), (15, 3)]
print(safe_divide(pairs))
# [5.0, None, None, 5.0]
```

### Solution

```python
def safe_divide(pairs):
    results = []
    for a, b in pairs:
        try:
            results.append(a / b)
        except (ZeroDivisionError, TypeError):
            results.append(None)
    return results

pairs = [(10, 2), (9, 0), (8, "x"), (15, 3)]
print(safe_divide(pairs))
# [5.0, None, None, 5.0]
```
