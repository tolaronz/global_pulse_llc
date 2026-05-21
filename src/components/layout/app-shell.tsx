import {
  Bell,
  Building2,
  ChartNoAxesCombined,
  CreditCard,
  LayoutDashboard,
  LockKeyhole,
  Settings,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Billing", icon: CreditCard },
  { label: "Accounts", icon: WalletCards },
  { label: "Analytics", icon: ChartNoAxesCombined },
  { label: "Security", icon: LockKeyhole },
  { label: "Settings", icon: Settings },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="hidden border-r border-ink-200 bg-white/84 px-5 py-6 backdrop-blur lg:block">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-950 text-white">
            <Building2 size={22} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pulse-700">
              Global Pulse
            </p>
            <p className="text-sm text-ink-600">Billing Operations</p>
          </div>
        </div>

        <nav className="mt-10 space-y-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={cn(
                "flex h-11 items-center gap-3 rounded-md px-3 text-sm font-medium text-ink-600 transition hover:bg-ink-100 hover:text-ink-950",
                item.active && "bg-ink-950 text-white hover:bg-ink-950 hover:text-white",
              )}
            >
              <item.icon size={18} aria-hidden="true" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-10 rounded-lg border border-ink-200 bg-ink-50 p-4">
          <p className="text-sm font-semibold text-ink-950">Launch checklist</p>
          <div className="mt-4 space-y-3">
            {["Stripe billing", "Bank aggregation", "SOC 2 evidence"].map(
              (item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span
                    className={cn(
                      "h-2.5 w-2.5 rounded-full",
                      index < 2 ? "bg-pulse-600" : "bg-amber-500",
                    )}
                  />
                  <span className="text-sm text-ink-600">{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </aside>

      <div className="min-w-0">
        <header className="sticky top-0 z-20 border-b border-ink-200 bg-white/88 backdrop-blur">
          <div className="flex min-h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pulse-700">
                SaaS Command Center
              </p>
              <h1 className="truncate text-lg font-semibold text-ink-950 sm:text-xl">
                Billing and account aggregation
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" aria-label="Notifications">
                <Bell size={18} aria-hidden="true" />
              </Button>
              <Button className="hidden sm:inline-flex">Connect account</Button>
            </div>
          </div>
        </header>
        <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
