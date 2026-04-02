"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisWrapper({ children }) {
  useEffect(() => {
    // ✅ Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
      lerp: 0.1,
      direction: "vertical",
      smoothTouch: true,
    });

    // ✅ Connect Lenis with GSAP ScrollTrigger
    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update(); // Sync ScrollTrigger with Lenis
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ Optional: improve ScrollTrigger performance
    ScrollTrigger.defaults({
      scroller: window, // scroller is window, Lenis handles smooth scroll internally
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.kill();
    };
  }, []);

  return <>{children}</>;
}
