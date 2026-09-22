import { Bell, Clock, MapPin, Phone, Truck } from 'lucide-react';

function StylizedMap({ status }) {
  const delivered = status === 'Delivered';
  return (
    <div className="relative h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300">
      {/* Road grid backdrop */}
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="map-grid" width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M26 0H0V26" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-grid)" />

        {/* Pseudo route */}
        <path
          d="M 20 110 Q 70 60 110 100 T 200 70 T 290 50"
          fill="none"
          stroke="rgba(99,102,241,0.25)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M 20 110 Q 70 60 110 100 T 200 70 T 290 50"
          fill="none"
          stroke={delivered ? '#10b981' : '#6366f1'}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="1 10"
          className={delivered ? '' : 'animate-map-dash'}
        />
      </svg>

      {/* Driver (start) marker */}
      <span className="absolute bottom-6 left-5 grid h-8 w-8 place-items-center rounded-full bg-white text-indigo-600 shadow-md ring-2 ring-white">
        <Truck className="h-4 w-4" />
      </span>

      {/* Destination (end) marker */}
      <span className="absolute top-5 right-6 grid h-8 w-8 place-items-center rounded-full bg-white text-emerald-600 shadow-md ring-2 ring-white">
        <MapPin className="h-4 w-4" />
      </span>

      {/* ETA chip */}
      <span className="absolute top-5 left-5 rounded-full bg-slate-900/85 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur">
        {delivered ? 'DELIVERED' : '2.4 km away'}
      </span>
    </div>
  );
}

export default function TrackingMapCard({ order }) {
  if (!order.trackingAvailable) {
    return (
      <section className="animate-fade-in-up rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
        <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-slate-100 text-slate-500">
          <span className="absolute inset-0 animate-ping rounded-2xl bg-indigo-200/60" />
          <Clock className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-sm font-bold text-slate-900">Tracking Info Pending</h3>
        <p className="mx-auto mt-1 max-w-[280px] text-xs leading-relaxed text-slate-500">
          We're packaging your order. The live map will appear here once the carrier scans your package.
        </p>
        <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-700 active:scale-95">
          <Bell className="h-3.5 w-3.5" /> Enable Notifications
        </button>
      </section>
    );
  }

  const showLiveMap = ['Out for Delivery', 'Delivered'].includes(order.status);

  return (
    <section className="animate-fade-in-up rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Carrier</p>
          <p className="text-sm font-extrabold text-slate-900">{order.carrier.name}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Tracking No.</p>
          <p className="font-mono text-xs font-semibold text-slate-700">{order.carrier.trackingNumber}</p>
        </div>
      </div>

      {showLiveMap ? (
        <div className="mt-4">
          <StylizedMap status={order.status} />
        </div>
      ) : (
        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-50 p-3.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-200/70 text-slate-500">
            <MapPin className="h-4.5 w-4.5" />
          </span>
          <p className="text-[11px] leading-relaxed text-slate-500">
            Live map is available while your package is out for delivery.
          </p>
        </div>
      )}

      {order.carrier.driverName && (
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-indigo-100 text-sm font-extrabold text-indigo-600">
              {order.carrier.driverName[0]}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">{order.carrier.driverName}</p>
              <p className="text-[10px] text-slate-500">Your Courier Driver</p>
            </div>
          </div>
          <a
            href={order.carrier.driverPhone ? `tel:${order.carrier.driverPhone}` : undefined}
            aria-label="Call driver"
            className="relative grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-600 transition hover:bg-emerald-200 active:scale-90"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300/50" />
            <Phone className="h-4 w-4" />
          </a>
        </div>
      )}
    </section>
  );
}