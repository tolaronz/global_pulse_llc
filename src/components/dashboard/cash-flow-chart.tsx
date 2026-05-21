import { cashFlow } from "@/lib/platform-data";

export function CashFlowChart() {
  const maxValue = Math.max(...cashFlow.map((point) => point.revenue));

  return (
    <section className="rounded-lg border border-ink-200 bg-white p-5 shadow-soft">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-ink-950">
            Cash flow forecast
          </h2>
          <p className="mt-1 text-sm text-ink-600">
            Revenue and operating cost trend.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold text-ink-600">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-pulse-600" />
            Revenue
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
            Cost
          </span>
        </div>
      </div>

      <div className="mt-8 grid h-72 grid-cols-6 items-end gap-3 sm:gap-5">
        {cashFlow.map((point) => (
          <div key={point.label} className="flex h-full min-w-0 flex-col justify-end">
            <div className="flex h-full items-end gap-1.5">
              <div
                className="w-full rounded-t-md bg-pulse-600"
                style={{ height: `${(point.revenue / maxValue) * 100}%` }}
                aria-label={`${point.label} revenue ${point.revenue} thousand dollars`}
              />
              <div
                className="w-full rounded-t-md bg-ink-300"
                style={{ height: `${(point.cost / maxValue) * 100}%` }}
                aria-label={`${point.label} cost ${point.cost} thousand dollars`}
              />
            </div>
            <p className="mt-3 text-center text-xs font-semibold text-ink-500">
              {point.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
