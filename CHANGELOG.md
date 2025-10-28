# Changelog

All notable changes to the BrandStudios.ai Brand Intelligence Demo will be documented in this file.

## [Unreleased]

### Added - 2025-10-27/28
- **Agency View client selection system**
  - Two-mode Agency View: tenant overview and individual client drill-down
  - Client selection buttons with status indicators (Running, Review, Attention)
  - Campaign descriptions for each client (ACME Fashion, Lilydale Beauty, NorthPeak Outdoors)
  - Glass morphism hover effects with coral accent on client buttons
  - Back button navigation from individual client to agency overview
  - Conditional dropdown visibility based on view mode

- **Terminology updates**
  - Renamed "Tenant View" → "Agency View"
  - Renamed "Client View" → "Brand View"
  - Renamed "Client Workspace" → "Brand Workspace"
  - Renamed "Consistency floor" → "Brand Drift™"

### Changed
- Improved responsive grid breakpoints for execution lanes
  - 6-column layout now displays at 1024px (lg) instead of 1280px (xl)
  - Cards stay horizontal at lower screen widths

### Technical Details
- Added `tenantOverview` state for Agency View mode management
- Created `ClientSelectionButtons` component with status configuration
- Added campaign and status fields to tenant data objects
- Updated comments throughout for clarity

## [0.1.0] - 2025-10-26

### Initial Release
- Multi-tenant brand intelligence platform demo
- Agency/client hierarchy model showcase
- Six execution lanes: Memory, Orchestrator, Generator, Evaluator, Human Review, Export
- Live controls for variations, Brand Drift™ threshold, and automation mode
- Glass morphism design system with brand-specific color palettes
- Three demo clients: ACME Fashion, Lilydale Beauty, NorthPeak Outdoors
- Responsive layout with Tailwind CSS
- Framer Motion animations
