# Order Tracking

A mobile order-tracking screen built with React (Vite) + Tailwind CSS, targeting 360–430px widths.

Runs standalone with mock data and covers three states: **Delayed**, **Delivered but not received**, and **No tracking yet** — switchable via the demo preset bar at the top.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — dev server with HMR
- `npm run lint` — ESLint
- `npm run build` — production build
- `npm run preview` — serve the production build

## Structure

```
src/
├── components/
│   ├── tracking/        # OrderHeader, StatusHeroCard, TrackingTimeline,
│   │                    # TrackingMapCard, OrderItemsSummary,
│   │                    # SupportActionCard, IssueReportModal
│   └── ui/              # Badge, Stepper
├── mock/
│   └── orderData.js     # ORDER_STATES + STAGES used by the UI
├── App.jsx              # Composes the screen; owns state & modal
└── index.css            # Tailwind v4 + custom animations
```

## Notes

- All data is mock (`src/mock/orderData.js`); there is no backend or API layer yet.
- The map in `TrackingMapCard` is a decorative SVG placeholder, not a real map library.
- Spec details: `requirement.txt` (app's task description).