+++
title = "About"
template = "page"
+++

## Clean Seoul

Clean Seoul is the reduction of a blog theme to its load-bearing elements: black type, white paper, a single line for the skyline, and nothing else. It shares a family with Ink Seoul, but removes even the brush-stroke gestures. There is no ornament here. The typography carries the entire site.

### Design Philosophy

Everything on the page is either a word or the space around a word. No cards. No colored accents. No illustrations. The only decoration on the entire site is a single one-pixel line drawing of a skyline, rendered once in the hero and once in the footer.

### The Palette

| Tone | Hex | Role |
|---|---|---|
| White | #FFFFFF | Page surface |
| Near-white | #FAFAFA | Code blocks |
| Line | #ECECEC | Borders |
| Rule | #D6D6D6 | Quiet dividers |
| Mute | #8A8A8A | Metadata |
| Text | #333333 | Body |
| Heading | #0A0A0A | Headings, links |

### Typography

- **우아한 세리프 (ElegantSerif)** for the Hangul display mark — the 서울 signature
- **Inter** at weights 200–800 for Latin display, body, and UI
- **Noto Sans KR** for small Korean metadata and supporting text
- **JetBrains Mono** for dates, coordinates, and ordinals
- A serif Hangul face against a sans Latin face — the core typographic tension of the theme

### Features

- Giant 서 + 울(outline) Hangul mark as the hero signature
- Vertical 깨끗한 서울 rail running down the left edge
- 자모 (ㅅㅓㅇㅜㄹ) decomposition grid as a subtle typographic detail
- Magazine-style 글 01 / 글 02 ordinals on every post, via CSS counters
- 서울 signature wordmark in the footer — solid + outline pair
- "없음" Korean treatment on the 404 page
- Editorial list layout — posts as rows with Hangul ordinal, date, title, arrow
- One-pixel line skyline as the only drawn illustration
- Radically restrained palette: white, black, and the grays between

### Built With

This theme was built with [Hwaro](https://github.com/hahwul/hwaro), a fast and flexible static site generator.
