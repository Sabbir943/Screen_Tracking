import { CheckCircle2 } from 'lucide-react';

export default function Stepper({ stages, currentIndex, labels, tone = 'dark' }) {
  const total = stages.length - 1;
  const idx = Math.min(Math.max(currentIndex, 0), total);
  const width = (idx / total) * 100;
  const isDark = tone === 'dark';

  return (
    <div>
      <div className="relative">
        <div
          className={`absolute top-3 left-[3%] right-[3%] h-1.5 rounded-full ${isDark ? 'bg-white/25' : 'bg-slate-100'}`}
        />
        <div
          className={`absolute top-3 left-[3%] h-1.5 rounded-full transition-all duration-700 ease-out ${isDark ? 'bg-white shadow' : 'bg-indigo-600'}`}
          style={{ width: `calc(3% + ${width * 0.94}%)` }}
        />
        <div className="relative flex justify-between">
          {stages.map((stage, i) => {
            const reached = i <= idx;
            const isCurrent = i === idx;
            return (
              <div key={stage} className="flex flex-col items-center gap-1.5">
                <div
                  className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-black transition-all duration-500 ${
                    reached
                      ? isDark
                        ? 'bg-white text-indigo-600'
                        : 'bg-indigo-600 text-white'
                      : isDark
                        ? 'bg-white/30 text-white'
                        : 'bg-slate-200 text-slate-500'
                  } ${isCurrent ? (isDark ? 'ring-4 ring-white/40' : 'ring-4 ring-indigo-200') : ''}`}
                >
                  {reached ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                </div>
                <span
                  className={`text-[9px] font-bold tracking-wide ${
                    reached
                      ? isDark
                        ? 'text-white'
                        : 'text-indigo-600'
                      : isDark
                        ? 'text-white/60'
                        : 'text-slate-400'
                  }`}
                >
                  {labels?.[i] ?? stage}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}