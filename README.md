# Nivora — Home Away From Home

**A student housing platform that helps students find verified PGs, hostels and shared flats near their campus — without the broker, the fake photos, or the surprise brokerage fee.**

> 🔗 **Live demo:** [nivora-pi.vercel.app](https://nivora-pi.vercel.app)

Students moving to a new city for college get their accommodation information from WhatsApp groups and unverified listing sites. Listings are stale, photos are years old, and nobody tells you the landlord keeps the security deposit. Nivora puts verified listings next to a map, real peer reviews, and a marketplace for the services students actually need.

---

## Features

- **Map-first discovery** — browse listings on an interactive Leaflet map with a synchronised list view.
- **Search that matches student reality** — filter by college, pincode, property type and budget, with college-name autocomplete.
- **Verified peer reviews** — ratings and written reviews attached to the listing, not to a third-party forum.
- **Role-based onboarding** — separate flows for renters and property owners, with owner-side listing management.
- **Student services marketplace** — a space for the surrounding ecosystem: movers, mess services, furniture, repairs.
- **Supporting pages** — team, contact, terms and privacy, built as real routes rather than placeholders.

---

## Stack

| Layer | Technologies |
| --- | --- |
| **Frontend** | React 18, Vite, React Router, Tailwind CSS, Radix UI primitives |
| **State & forms** | React Hook Form, Zod validation |
| **Data & visuals** | Leaflet + OpenStreetMap, Recharts, Lucide icons |
| **Auth** | Firebase Authentication |
| **Backend** | Node.js, Express, CORS, dotenv |
| **Deploy** | Vercel (frontend), REST API for listings and reviews |

The UI layer is built on Radix primitives behind a small design-system wrapper (`ui/`), so components are accessible by default and share one set of tokens.

---

## Architecture

```text
NIVORA/
├── frontend/                     React + Vite client
│   ├── index.html
│   ├── vite.config.js            Alias @ -> ./src
│   ├── tailwind.config.js
│   └── src/
│       ├── main.jsx              Router mount
│       ├── App.jsx               Layout and route table
│       ├── pages/                Home, Listings, Detail, Marketplace, Auth, Legal
│       ├── components/
│       │   ├── layout/           Header, Footer, AuthButton, chatbot, background
│       │   ├── search/           SearchForm with college autocomplete
│       │   ├── listings/         ListingCard, MapComponent, ReviewForm
│       │   └── ui/               Reusable design-system primitives
│       ├── lib/                  Firebase config, data helpers, utils
│       └── hooks/
├── backend/                      Express REST API
│   └── src/
│       ├── server.js
│       ├── routes/               listings.routes.js, reviews.routes.js
│       ├── controllers/
│       └── data/                 Listings data source
└── package.json                  Workspace scripts
```

---

## Running locally

**Prerequisites:** Node.js 18+

```bash
npm install
```

```bash
# frontend on http://localhost:9002 (proxied to the API)
npm run dev:frontend

# API on http://localhost:5000
npm run dev:backend
```

Firebase configuration lives in `frontend/src/lib/firebase.js`.

### API

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/listings` | All listings; supports `?college=`, `?pincode=`, `?type=` |
| `GET` | `/api/listings/:id` | Single listing with details |
| `POST` | `/api/reviews` | Submit a review |
| `GET` | `/api/health` | Health check |

---

## My role

I led this project and wrote **203 of the 207 commits** — the application architecture, the route structure, the listing and discovery experience, the map integration, the review flow, and the frontend/backend separation. The team included four others covering UI/UX, integration and content.

It was the first project I took from an empty repository to a deployed URL that real students could open.

## Team

- **Ayush Kumar** — Team lead, full-stack
- Aanchal Chaudhary — Tech
- Avneet Singh — UI/UX
- Anirudh Kanwat — Integration
- Aman, Vishwas Shukla — Content

## License

MIT
