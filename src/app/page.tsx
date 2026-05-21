import { AccountsTable } from "@/components/dashboard/accounts-table";
import { CashFlowChart } from "@/components/dashboard/cash-flow-chart";
import { ControlPanel } from "@/components/dashboard/control-panel";
import { InvoiceList } from "@/components/dashboard/invoice-list";
import { MetricCard } from "@/components/dashboard/metric-card";
import { PlanSummary } from "@/components/dashboard/plan-summary";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { accounts, invoices, metrics, plans } from "@/lib/platform-data";
import { ArrowUpRight, Download, Plus } from "lucide-react";

export default function Home() {
  return (
    <AppShell>
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="grid gap-4 rounded-lg border border-ink-200 bg-white p-5 shadow-soft md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pulse-700">
              Global Pulse LLC
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal text-ink-950 sm:text-3xl">
              Deploy billing, account aggregation, and revenue operations from one command center.
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink-600 sm:text-base">
              Monitor subscription health, connected accounts, cash position, and operational controls for a scalable SaaS business.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            <Button variant="secondary">
              <Download size={16} aria-hidden="true" />
              Export
            </Button>
            <Button>
              <Plus size={16} aria-hidden="true" />
              New workflow
            </Button>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(360px,0.75fr)]">
          <div className="space-y-6">
            <CashFlowChart />
            <AccountsTable accounts={accounts} />
          </div>
          <div className="space-y-6">
            <ControlPanel />
            <InvoiceList invoices={invoices} />
            <PlanSummary plans={plans} />
          </div>
        </section>

        <section className="grid gap-4 rounded-lg border border-ink-200 bg-white p-5 shadow-soft lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-base font-semibold text-ink-950">
              Production roadmap
            </h2>
            <p className="mt-1 text-sm text-ink-600">
              Next implementation layer: authentication, Stripe billing, Plaid aggregation, database-backed tenants, and deployment pipeline.
            </p>
          </div>
          <Button variant="secondary">
            View architecture
            <ArrowUpRight size={16} aria-hidden="true" />
          </Button>
        </section>
      </div>
    </AppShell>
  );
}
