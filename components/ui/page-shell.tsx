import { TopProgress } from "@/components/ui/top-progress";
import { SiteShell } from "@/components/ui/site-shell";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <SiteShell>
      <TopProgress />
      {children}
    </SiteShell>
  );
}