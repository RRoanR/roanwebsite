# Replit Agent Guide

## Overview

This is a bilingual (English/Dutch) business website for "Vastgoed & IT" (roanr.be), a Belgian sole proprietorship currently focused on two live services: smart home automation (Home Assistant) and IT consulting. The site is a lead-generation tool where visitors browse services, learn about the company, and submit quote requests via a form. Leads are stored in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) with pages: Home (/), Domotica (/domotica + Home Assistant cluster pages), IT Consultancy (/it-consultancy), Privacy (/privacy-en-bewaring), Contact (/contact)
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style). Custom color palette uses CSS variables (golden amber primary, charcoal accent)
- **State Management**: Zustand for i18n language toggle (English/Dutch). No other global state needed
- **Forms**: react-hook-form with @hookform/resolvers for Zod validation on the quote/lead form. The live UI currently exposes Home Automation and IT Consulting as the selectable services.
- **Animations**: Framer Motion for page transitions, scroll-triggered animations, and micro-interactions (e.g., language toggle)
- **Data Fetching**: TanStack React Query for server state; custom `useCreateLead` hook wraps the mutation
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (run via tsx)
- **API Design**: Single REST endpoint `POST /api/leads` for lead creation. Route definitions are shared between client and server via `shared/routes.ts` which includes Zod schemas for input validation and response typing
- **Build**: Custom build script using Vite for client and esbuild for server. Production output goes to `dist/` (server as `dist/index.cjs`, client as `dist/public/`)
- **Dev Server**: Vite dev server with HMR is integrated as Express middleware in development mode

### Database
- **Database**: PostgreSQL (required, connection via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for automatic Zod schema generation from table definitions
- **Schema**: Single `leads` table with fields: id (serial), name, email, phone (optional), service, sliderValue (integer), message, language (default 'en'), createdAt (timestamp)
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)
- **Storage Pattern**: `IStorage` interface in `server/storage.ts` with `DatabaseStorage` implementation. New storage methods should follow this pattern

### Shared Code
- `shared/schema.ts` — Drizzle table definitions and Zod insert schemas
- `shared/routes.ts` — API route contracts (paths, methods, input/output schemas) shared between frontend and backend for type safety

### Archived Content
- The former `plaatsbeschrijvingen` section is not part of the live router anymore.
- Its source was preserved under `stashed/plaatsbeschrijvingen/client/src/...` so the original hierarchy can be restored later without rebuilding it from scratch.
- `stashed/plaatsbeschrijvingen/README.md` documents the archived paths and the basic restore steps.

### Key Design Decisions
- **Shared route contracts**: Both client and server import from `shared/routes.ts` so API paths, HTTP methods, and validation schemas are defined once. This prevents drift between frontend and backend
- **Zustand for i18n**: Lightweight alternative to full i18n libraries. All translations live in a single `client/src/lib/i18n.ts` file as a flat key-value map for 'en' and 'nl'
- **No authentication**: This is a public-facing lead generation site with no user accounts
- **Slider for project scope**: The quote form uses a numeric slider (`sliderValue`) instead of a free-text budget field, keeping UX clean and conversion-friendly
- **Services-only live branch**: The live site was simplified to focus on automation and IT while preserving the removed survey content in a dedicated archive folder

## External Dependencies

- **PostgreSQL**: Required database. Must be provisioned and `DATABASE_URL` environment variable set
- **Google Fonts**: Inter and Plus Jakarta Sans loaded via CSS import; Architects Daughter, DM Sans, Fira Code, Geist Mono loaded via HTML link tags
- **Stock images**: Service images in client/public/images/ for hero backgrounds
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, and `@replit/vite-plugin-dev-banner` used in development
- **No external APIs**: No third-party service integrations (no email service, no payment processing, no analytics currently configured)
