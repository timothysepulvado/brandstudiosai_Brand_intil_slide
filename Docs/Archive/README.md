# BrandStudios.AI - Brand Intelligence Demo

An interactive demo showcasing BrandStudios.ai's multi-tenant brand intelligence platform for agencies managing multiple brand clients.

## Overview

This Next.js application demonstrates how agencies can use BrandStudios.ai to manage multiple brand clients, each with isolated databases, ML training, and brand DNA. The platform includes:

- **Agency View**: High-level overview with client selection and status tracking
- **Brand View**: Technical infrastructure details and execution pipeline
- **Six Execution Lanes**: Memory → Orchestrator → Generator → Evaluator → Human Review → Export
- **Brand Drift™**: Proprietary consistency scoring and threshold management
- **Live Controls**: Interactive demo of tenant management, throughput, and governance

## Demo Clients

1. **ACME Fashion** (Running) - Bold, Urban, Editorial
2. **Lilydale Beauty** (Review) - Soft, Minimal, Elevated
3. **NorthPeak Outdoors** (Attention) - Crisp, Natural, Adventurous

## Tech Stack

- **Framework**: Next.js 13.5.6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
http://localhost:3000
```

## Project Structure

```
/
├── components/
│   └── BrandIntelligenceDiagram.jsx  # Main demo component
├── pages/
│   └── index.js                       # Home page
├── styles/
│   └── globals.css                    # Global styles
└── public/                            # Static assets
```

## Key Features

### Agency View
- **Tenant Overview Mode**: View all clients, active campaigns, and status at a glance
- **Individual Client Mode**: Drill down into specific client DNA, campaigns, and branding
- **Status Indicators**: Running, Review, Attention badges for each client

### Brand View
- **Technical Details**: Infrastructure components and execution pipeline
- **Execution Lanes**: Six-step process from brand memory to delivery
- **Live Metrics**: Real-time stats on consistency, variations, and automation

### Live Controls
- **Tenant Workspace**: Select and manage different brand clients
- **Variations per Brief**: Control creative volume (1-24)
- **Brand Drift™**: Set consistency floor threshold (60-95%)
- **Intelligent Automation**: Toggle between auto-package and manual review

## Responsive Design

- **Mobile** (< 768px): Single column, stacked layout
- **Tablet** (768px - 1024px): 2-column grid
- **Desktop** (1024px+): 6-column execution lanes, full layout

## Branch Structure

- **main**: Production-ready code
- **tim-dev**: Active development branch

## Recent Updates

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

## Development Notes

- All vendor names removed (Supabase, Pinecone, Flowise, Vercel) - now generic
- Glass morphism design with brand-specific color tints
- Human-in-the-loop (HITL) reinforcement learning emphasized
- LoRA adapters visible in both views

## License

Proprietary - BrandStudios.ai
