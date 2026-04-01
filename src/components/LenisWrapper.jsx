"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
      lerp: 0.1,
    });

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}