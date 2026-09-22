import { AlertCircle, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

export default function SupportActionCard({ order, onReportIssue, onInquireDelay }) {
  const isDelivered = order.status === 'Delivered';
  const canCallDriver = Boolean(order.carrier?.driverPhone);

  return (
    <>
      {/* ---------- Delayed Alert ---------- */}
      {order.isDelayed && (
        <section className="animate-fade-in-up rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-amber-400/20 text-amber-600">
              <AlertCircle className="h-5 w-5 animate-float-soft" />
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-bold text-amber-900">Delivery Delayed</h2>
              <p className="mt-0.5 text-xs leading-relaxed text-amber-800">{order.delayReason}</p>
              <button
                onClick={onInquireDelay}
                className="mt-2 text-xs font-bold text-amber-900 underline decoration-amber-300 decoration-2 underline-offset-2 transition hover:text-amber-950"
              >
                Inquire about this delay
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ---------- Delivered but Not Received ---------- */}
      {isDelivered && (
        <section className="animate-fade-in-up rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-400/20 text-emerald-600">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-900">Package Delivered</p>
              <p className="text-[11px] text-emerald-700">{order.deliveredTime}</p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-emerald-200/70 pt-3">
            <span className="text-xs font-semibold text-slate-600">Didn't receive it?</span>
            <button
              onClick={onReportIssue}
              className="rounded-full bg-white px-4 py-2 text-xs font-bold text-emerald-700 shadow-sm ring-1 ring-emerald-200 transition hover:bg-emerald-100 active:scale-95"
            >
              Report Issue
            </button>
          </div>
        </section>
      )}

      {/* ---------- One-Tap Quick Actions ---------- */}
      <section className="animate-fade-in-up grid grid-cols-2 gap-2.5">
        <button className="flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-3 py-3.5 text-xs font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-700 active:scale-95">
          <MessageSquare className="h-4 w-4" /> Live Chat
        </button>
        {canCallDriver ? (
          <a
            href={`tel:${order.carrier.driverPhone}`}
            className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-3 py-3.5 text-xs font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-700 active:scale-95"
          >
            <Phone className="h-4 w-4" /> Call Driver
          </a>
        ) : (
          <button className="flex items-center justify-center gap-2 rounded-2xl bg-slate-800 px-3 py-3.5 text-xs font-bold text-white shadow-lg shadow-slate-500/25 transition hover:bg-slate-900 active:scale-95">
            <Phone className="h-4 w-4" /> Call Support
          </button>
        )}
      </section>
    </>
  );
}