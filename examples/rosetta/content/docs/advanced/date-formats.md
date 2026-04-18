+++
title = "Date Formats"
description = "Locale-aware date and time formatting patterns across languages"
tags = ["dates", "formatting", "advanced"]
+++

# Date Formats

Date and time formatting varies significantly across locales. The order of day, month, and year components, the separator characters, month name conventions, and calendar systems all change depending on the target locale. Rosetta uses the CLDR date formatting patterns to produce locale-appropriate output.

## Date Component Order

| Locale | Short Date | Component Order | Separator |
|--------|-----------|-----------------|-----------|
| `en-US` | 3/30/2026 | Month/Day/Year | / |
| `en-GB` | 30/03/2026 | Day/Month/Year | / |
| `de-DE` | 30.03.2026 | Day.Month.Year | . |
| `fr-FR` | 30/03/2026 | Day/Month/Year | / |
| `ja-JP` | 2026/03/30 | Year/Month/Day | / |
| `ko-KR` | 2026. 3. 30. | Year. Month. Day. | . |
| `zh-Hans` | 2026/3/30 | Year/Month/Day | / |
| `ar-SA` | 30/3/2026 | Day/Month/Year | / |
| `ru-RU` | 30.03.2026 | Day.Month.Year | . |
| `pt-BR` | 30/03/2026 | Day/Month/Year | / |

## Format Styles

Rosetta supports four standard date format styles defined by the CLDR:

### Short

| Locale | Output | Pattern |
|--------|--------|---------|
| `en-US` | 3/30/26 | M/d/yy |
| `de-DE` | 30.03.26 | dd.MM.yy |
| `ja-JP` | 2026/03/30 | yyyy/MM/dd |
| `ar-SA` | 30/3/2026 | d/M/yyyy |

### Medium

| Locale | Output | Pattern |
|--------|--------|---------|
| `en-US` | Mar 30, 2026 | MMM d, yyyy |
| `de-DE` | 30.03.2026 | dd.MM.yyyy |
| `ja-JP` | 2026/03/30 | yyyy/MM/dd |
| `ar-SA` | 30/03/2026 | dd/MM/yyyy |

### Long

| Locale | Output | Pattern |
|--------|--------|---------|
| `en-US` | March 30, 2026 | MMMM d, yyyy |
| `de-DE` | 30. Marz 2026 | d. MMMM yyyy |
| `ja-JP` | 2026年3月30日 | yyyy年M月d日 |
| `ar-SA` | 30 مارس 2026 | d MMMM yyyy |
| `ko-KR` | 2026年 3月 30日 | yyyy年 M月 d日 |
| `ru-RU` | 30 марта 2026 г. | d MMMM yyyy г. |

### Full

| Locale | Output | Pattern |
|--------|--------|---------|
| `en-US` | Monday, March 30, 2026 | EEEE, MMMM d, yyyy |
| `de-DE` | Montag, 30. Marz 2026 | EEEE, d. MMMM yyyy |
| `ja-JP` | 2026年3月30日月曜日 | yyyy年M月d日EEEE |
| `fr-FR` | lundi 30 mars 2026 | EEEE d MMMM yyyy |

## Time Formats

| Locale | Short Time | Uses 24h | AM/PM |
|--------|-----------|----------|-------|
| `en-US` | 2:30 PM | No | Yes |
| `en-GB` | 14:30 | Yes | No |
| `de-DE` | 14:30 | Yes | No |
| `ja-JP` | 14:30 | Yes | No |
| `ko-KR` | 오후 2:30 | No | Yes (prefix) |
| `zh-Hans` | 下午2:30 | No | Yes (prefix) |
| `ar-SA` | 2:30 م | No | Yes (suffix) |

## Relative Time Formatting

Rosetta includes a relative time formatter that produces human-readable strings like "3 days ago" or "in 2 hours":

```typescript
import { formatRelativeTime } from '@rosetta-i18n/core';

formatRelativeTime(-1, 'day', 'en')    // "yesterday"
formatRelativeTime(-3, 'day', 'en')    // "3 days ago"
formatRelativeTime(2, 'hour', 'en')    // "in 2 hours"
formatRelativeTime(-1, 'day', 'de')    // "gestern"
formatRelativeTime(-3, 'day', 'ja')    // "3日前"
formatRelativeTime(1, 'day', 'ar')     // "غدًا"
```

Relative time labels across locales:

| Relative Value | en | fr | de | ja | ar |
|----------------|----|----|----|----|-----|
| yesterday | yesterday | hier | gestern | 昨日 | أمس |
| today | today | aujourd'hui | heute | 今日 | اليوم |
| tomorrow | tomorrow | demain | morgen | 明日 | غدًا |
| 2 days ago | 2 days ago | il y a 2 jours | vor 2 Tagen | 2日前 | قبل يومين |
| in 3 hours | in 3 hours | dans 3 heures | in 3 Stunden | 3時間後 | خلال 3 ساعات |

## Calendar Systems

While the Gregorian calendar is the default, some locales use alternative calendar systems. Rosetta supports specifying the calendar system in the formatting options:

| Calendar | Locales | Example (March 30, 2026) |
|----------|---------|--------------------------|
| Gregorian | Most | 2026-03-30 |
| Islamic (Hijri) | `ar-SA` | 1447-10-02 |
| Japanese Imperial | `ja-JP-u-ca-japanese` | 令和8年3月30日 |
| Buddhist | `th-TH` | 2569-03-30 |
| Persian (Jalali) | `fa-IR` | 1405-01-10 |

## Usage in Code

```typescript
import { useI18n } from '@rosetta-i18n/react';

function EventDate({ date }) {
  const { formatDate, formatTime } = useI18n();

  return (
    <div>
      <span>{formatDate(date, 'long')}</span>
      <span>{formatTime(date, 'short')}</span>
    </div>
  );
}
```

The output adjusts automatically based on the active locale without any conditional logic in the component.
