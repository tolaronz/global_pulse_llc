import { Badge } from "@/components/ui/badge";
import { Invoice } from "@/lib/platform-data";
import { formatCurrency } from "@/lib/utils";

const toneByInvoiceStatus = {
  Paid: "green",
  Open: "amber",
  Failed: "red",
} as const;

export function InvoiceList({ invoices }: { invoices: Invoice[] }) {
  return (
    <section className="rounded-lg border border-ink-200 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-ink-950">
            Revenue queue
          </h2>
          <p className="mt-1 text-sm text-ink-600">Invoices requiring attention.</p>
        </div>
      </div>
      <div className="mt-5 space-y-4">
        {invoices.map((invoice) => (
          <div
            key={`${invoice.customer}-${invoice.due}`}
            className="grid gap-3 rounded-md border border-ink-100 p-4 sm:grid-cols-[1fr_auto] sm:items-center"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink-950">
                {invoice.customer}
              </p>
              <p className="mt-1 text-sm text-ink-600">
                {invoice.plan} plan · Due {invoice.due}
              </p>
            </div>
            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <p className="text-sm font-semibold text-ink-950">
                {formatCurrency(invoice.amount)}
              </p>
              <Badge tone={toneByInvoiceStatus[invoice.status]}>
                {invoice.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
