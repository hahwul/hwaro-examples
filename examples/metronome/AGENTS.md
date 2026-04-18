# metronome - Music Production Blog with Metronome Aesthetics

A dark-themed music production blog featuring metronome-inspired design with pendulum animations, BPM-based timing, and a late-night recording studio atmosphere.

## Design Features

- **Color Palette**: Beat black (#0a0a0a), tempo red (#d32f2f), wood brown (#5d4037), metal silver (#b0bec5)
- **Animated Sidebar**: Fixed metronome with swinging pendulum animation synchronized to 120 BPM
- **Time Signatures**: Visual separators using musical notation (4/4, 3/4, 6/8)
- **BPM Integration**: Content entrance animations tied to metronome timing (120 BPM = 0.5s)
- **Studio Aesthetics**: Dark console-style interface mimicking late-night recording studio environment

## Key Components

### Metronome Sidebar
- Fixed left sidebar (80px width)
- Animated pendulum with CSS keyframes
- BPM display showing current tempo
- Wood-textured housing with metallic accents
- Time signature markers (4/4, 3/4, 6/8)

### Content Features
- Posts support custom BPM metadata via `[extra]` section
- Fade-in animations with delays matching BPM timing
- Beat indicators in footer that pulse in rhythm
- Musical measure separators throughout design

### Templates
- `home.html`: Hero section with staggered content appearance
- `page.html`: Single post/page with time signature header
- `section.html`: Post listing with rhythmic entrance timing
- `taxonomy.html` & `taxonomy_term.html`: Tag pages with musical styling
- `404.html`: Tempo lost error page

## Content Structure

```
content/
├── index.md          # Homepage (uses home.html template)
├── posts/            # Blog posts section
│   ├── _index.md    # Posts listing
│   └── *.md         # Individual posts with BPM metadata
└── about.md         # About page
```

## Custom Metadata

Posts support BPM specification:

```toml
[extra]
bpm = 120
```

This displays alongside the post date and can influence animation timing.

## Typography

- **Headers**: Barlow (clean, modern, technical)
- **Monospace**: Space Mono (BPM displays, dates, metadata)
- **Body**: Barlow (consistent with headers)

## Animations

All animations use CSS custom property `--bpm-120: 0.5s` for consistency:
- Pendulum swing: 0.5s (matching 120 BPM)
- Fade-in sequences: Staggered by 0.5s intervals
- Beat indicators: 4-beat pulse cycle (2s total)

## Technical Notes

- No gradients or emojis per requirements
- Pure CSS animations (no JavaScript)
- Responsive design with mobile sidebar collapse
- Semantic HTML structure
- Color scheme optimized for late-night viewing

## Local Development

```bash
cd metronome
hwaro serve --open
```

Builds and serves at `http://localhost:3000` with live reload.

For more information about Hwaro and site configuration, see the [main repository AGENTS.md](../AGENTS.md).
