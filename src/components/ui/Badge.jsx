export default function Badge({ icon: Icon, tone = 'light', pulse = false, className = '', children }) {
  const tones = {
    light: 'bg-white/20 text-white',
    solid: 'bg-white text-indigo-600',
    soft: 'bg-indigo-50 text-indigo-600',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wide backdrop-blur-sm ${tones[tone]} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
        </span>
      )}
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {children}
    </span>
  );
}