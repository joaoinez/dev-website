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
        `absolute bottom-12 left-1/2 flex h-8 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-muted-foreground/30 transition-opacity duration-200`,
        isAtTop ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className={cn(
          `h-2 w-2 animate-[circle-scroll-mobile_1.8s_ease-in-out] rounded-full bg-foreground/70 xl:animate-[circle-scroll-desktop_1.8s_ease-in-out]`,
          isAtTop && "repeat-infinite xl:repeat-infinite"
        )}
      />
    </div>
  );
};
