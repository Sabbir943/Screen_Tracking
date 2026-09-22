import { useState } from 'react';
import { ChevronDown, ChevronUp, Truck } from 'lucide-react';

export default function OrderItemsSummary({ items, summary }) {
  const [showItems, setShowItems] = useState(true);

  return (
    <section className="animate-fade-in-up overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setShowItems((v) => !v)}
        className="flex w-full items-center justify-between p-4 text-left transition hover:bg-slate-50 active:bg-slate-100"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 text-slate-600">
            <Truck className="h-4.5 w-4.5" />
          </span>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Order Summary
            </p>
            <p className="text-[11px] text-slate-500">
              {items.length} item{items.length > 1 ? 's' : ''} · ${summary.total.toFixed(2)}
            </p>
          </div>
        </div>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300">
          {showItems ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>

      {showItems && (
        <div className="animate-fade-in px-4 pb-4">
          <div className="space-y-3 border-t border-slate-100 pt-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 shrink-0 rounded-xl bg-slate-100 object-cover"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-bold text-slate-800">{item.name}</p>
                  <p className="text-[10px] text-slate-500">
                    {item.variant} · Qty {item.quantity}
                  </p>
                </div>
                <span className="text-xs font-extrabold text-slate-900">${item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-1.5 rounded-2xl bg-slate-50 p-3.5 text-[11px] text-slate-500">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${summary.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{summary.shipping === 0 ? 'Free' : `$${summary.shipping}`}</span>
            </div>
            <div className="flex justify-between pt-1 text-xs font-extrabold text-slate-900">
              <span>Total Paid</span>
              <span>${summary.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}