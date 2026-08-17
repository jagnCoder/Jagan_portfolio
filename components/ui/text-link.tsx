import Link from "next/link";
import { cn } from "@/lib/utils";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function TextLink({ href, children, className }: TextLinkProps) {
  return (
    <Link href={href} className={cn("text-sky-200 transition-colors hover:text-white", className)}>
      {children}
    </Link>
  );
}