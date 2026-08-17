"use client";

import { useEffect, useState, type ReactNode } from "react";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { PageLoader } from "@/components/ui/page-loader";
import { TopNavigation } from "@/components/ui/top-navigation";
import { TopProgress } from "@/components/ui/top-progress";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsReady(true), 1200);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      <TopProgress />
      <PageLoader isVisible={!isReady} />
      <CustomCursor />
      <TopNavigation />
      <div className="relative min-h-screen overflow-x-clip">{children}</div>
    </>
  );
}