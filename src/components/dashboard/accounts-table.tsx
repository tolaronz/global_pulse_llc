import { Badge } from "@/components/ui/badge";
import { AccountConnection } from "@/lib/platform-data";
import { formatCurrency } from "@/lib/utils";

const toneByStatus = {
  Synced: "green",
  Review: "amber",
  Pending: "slate",
} as const;

export function AccountsTable({ accounts }: { accounts: AccountConnection[] }) {
  return (
    <section className="rounded-lg border border-ink-200 bg-white shadow-soft">
      <div className="border-b border-ink-200 p-5">
        <h2 className="text-base font-semibold text-ink-950">
          Connected financial systems
        </h2>
        <p className="mt-1 text-sm text-ink-600">
          Centralized balance visibility and sync health.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-ink-50 text-xs uppercase tracking-[0.16em] text-ink-500">
            <tr>
              <th className="px-5 py-3 font-semibold">Provider</th>
              <th className="px-5 py-3 font-semibold">Type</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3 text-right font-semibold">Balance</th>
              <th className="px-5 py-3 font-semibold">Last sync</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {accounts.map((account) => (
              <tr key={account.provider}>
                <td className="px-5 py-4 font-semibold text-ink-950">
                  {account.provider}
                </td>
                <td className="px-5 py-4 text-ink-600">{account.kind}</td>
                <td className="px-5 py-4">
                  <Badge tone={toneByStatus[account.status]}>
                    {account.status}
                  </Badge>
                </td>
                <td className="px-5 py-4 text-right font-semibold text-ink-950">
                  {account.balance > 0 ? formatCurrency(account.balance) : "N/A"}
                </td>
                <td className="px-5 py-4 text-ink-600">{account.lastSync}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
