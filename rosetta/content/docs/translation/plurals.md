+++
title = "Plural Rules"
description = "Handling plural forms across languages with CLDR plural categories"
tags = ["translation", "plurals", "cldr"]
+++

# Plural Rules

Different languages have different rules for how nouns change based on quantity. English distinguishes between singular and plural (1 item vs. 2 items), but many languages have more complex systems. Rosetta implements the Unicode CLDR plural rules to handle all cases correctly.

## CLDR Plural Categories

The CLDR specification defines six plural categories. Not all languages use all six:

| Category | Description | Example Languages |
|----------|-------------|-------------------|
| `zero` | Applies to the quantity zero | Arabic, Latvian, Welsh |
| `one` | Typically singular | English, German, Spanish, French, Italian |
| `two` | Dual form | Arabic, Hebrew, Slovenian |
| `few` | Paucal or other small quantities | Polish, Russian, Czech, Croatian |
| `many` | Used for larger quantities in some languages | Polish, Russian, Arabic, French |
| `other` | General plural, always required | All languages |

## Plural Category Assignments by Language

The following table shows which plural categories are used by selected languages, along with the numeric ranges that trigger each category:

| Language | zero | one | two | few | many | other |
|----------|------|-----|-----|-----|------|-------|
| English | -- | 1 | -- | -- | -- | 0, 2-999 |
| French | -- | 0, 1 | -- | -- | 1000000+ | 2-999999 |
| German | -- | 1 | -- | -- | -- | 0, 2-999 |
| Russian | -- | 1, 21, 31... | -- | 2-4, 22-24... | 0, 5-20, 25-30... | 1.5, 2.5... |
| Polish | -- | 1 | -- | 2-4, 22-24... | 0, 5-21, 25-31... | 1.5, 2.5... |
| Arabic | 0 | 1 | 2 | 3-10, 103-110... | 11-99, 111-199... | 100-102, 200-202... |
| Chinese | -- | -- | -- | -- | -- | 0, 1, 2, 3... |
| Japanese | -- | -- | -- | -- | -- | 0, 1, 2, 3... |
| Korean | -- | -- | -- | -- | -- | 0, 1, 2, 3... |
| Czech | -- | 1 | -- | 2-4 | -- | 0, 5-999 |
| Welsh | 0 | 1 | 2 | 3 | 6 | 4, 5, 7-999 |
| Hebrew | -- | 1 | 2 | -- | -- | 0, 3-999 |

## ICU Plural Syntax

Rosetta uses the ICU MessageFormat `plural` selector to define plural variants within a single translation string:

```
{count, plural,
  zero {No messages}
  one {# message}
  two {# messages}
  few {# messages}
  many {# messages}
  other {# messages}
}
```

The `#` symbol is replaced with the formatted number at runtime.

## Examples Across Languages

### English (two categories: one, other)

```json
{
  "items_count": "{count, plural, one {# item} other {# items}}",
  "messages": "{count, plural, one {You have # new message} other {You have # new messages}}"
}
```

| count | Output |
|-------|--------|
| 0 | 0 items |
| 1 | 1 item |
| 5 | 5 items |
| 100 | 100 items |

### Russian (four categories: one, few, many, other)

```json
{
  "items_count": "{count, plural, one {# товар} few {# товара} many {# товаров} other {# товара}}"
}
```

| count | Category | Output |
|-------|----------|--------|
| 1 | one | 1 товар |
| 3 | few | 3 товара |
| 5 | many | 5 товаров |
| 21 | one | 21 товар |
| 22 | few | 22 товара |
| 11 | many | 11 товаров |

### Arabic (six categories: zero, one, two, few, many, other)

```json
{
  "items_count": "{count, plural, zero {لا عناصر} one {عنصر واحد} two {عنصران} few {# عناصر} many {# عنصرًا} other {# عنصر}}"
}
```

| count | Category | Output |
|-------|----------|--------|
| 0 | zero | لا عناصر |
| 1 | one | عنصر واحد |
| 2 | two | عنصران |
| 5 | few | 5 عناصر |
| 15 | many | 15 عنصرًا |
| 100 | other | 100 عنصر |

### Polish (four categories: one, few, many, other)

```json
{
  "files_count": "{count, plural, one {# plik} few {# pliki} many {# plików} other {# pliku}}"
}
```

| count | Category | Output |
|-------|----------|--------|
| 1 | one | 1 plik |
| 3 | few | 3 pliki |
| 5 | many | 5 plików |
| 22 | few | 22 pliki |
| 112 | many | 112 plików |

## Ordinal Plurals

Some languages also have ordinal plural rules (1st, 2nd, 3rd). Use the `selectordinal` selector:

```
{position, selectordinal,
  one {#st place}
  two {#nd place}
  few {#rd place}
  other {#th place}
}
```

| position | Output |
|----------|--------|
| 1 | 1st place |
| 2 | 2nd place |
| 3 | 3rd place |
| 4 | 4th place |
| 11 | 11th place |
| 21 | 21st place |

## Exact Value Matching

Use `=N` syntax to match exact numeric values, which takes precedence over category matching:

```
{count, plural,
  =0 {Your inbox is empty}
  =1 {You have one message}
  other {You have # messages}
}
```

This is useful for providing specific wording for common values like zero and one, while using the standard plural form for everything else.

## Testing Plural Rules

Use the Rosetta CLI to test plural resolution for a given locale:

```bash
rosetta plural --locale ru --values 0,1,2,3,4,5,11,21,22,100
```

Output:

```
Locale: ru
  0   -> many
  1   -> one
  2   -> few
  3   -> few
  4   -> few
  5   -> many
  11  -> many
  21  -> one
  22  -> few
  100 -> many
```
