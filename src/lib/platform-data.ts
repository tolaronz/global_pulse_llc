import {
  Activity,
  Banknote,
  CreditCard,
  FileCheck2,
  LucideIcon,
  ShieldCheck,
  TrendingUp,
  WalletCards,
} from "lucide-react";

export type Metric = {
  label: string;
  value: string;
  delta: string;
  tone: "positive" | "neutral" | "warning";
  icon: LucideIcon;
};

export type AccountConnection = {
  provider: string;
  kind: string;
  status: "Synced" | "Review" | "Pending";
  balance: number;
  lastSync: string;
};

export type Invoice = {
  customer: string;
  plan: string;
  amount: number;
  status: "Paid" | "Open" | "Failed";
  due: string;
};

export type Plan = {
  name: string;
  price: string;
  users: string;
  margin: string;
  accent: string;
};

export const metrics: Metric[] = [
  {
    label: "Monthly recurring revenue",
    value: "$42.8K",
    delta: "+18.4% vs last month",
    tone: "positive",
    icon: TrendingUp,
  },
  {
    label: "Aggregated cash balance",
    value: "$218.6K",
    delta: "Across 7 linked accounts",
    tone: "neutral",
    icon: WalletCards,
  },
  {
    label: "Payment success rate",
    value: "98.7%",
    delta: "12 retries recovered",
    tone: "positive",
    icon: CreditCard,
  },
  {
    label: "Compliance readiness",
    value: "SOC 2",
    delta: "Evidence capture active",
    tone: "warning",
    icon: ShieldCheck,
  },
];

export const accounts: AccountConnection[] = [
  {
    provider: "Stripe",
    kind: "Subscription billing",
    status: "Synced",
    balance: 62340,
    lastSync: "2 min ago",
  },
  {
    provider: "Mercury",
    kind: "Operating account",
    status: "Synced",
    balance: 118940,
    lastSync: "6 min ago",
  },
  {
    provider: "QuickBooks",
    kind: "Accounting ledger",
    status: "Review",
    balance: 37280,
    lastSync: "18 min ago",
  },
  {
    provider: "Plaid",
    kind: "Bank aggregation",
    status: "Pending",
    balance: 0,
    lastSync: "Setup required",
  },
];

export const invoices: Invoice[] = [
  {
    customer: "Northstar Bootcamp",
    plan: "Enterprise",
    amount: 6400,
    status: "Paid",
    due: "May 24",
  },
  {
    customer: "Vera Recruiting",
    plan: "Team",
    amount: 1780,
    status: "Open",
    due: "May 28",
  },
  {
    customer: "Apex Engineering",
    plan: "Pro",
    amount: 720,
    status: "Paid",
    due: "Jun 01",
  },
  {
    customer: "Signal Labs",
    plan: "Team",
    amount: 1320,
    status: "Failed",
    due: "Retry today",
  },
];

export const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    users: "2,184 active users",
    margin: "Lead capture",
    accent: "bg-ink-700",
  },
  {
    name: "Pro",
    price: "$29",
    users: "946 subscribers",
    margin: "86% gross margin",
    accent: "bg-pulse-600",
  },
  {
    name: "Enterprise",
    price: "Custom",
    users: "37 accounts",
    margin: "Annual contracts",
    accent: "bg-signal-blue",
  },
];

export const cashFlow = [
  { label: "Jan", revenue: 24, cost: 9 },
  { label: "Feb", revenue: 28, cost: 10 },
  { label: "Mar", revenue: 31, cost: 12 },
  { label: "Apr", revenue: 36, cost: 13 },
  { label: "May", revenue: 43, cost: 15 },
  { label: "Jun", revenue: 51, cost: 17 },
];

export const controls = [
  { label: "Billing audit trail", status: "Active", icon: FileCheck2 },
  { label: "Usage metering", status: "Live", icon: Activity },
  { label: "Revenue recognition", status: "Draft", icon: Banknote },
];
