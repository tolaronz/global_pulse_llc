import { Plan } from "@/lib/platform-data";
import { cn } from "@/lib/utils";

export function PlanSummary({ plans }: { plans: Plan[] }) {
  return (
    <section className="rounded-lg border border-ink-200 bg-white p-5 shadow-soft">
      <h2 className="text-base font-semibold text-ink-950">Subscription plans</h2>
      <div className="mt-5 space-y-4">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-md border border-ink-100 p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className={cn("h-3 w-3 rounded-full", plan.accent)} />
                <p className="text-sm font-semibold text-ink-950">{plan.name}</p>
              </div>
              <p className="text-sm font-semibold text-ink-950">{plan.price}</p>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-600">
              <span>{plan.users}</span>
              <span>{plan.margin}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
