<div align="center">

# 🏠 Nivora — Home Away From Home

**Student housing that shows verified PGs, hostels and shared flats on a map — no broker, no stale photos, no surprise brokerage fee.**

[![Live Demo](https://img.shields.io/badge/live-demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://nivora-pi.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Firebase](https://img.shields.io/badge/Firebase-Auth-DD2C00?style=for-the-badge&logo=firebase&logoColor=white)](https://firebase.google.com)
[![License: MIT](https://img.shields.io/badge/license-MIT-2ea44f?style=for-the-badge)](LICENSE)

[Live demo](https://nivora-pi.vercel.app) · [Report a bug](https://github.com/99Ayush/NIVORA/issues)

</div>

---

Students moving to a new city get their accommodation information from WhatsApp groups and unverified listing sites. The photos are years old, the rent in the post is not the rent on the phone call, and the security deposit has a way of not coming back.

Nivora puts three things next to each other that are usually scattered: **verified listings**, **a map**, and **reviews written by people who actually lived there**.

## Features

- **Map-first discovery** — browse listings on a Leaflet map synchronised with a card list, so a click on either side moves both.
- **Search that matches student reality** — filter by college, pincode and property type, with college-name autocomplete.
- **Listing detail pages** — photos, rent breakdown, amenities, house rules and the review thread, all on a real route with a shareable URL.
- **Peer reviews** — ratings and written reviews attached to the listing itself, not a third-party forum.
- **Role-based onboarding** — separate sign-in and sign-up flows, with an owner-side path for listing management.
- **Marketplace** — the surrounding student economy: movers, mess services, furniture, repairs.
- **Yuna assistant** — a floating chat helper for the questions students ask before booking.
- **Real supporting pages** — team, contact, terms and privacy exist as routes, not dead links.

## Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, React Router, Tailwind CSS, Radix UI primitives |
| **State & forms** | React Hook Form, Zod |
| **Data & visuals** | Leaflet + OpenStreetMap tiles, Recharts, Lucide icons |
| **Auth** | Firebase Authentication (Google sign-in) |
| **Backend** | Node.js, Express, CORS, dotenv |
| **Deploy** | Vercel (frontend), Express API for listings and reviews |

The UI sits on Radix primitives behind a small design-system wrapper (`components/ui/`), so components are keyboard-accessible and share one set of tokens instead of one-off styles.

## Architecture

```text
NIVORA/
├── frontend/                      React + Vite client (port 9002)
│   ├── vite.config.js             Alias @ → ./src, API proxy
│   └── src/
│       ├── App.jsx                Route table: /, /listings, /listings/:id, /marketplace,
│       │                          /team, /contact, /login, /signup, /terms, /privacy
│       ├── pages/                 Ten route-level views
│       ├── components/
│       │   ├── layout/            Header, Footer, AuthButton, YunaChatbot, background
│       │   ├── search/            SearchForm with college autocomplete
│       │   ├── listings/          ListingCard, MapComponent, ReviewForm
│       │   └── ui/                Radix-backed design-system primitives
│       ├── lib/                   Firebase config, data helpers, utils
│       └── hooks/                 Toast and responsive hooks
├── backend/                       Express API (port 5000)
│   └── src/
│       ├── server.js              Routes, CORS, health check
│       ├── routes/                listings.routes.js, reviews.routes.js
│       ├── controllers/           Filtering, detail lookup, review submission
│       └── data/listings.data.js  The listing dataset served by the API
└── package.json                   Workspace scripts (one command per side)
```

## API

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/listings` | All listings; supports `?college=`, `?pincode=`, `?type=` |
| `GET` | `/api/listings/:id` | One listing with its reviews |
| `POST` | `/api/reviews` | Add a review (`listingId`, `rating`, `comment`, optional `author`) |
| `GET` | `/api/health` | Liveness |

```bash
curl "http://localhost:5000/api/listings?college=IIT&type=PG"
```

## Run locally

**Prerequisites:** Node.js 18+.

```bash
npm install

# frontend → http://localhost:9002
npm run dev:frontend

# API → http://localhost:5000
npm run dev:backend
```

Firebase web configuration lives in `frontend/src/lib/firebase.js`. Google sign-in needs an authorised domain for your local port in the Firebase console; browsing listings works without signing in.

## Honest scope

- **Listings come from a dataset, not a database.** `backend/src/data/listings.data.js` is served and filtered in memory, which is enough for a discovery demo but not for a real marketplace with owner uploads.
- **Reviews are in-memory.** They are appended to the loaded dataset and reset when the API restarts. A production version would persist to Postgres/Firestore with moderation.
- **Auth gates identity, not content.** Firebase establishes who you are; listing management and moderation rules are not enforced server-side yet.
- **No payments or bookings.** Contact and enquiry only.

## My role

I led this project and wrote **203 of the 207 commits** — application architecture, route structure, the listing and discovery experience, map integration, the review flow, and the frontend/backend split. It was the first project I took from an empty repository to a URL real students could open.

| Who | Contribution |
| :--- | :--- |
| **Ayush Kumar** | Team lead, full-stack |
| Aanchal Chaudhary | Tech |
| Avneet Singh | UI/UX |
| Anirudh Kanwat | Integration |
| Aman, Vishwas Shukla | Content |

## License

[MIT](LICENSE)
