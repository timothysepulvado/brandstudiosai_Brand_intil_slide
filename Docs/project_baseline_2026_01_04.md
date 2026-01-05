# Project Baseline: Brand Intelligence Slide
**Date:** 2026-01-05
**Version:** 2.1.0

## 1. Project Structure
The current project follows a standard Next.js (Pages Router) structure.

```
/
├── components/
│   └── BrandIntelligenceDiagram.jsx  # Main Dashboard Component (The "Engine")
├── pages/
│   ├── _app.jsx                      # App Wrapper
│   └── index.jsx                     # Entry Point (Renders BrandIntelligenceDiagram)
├── styles/
│   └── globals.css                   # Global Styles (Tailwind directives)
├── public/                           # Static assets (Currently empty/default)
├── Docs/
│   ├── CHANGELOG.md                  # Version history and changes
│   └── project_baseline_2026_01_04.md
├── tailwind.config.js                # Tailwind Config (Default)
└── package.json                      # Dependencies
```

## 2. Style System
The project uses **Tailwind CSS** with specific arbitrary values for a custom "Brand Studios" aesthetic.

### Color Palette (Inferred from Code)
- **Primary Text / UI Elements**: `#1a2b4d` (Deep Navy)
- **Accent / Highlights**: `#D97943` (Burnt Orange/Terracotta)
- **Backgrounds**: 
    - `#F5F1EB` / `#FDFBF7` / `#FAF9F6` (Warm Off-Whites/Creams)
    - `#020617` / `#0F172A` (Deep Slate/Black for Dark Mode/CYLNDR Client)
- **Status Colors**:
    - Success/Safe: `#2f9a63`
    - Warning/Drift: `#D97943`

### Typography
- **Primary**: `Inter` / `sans-serif` (Clean, modern UI)
- **Monospace**: `font-mono` (Technical metrics, IDs, logs)
- **Serif**: `font-serif` (Used sparingly for "Jenni Kayne" brand aesthetic)

### Design Motifs
- **"Tech Corners"**: Custom borders on corners of cards to give a technical/blueprint feel.
- **Glass/Tech Overlay**: Use of 1px gradients and dashed lines to simulate a HUD or schematic.
- **Skeuomorphic touches**: Subtle shadows and "physical" looking chips.

## 3. Component Architecture
The application is centralized around a single complex dashboard component.

### `components/BrandIntelligenceDiagram.jsx`
This is the core "operating system" view. It contains several simulation sub-components:

#### Internal Components
- **`ThemeLabel`**: Section headers with a specific orange square + gradient line style.
- **`SectionCard`**: Container for content sections with backdrop blur.
- **`Badge`**: Status indicator (Running, Review, Attention).
- **`StatusChip`**: Small pills showing status (e.g., "Active", "Governance").
- **`BrandFidelityCard`**: Client-specific card showing brand fidelity % and breakdown.

#### Data Model
- **`clients`**: Array containing configuration for "Jenni Kayne" and "CYLNDR" with:
  - `brandFidelity`: Client-specific percentage (JK: 98.2%, CYLNDR: 96.9%)
  - `asks`: Client-specific "The Ask" bullet points
  - `solutions`: Client Pack module configurations
- **`lanes`**: Array defining 5 "OS Governance Bus" steps (Brand Memory through Insight Loop).

## 4. Change Log

### [2.1.0] - 2026-01-05
- **Header**: Removed "Proforma Dashboard" label and "Assets Governed (Pilot) 12.4k"
- **Ship-Gate**: Updated to "auto-pass ≥ 90%"
- **OS Core Services**: Removed Card #06, now 5 cards
- **Brand Fidelity**: Individualized per client, removed Auto-Pass badge
- **Insights → The Ask**: Renamed section with client-specific content
- **CYLNDR Client Pack**: Updated to Concept Creation, Asset Adaptation, Creative Studio, Compliance Check

### [2.0.0] - 2026-01-04
- **Theme Update**: Shifted to a professional "BrandStudios.AI OS" aesthetic.
- **Color Logic**: Implemented strict color hierarchy (Navy/Orange/Cream).
- **Interactive Dashboard**: Client Selector, Website Mock previews, Live Feed insights.
- **Visuals**: Background grid texture, Bus architecture, Tech Corner styling.
- **Dependencies**: `lucide-react` for icons; `framer-motion` for transitions.

