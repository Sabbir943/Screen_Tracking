import { MapPin, RefreshCw } from 'lucide-react';

export default function TrackingTimeline({ events }) {
  return (
    <section className="animate-fade-in-up rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
          Tracking History
        </h3>
        <button className="flex items-center gap-1 text-[11px] font-bold text-indigo-600 transition hover:text-indigo-800">
          <RefreshCw className="h-3 w-3" /> Refresh
        </button>
      </div>

      <div className="relative mt-4 space-y-5">
        <div className="absolute top-1 bottom-1 left-[5px] w-0.5 bg-slate-100" />
        {events.map((event, idx) => (
          <div
            key={idx}
            className="animate-fade-in-up relative flex items-start gap-3"
            style={{ animationDelay: `${idx * 110}ms` }}
          >
            <span
              className={`relative mt-0.5 h-[11px] w-[11px] shrink-0 rounded-full ${
                event.isAlert ? 'bg-amber-500 ring-4 ring-amber-100' : 'bg-indigo-500 ring-4 ring-indigo-100'
              }`}
            />
            <div className="flex flex-1 items-start justify-between gap-2">
              <div>
                <p className={`text-xs font-bold ${event.isAlert ? 'text-amber-600' : 'text-slate-800'}`}>
                  {event.title}
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-[11px] text-slate-500">
                  <MapPin className="h-3 w-3" /> {event.location}
                </p>
              </div>
              <span className="text-[10px] font-medium text-slate-400">{event.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}