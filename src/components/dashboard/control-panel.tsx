import { controls } from "@/lib/platform-data";

export function ControlPanel() {
  return (
    <section className="rounded-lg border border-ink-200 bg-ink-950 p-5 text-white shadow-panel">
      <h2 className="text-base font-semibold">Infrastructure controls</h2>
      <p className="mt-1 text-sm text-ink-200">
        Operational foundation for billing, aggregation, and audit workflows.
      </p>
      <div className="mt-5 space-y-3">
        {controls.map((control) => (
          <div
            key={control.label}
            className="flex items-center justify-between gap-4 rounded-md bg-white/8 p-3 ring-1 ring-white/10"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-ink-950">
                <control.icon size={18} aria-hidden="true" />
              </span>
              <span className="truncate text-sm font-medium">{control.label}</span>
            </div>
            <span className="rounded-full bg-white/12 px-2.5 py-1 text-xs font-semibold text-ink-100">
              {control.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
