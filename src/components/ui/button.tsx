import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "icon";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md border text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "border-ink-950 bg-ink-950 text-white shadow-soft hover:bg-ink-800",
        variant === "secondary" &&
          "border-ink-200 bg-white text-ink-900 shadow-soft hover:border-ink-500",
        variant === "ghost" &&
          "border-transparent bg-transparent text-ink-600 hover:bg-ink-100 hover:text-ink-950",
        size === "md" && "h-10 px-4",
        size === "sm" && "h-8 px-3",
        size === "icon" && "h-9 w-9 p-0",
        className,
      )}
      {...props}
    />
  );
}
