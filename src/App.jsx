// src/App.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Surprise from "./components/surprise";
import AskSection from "./components/AskSection";
import FloatingMusic from "./components/FloatingMusic";

export default function App() {
  const [ready, setReady] = useState(false);
  const loaderRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    // Wait for React mount
    const timer = setTimeout(() => {
      setReady(true);

      // Fade out loader and fade in app content
      if (loaderRef.current && appRef.current) {
        const tl = gsap.timeline();

        tl.to(loaderRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            loaderRef.current.style.display = "none";
          },
        });

        tl.fromTo(
          appRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
      }
    }, 300); // wait 300ms for loader to show

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🛑 FULL-SCREEN LOADER */}
      {!ready && (
        <div
          ref={loaderRef}
          className="fixed top-0 left-0 w-screen h-screen bg-white flex flex-col justify-center items-center z-[9999]"
        >
          <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-700 font-medium">Loading...</p>
        </div>
      )}

      {/* 🌟 APP CONTENT */}
      <div ref={appRef} className="opacity-0">
        <Navbar />
        <FloatingMusic />
        <Hero />
        <Cards />
        <Surprise />
        <AskSection />
      </div>
    </>
  );
}