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
  const [mounted, setMounted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Increased timeout slightly but ensured it's reliable
    const timeout = window.setTimeout(() => {
      setIsReady(true);
    }, 1500);
    
    return () => window.clearTimeout(timeout);
  }, []);

  // On the server or before mounting, we render the loader unconditionally
  // to avoid layout shifts, but once mounted, we follow the isReady state.
  const showLoader = !mounted || !isReady;

  const handleSkip = () => {
    setIsReady(true);
  };

  return (
    <>
      <TopProgress />
      <PageLoader isVisible={showLoader} onSkip={handleSkip} />
      <CustomCursor />
      <TopNavigation />
      <div className="relative min-h-screen overflow-x-clip">{children}</div>
    </>
  );
}