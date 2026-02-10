# Gingerly — Collect Recurring Payments Automatically

Gingerly is the payment operating system for the recurring economy. We replace manual payment chasing with a single, automated platform that powers your cashflow from collection to settlement.

**Stop chasing payments.** Gingerly collects, tracks, and settles your recurring payments automatically — so you get paid on time, every time.

## Features

- **Automatic Payment Scheduling** — Set billing cycles once and let Gingerly handle the rest
- **All Payment Methods in One Place** — M-Pesa, bank transfers, cards, and cash — all in a single dashboard
- **Automatic Payment Matching** — Payments are matched to invoices instantly, no manual reconciliation
- **Failed Payment Recovery** — Smart retries and reminders to recover missed payments automatically
- **Real-Time Dashboard & Reports** — Track collections, outstanding balances, and trends at a glance
- **Cash Collection Made Digital** — Field agents log payments on-the-go with digital receipts

## Supported Sectors

- 🏠 **Real Estate & Property Management** — Automate rent collection across your portfolio
- 🏫 **Education & Childcare** — Simplify tuition and fee collection for schools and daycare centers
- 🏢 **SMEs & Service Businesses** — Manage subscriptions, retainers, and recurring invoices

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Motion](https://motion.dev/) (Framer Motion)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Icons:** [Lucide React](https://lucide.dev/) & [Iconify](https://iconify.design/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Thedongraphix/Gingerly-landing.git
cd Gingerly-landing

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start dev server (Turbopack) |
| `npm run build` | Create production build      |
| `npm run start` | Start production server      |
| `npm run lint`  | Run ESLint checks            |

## Project Structure

```
src/
├── app/
│   ├── api/                  # API routes (page data, layout data, auth)
│   ├── components/
│   │   ├── home/             # Landing page sections
│   │   ├── layout/           # Header, Footer, Logo
│   │   ├── auth/             # Sign in, Sign up, Forgot password
│   │   ├── contact-form/     # Contact inquiry form
│   │   ├── ui/               # Custom UI components
│   │   └── shared/           # Reusable components
│   ├── (site)/               # Route groups (contact, legal, auth pages)
│   ├── page.tsx              # Homepage
│   └── layout.tsx            # Root layout
├── components/ui/            # shadcn/ui components
├── lib/                      # Utilities and helpers
└── providers/                # Theme and session providers
public/
├── images/                   # All static images and icons
└── favicon.ico
```

## Deployment

Deploy easily on [Vercel](https://vercel.com/):

```bash
npm run build
```

Or connect the GitHub repo directly to Vercel for automatic deployments on push.

## License

All rights reserved © Gingerly.

