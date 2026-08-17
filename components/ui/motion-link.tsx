import Link from "next/link";
import { cn } from "@/lib/utils";

interface MotionLinkProps {
  href: string;
  label: string;
  className?: string;
}

export function MotionLink({ href, label, className }: MotionLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-sm text-sky-200 transition-colors hover:text-white",
        className
      )}
    >
      <span>{label}</span>
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}