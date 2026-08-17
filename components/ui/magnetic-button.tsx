"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ComponentType, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const MotionAnchor = motion.a as unknown as ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
const MotionButton = motion.button as unknown as ComponentType<ButtonHTMLAttributes<HTMLButtonElement>>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  children: ReactNode;
};

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

type Props = (ButtonProps | AnchorProps) & {
  className?: string;
};

export function MagneticButton(props: Props) {
  const prefersReducedMotion = useReducedMotion();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [hovered, setHovered] = useState(false);

  const reset = () => {
    setX(0);
    setY(0);
    setHovered(false);
  };

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    setX((event.clientX - rect.left - rect.width / 2) * 0.18);
    setY((event.clientY - rect.top - rect.height / 2) * 0.18);
    setHovered(true);
  };

  const sharedClassName = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition-colors hover:border-sky-300/35 hover:bg-white/10",
    props.className
  );

  const motionProps = prefersReducedMotion
    ? {}
    : {
        animate: hovered ? { x, y } : { x: 0, y: 0 },
        transition: { type: "spring", stiffness: 220, damping: 20 }
      };

  if ("href" in props) {
    const anchorProps = props as AnchorProps;
    const { children, className: localClassName, ...rest } = anchorProps;
    return (
      <MotionAnchor
        className={cn(sharedClassName, localClassName)}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        {...motionProps}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(121,199,255,0.18),transparent_62%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </MotionAnchor>
    );
  }

  const buttonProps = props as ButtonProps;
  const { children, className: localClassName, ...rest } = buttonProps;
  return (
    <MotionButton
      className={cn(sharedClassName, localClassName)}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      {...motionProps}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(121,199,255,0.18),transparent_62%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </MotionButton>
  );
}