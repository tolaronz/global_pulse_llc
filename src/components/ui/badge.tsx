import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "green" | "amber" | "red" | "slate";
};

export function Badge({ children, tone = "slate" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-full px-2.5 text-xs font-semibold",
        tone === "green" && "bg-green-50 text-signal-green ring-1 ring-green-200",
        tone === "amber" && "bg-amber-50 text-signal-amber ring-1 ring-amber-200",
        tone === "red" && "bg-red-50 text-signal-red ring-1 ring-red-200",
        tone === "slate" && "bg-ink-100 text-ink-700 ring-1 ring-ink-200",
      )}
    >
      {children}
    </span>
  );
}
