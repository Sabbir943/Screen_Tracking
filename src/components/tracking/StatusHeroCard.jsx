import { STAGES } from '../../mock/orderData';
import Badge from '../ui/Badge';
import Stepper from '../ui/Stepper';

const STEP_LABELS = ['Placed', 'Shipped', 'Out', 'Delivered'];

export default function StatusHeroCard({ order, stageIdx }) {
  const gradient =
    order.status === 'Delivered'
      ? 'from-emerald-500 via-emerald-500 to-teal-600'
      : order.isDelayed
        ? 'from-amber-500 via-orange-500 to-rose-500'
        : 'from-indigo-500 via-indigo-600 to-violet-600';

  const glow =
    order.status === 'Delivered'
      ? 'bg-emerald-400/40'
      : order.isDelayed
        ? 'bg-amber-400/40'
        : 'bg-indigo-400/40';

  return (
    <section
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-5 text-white shadow-xl shadow-indigo-500/10 animate-scale-in`}
    >
      <div
        className={`pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full ${glow} blur-3xl`}
      />
      <div className="pointer-events-none absolute -bottom-14 -left-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

      <div className="relative flex items-center justify-between">
        <Badge tone="light" pulse>
          {order.status}
        </Badge>
        <span className="rounded-full bg-black/20 px-2.5 py-1 text-[10px] font-semibold backdrop-blur-sm">
          {order.trackingAvailable ? 'LIVE' : 'PREPARING'}
        </span>
      </div>

      <div className="relative mt-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
          Estimated Arrival
        </p>
        <p className="mt-1 text-lg font-extrabold leading-snug">{order.estimatedDelivery}</p>
      </div>

      <div className="relative mt-6">
        <Stepper stages={STAGES} currentIndex={stageIdx} labels={STEP_LABELS} />
      </div>
    </section>
  );
}