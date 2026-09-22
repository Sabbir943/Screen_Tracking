import { ArrowLeft, HelpCircle } from 'lucide-react';

const SCENARIOS = [
  { key: 'NORMAL_IN_TRANSIT', label: 'In Transit' },
  { key: 'DELAYED', label: 'Delayed' },
  { key: 'DELIVERED_NOT_RECEIVED', label: 'Delivered' },
  { key: 'NO_TRACKING_YET', label: 'No Tracking' },
];

export default function OrderHeader({ orderId, selectedStateKey, onSelectState }) {
  return (
    <>
      {/* ---------- Demo State Preset Selector ---------- */}
      <div className="bg-slate-950/95 px-3 pt-2.5 pb-3 backdrop-blur">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
          Demo · Pick a state
        </p>
        <div className="grid grid-cols-4 gap-1.5">
          {SCENARIOS.map(({ key, label }) => {
            const active = selectedStateKey === key;
            return (
              <button
                key={key}
                onClick={() => onSelectState(key)}
                className={`rounded-lg px-1 py-1.5 text-[11px] font-semibold transition-all duration-200 ${
                  active
                    ? 'scale-[1.04] bg-indigo-500 text-white shadow-lg shadow-indigo-500/40'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ---------- App Bar ---------- */}
      <header className="sticky top-[72px] z-40 border-b border-slate-200/70 bg-white/85 px-4 py-3 backdrop-blur-md animate-fade-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              aria-label="Go back"
              className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 active:scale-90"
            >
              <ArrowLeft className="h-4.5 w-4.5" />
            </button>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Order</p>
              <h1 className="text-sm font-extrabold tracking-tight text-slate-900">{orderId}</h1>
            </div>
          </div>
          <button className="flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-600 transition hover:bg-indigo-100 active:scale-95">
            <HelpCircle className="h-4 w-4" /> Support
          </button>
        </div>
      </header>
    </>
  );
}