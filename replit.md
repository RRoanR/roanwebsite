# Replit Agent Guide

## Overview

This is a bilingual (English/Dutch) business website for "Vastgoed & IT" (roanr.be), a Belgian sole proprietorship offering three services: topographical surveying (Plaatsbeschrijvingen), smart home automation (Home Assistant), and IT consulting. The site is a lead-generation tool — visitors browse services, learn about the company, and submit quote requests via a form. Leads are stored in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) with 4 pages: Home, Services, About, Contact
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style). Custom color palette uses CSS variables (deep navy blue primary, warm amber accent)
- **State Management**: Zustand for i18n language toggle (English/Dutch). No other global state needed
- **Forms**: react-hook-form with @hookform/resolvers for Zod validation on the quote/lead form
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

### Key Design Decisions
- **Shared route contracts**: Both client and server import from `shared/routes.ts` so API paths, HTTP methods, and validation schemas are defined once. This prevents drift between frontend and backend
- **Zustand for i18n**: Lightweight alternative to full i18n libraries. All translations live in a single `client/src/lib/i18n.ts` file as a flat key-value map for 'en' and 'nl'
- **No authentication**: This is a public-facing lead generation site with no user accounts
- **Slider for budget**: The quote form uses a numeric slider (`sliderValue`) instead of a free-text budget field, keeping UX clean and conversion-friendly

## External Dependencies

- **PostgreSQL**: Required database. Must be provisioned and `DATABASE_URL` environment variable set
- **Google Fonts**: Inter and Plus Jakarta Sans loaded via CSS import; Architects Daughter, DM Sans, Fira Code, Geist Mono loaded via HTML link tags
- **Unsplash**: Background hero image loaded from unsplash.com CDN
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, and `@replit/vite-plugin-dev-banner` used in development
- **No external APIs**: No third-party service integrations (no email service, no payment processing, no analytics currently configured)