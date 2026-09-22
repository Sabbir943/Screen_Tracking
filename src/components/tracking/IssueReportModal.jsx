import { AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';

const FLOWS = {
  NOT_RECEIVED: {
    tone: 'bg-emerald-100 text-emerald-600',
    icon: CheckCircle2,
    title: 'Did not receive it?',
    body: "Carriers sometimes scan packages a few hours before actual delivery or leave them in a secure nearby location. We'll help you track it down.",
    actions: [
      { label: 'Check delivery spot photos', danger: false },
      { label: (o) => `Contact driver (${o.carrier?.driverName || 'Courier'})`, danger: false },
      { label: 'Open missing package claim', danger: true },
    ],
  },
  DELAYED: {
    tone: 'bg-amber-100 text-amber-600',
    icon: AlertCircle,
    title: 'Your delivery is taking longer',
    body: "We're on it. Our partner carrier has been notified, and we'll keep you posted on your new arrival window.",
    actions: [
      { label: 'Chat with delivery support', danger: false },
      { label: 'Request a call back', danger: false },
      { label: 'Cancel this order', danger: true },
    ],
  },
};

export default function IssueReportModal({ open, mode, order, onClose }) {
  if (!open) return null;

  const flow = FLOWS[mode] || FLOWS.NOT_RECEIVED;
  const Icon = flow.icon;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center">
      <div className="animate-fade-in absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={onClose} />
      <div className="animate-slide-up-sheet relative w-full max-w-[430px] rounded-t-3xl bg-white p-5 pb-8 shadow-2xl">
        <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-slate-200" />

        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <span className={`grid h-10 w-10 place-items-center rounded-2xl ${flow.tone}`}>
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="text-base font-extrabold text-slate-900">{flow.title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-8 w-8 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            ✕
          </button>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-slate-500">{flow.body}</p>

        <div className="mt-5 space-y-2.5">
          {flow.actions.map((action, idx) => {
            const label = typeof action.label === 'function' ? action.label(order) : action.label;
            return (
              <button
                key={idx}
                className={`animate-fade-in-up flex w-full items-center justify-between rounded-2xl border p-3.5 text-left text-xs font-bold transition active:scale-[0.98] ${
                  action.danger
                    ? 'border-red-200 bg-red-50 text-red-700 hover:bg-red-100'
                    : 'border-slate-200 text-slate-800 hover:border-indigo-300 hover:bg-indigo-50/50'
                }`}
                style={{ animationDelay: `${(idx + 1) * 90}ms` }}
              >
                {label}
                <ChevronRight className={`h-4 w-4 ${action.danger ? 'text-red-400' : 'text-slate-400'}`} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}