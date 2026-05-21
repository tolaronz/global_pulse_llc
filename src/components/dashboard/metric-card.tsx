import { Metric } from "@/lib/platform-data";
import { cn } from "@/lib/utils";

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <section className="rounded-lg border border-ink-200 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-ink-600">{metric.label}</p>
          <p className="mt-3 text-3xl font-semibold tracking-normal text-ink-950">
            {metric.value}
          </p>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ink-950 text-white">
          <metric.icon size={20} aria-hidden="true" />
        </div>
      </div>
      <p
        className={cn(
          "mt-4 text-sm font-medium",
          metric.tone === "positive" && "text-signal-green",
          metric.tone === "neutral" && "text-ink-600",
          metric.tone === "warning" && "text-signal-amber",
        )}
      >
        {metric.delta}
      </p>
    </section>
  );
}
