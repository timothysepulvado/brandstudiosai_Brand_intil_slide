# Project Baseline: Brand Intelligence Slide
**Date:** 2026-01-04
**Version:** 2.0.0 (Baseline)

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
- **`TechLabel`**:  Section headers with a specific orange square + gradient line style.
- **`TechCard`**: The main container for modules, featuring the "tech corner" borders.
- **`StatusChip`**: Small pills showing status (e.g., "Active", "Governance").
- **`BrandFidelityMetric`**: A specific card showing the "92.1%" score and breakdown.
- **`WebsiteMock`**: A dynamic component that changes based on the selected client (`jenni-kayne` vs `cylndr`), rendering a mini-website preview inside the dashboard.

#### Data Model
- **`clients`**: Array containing configuration for "Jenni Kayne" and "CYLNDR".
- **`lanes`**: Array defining the "OS Governance Bus" steps (Brand Memory, Creative Studio, etc.) at the bottom.

## 4. Change Log
**Current State as of Jan 4, 2026**

### [NEW] Design Overhaul v2.0
- **Theme Update**: Shifted to a professional "BrandStudios.AI OS" aesthetic.
- **Color Logic**: Implemented strict color hierarchy (Navy/Orange/Cream).
- **Interactive Dashboard**:
    - Added Client Selector (Switch between Light Mode "Jenni Kayne" and Dark Mode "CYLNDR").
    - Added animated "Website Mock" previews that react to client selection.
    - Added "Live Feed" insights panel.
- **Visuals**:
    - Background grid texture added.
    - "Bus" architecture visual at the bottom (OS Governance Bus).
    - "Tech Corner" styling applied to all cards.

### [REF] Refactoring
- **Consolidation**: Most logic is currently contained within `BrandIntelligenceDiagram.jsx` for ease of editing.
- **Dependencies**: `lucide-react` used for all iconography; `framer-motion` for transitions.
