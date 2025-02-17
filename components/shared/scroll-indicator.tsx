"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const ScrollIndicator = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { signal });

    return () => controller.abort();
  }, []);

  return (
    <div
      className={cn(
        `absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-200 w-5 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center`,
        isAtTop ? "opacity-100" : "opacity-0",
      )}
    >
      <div
        className={cn(
          `w-2 h-2 rounded-full bg-foreground/70 animate-[circle-scroll_1.8s_ease-in-out]`,
          isAtTop && "repeat-infinite",
        )}
      />
    </div>
  );
};
