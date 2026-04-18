+++
title = "Working with Collections"
weight = 2
description = "Master lists, dictionaries, sets, and comprehensions"

[extra]
difficulty = "intermediate"
+++

## Concept

Collections are data structures that hold multiple values. Python provides four built-in collection types, each with different characteristics:

| Collection | Ordered | Mutable | Duplicates | Syntax          |
|------------|---------|---------|------------|-----------------|
| `list`     | Yes     | Yes     | Yes        | `[1, 2, 3]`    |
| `tuple`    | Yes     | No      | Yes        | `(1, 2, 3)`    |
| `dict`     | Yes     | Yes     | Keys: No   | `{"a": 1}`     |
| `set`      | No      | Yes     | No         | `{1, 2, 3}`    |

## Lists

Lists are the most versatile collection. They store items in order and allow duplicates:

```python
# Creating lists
colors = ["red", "green", "blue"]
numbers = list(range(1, 6))  # [1, 2, 3, 4, 5]

# Accessing elements
print(colors[0])    # red
print(colors[-1])   # blue (last item)

# Slicing
print(numbers[1:4])  # [2, 3, 4]
print(numbers[:3])   # [1, 2, 3]
print(numbers[::2])  # [1, 3, 5] (every other item)

# Modifying
colors.append("yellow")
colors.insert(1, "orange")
colors.remove("green")
print(colors)  # ['red', 'orange', 'blue', 'yellow']

# Sorting
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
numbers.sort()
print(numbers)  # [1, 1, 2, 3, 4, 5, 6, 9]

# Sorted without modifying original
original = [3, 1, 4]
ordered = sorted(original, reverse=True)
print(ordered)   # [4, 3, 1]
print(original)  # [3, 1, 4]
```

## Dictionaries

Dictionaries store key-value pairs. Keys must be unique and immutable:

```python
# Creating dictionaries
user = {
    "name": "Alice",
    "age": 30,
    "email": "alice@example.com",
}

# Accessing values
print(user["name"])          # Alice
print(user.get("phone", "N/A"))  # N/A (default for missing key)

# Adding and updating
user["phone"] = "555-0123"
user["age"] = 31

# Iterating
for key, value in user.items():
    print(f"{key}: {value}")

# Useful methods
print(list(user.keys()))    # ['name', 'age', 'email', 'phone']
print(list(user.values()))  # ['Alice', 31, 'alice@example.com', '555-0123']
```

## Sets

Sets store unique values with no guaranteed order. They are ideal for membership testing and removing duplicates:

```python
# Creating sets
tags = {"python", "coding", "tutorial"}
numbers = {1, 2, 2, 3, 3, 3}
print(numbers)  # {1, 2, 3}

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a & b)   # {3, 4}       intersection
print(a | b)   # {1, 2, 3, 4, 5, 6}  union
print(a - b)   # {1, 2}       difference
print(a ^ b)   # {1, 2, 5, 6} symmetric difference

# Membership testing (very fast)
valid_statuses = {"active", "pending", "closed"}
if "active" in valid_statuses:
    print("Status is valid")
```

## List Comprehensions

List comprehensions provide a concise way to create lists:

```python
# Basic comprehension
squares = [x ** 2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With a condition
evens = [x for x in range(20) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Transforming strings
words = ["hello", "world", "python"]
upper = [w.upper() for w in words]
print(upper)  # ['HELLO', 'WORLD', 'PYTHON']

# Nested comprehension (flattening)
matrix = [[1, 2], [3, 4], [5, 6]]
flat = [num for row in matrix for num in row]
print(flat)  # [1, 2, 3, 4, 5, 6]
```

## Dictionary Comprehensions

Similar syntax works for dictionaries:

```python
# Create a dict from two lists
keys = ["name", "age", "city"]
values = ["Bob", 25, "NYC"]
profile = {k: v for k, v in zip(keys, values)}
print(profile)  # {'name': 'Bob', 'age': 25, 'city': 'NYC'}

# Filter and transform
scores = {"Alice": 85, "Bob": 62, "Carol": 91, "Dan": 78}
passed = {name: score for name, score in scores.items() if score >= 70}
print(passed)  # {'Alice': 85, 'Carol': 91, 'Dan': 78}
```

## Example: Word Frequency Counter

A practical example combining dictionaries, lists, and comprehensions:

```python
def word_frequency(text):
    """Count the frequency of each word in the given text."""
    words = text.lower().split()
    # Remove punctuation from each word
    clean = [w.strip(".,!?;:") for w in words]
    # Build frequency dictionary
    freq = {}
    for word in clean:
        if word:
            freq[word] = freq.get(word, 0) + 1
    return freq

def top_words(freq, n=5):
    """Return the n most frequent words."""
    sorted_words = sorted(freq.items(), key=lambda x: x[1], reverse=True)
    return sorted_words[:n]

text = """
Python is a powerful language. Python is easy to learn.
Many developers choose Python for data science, web development,
and automation. Python continues to grow in popularity.
"""

freq = word_frequency(text)
print("All words:", freq)
print("Top 3:", top_words(freq, 3))
# Top 3: [('python', 4), ('is', 2), ('to', 2)]
```

## Exercise

Write a program that:

1. Takes a list of student records (dictionaries with `name` and `grades` keys)
2. Computes the average grade for each student
3. Returns a new list sorted by average grade (highest first)
4. Each result should include `name`, `average`, and `status` ("pass" if average >= 60, "fail" otherwise)

Expected usage:

```python
students = [
    {"name": "Alice", "grades": [90, 85, 92]},
    {"name": "Bob", "grades": [55, 60, 48]},
    {"name": "Carol", "grades": [78, 82, 75]},
]

results = rank_students(students)
for r in results:
    print(r)
# {'name': 'Alice', 'average': 89.0, 'status': 'pass'}
# {'name': 'Carol', 'average': 78.3, 'status': 'pass'}
# {'name': 'Bob', 'average': 54.3, 'status': 'fail'}
```

### Solution

```python
def rank_students(students):
    results = []
    for s in students:
        avg = round(sum(s["grades"]) / len(s["grades"]), 1)
        results.append({
            "name": s["name"],
            "average": avg,
            "status": "pass" if avg >= 60 else "fail",
        })
    results.sort(key=lambda r: r["average"], reverse=True)
    return results

students = [
    {"name": "Alice", "grades": [90, 85, 92]},
    {"name": "Bob", "grades": [55, 60, 48]},
    {"name": "Carol", "grades": [78, 82, 75]},
]

for r in rank_students(students):
    print(r)
```
