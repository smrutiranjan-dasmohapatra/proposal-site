"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

// ✅ Import SVGs
import Svg1 from "../assets/svg/1.svg";
import Svg2 from "../assets/svg/3.svg";
import Svg3 from "../assets/svg/7.svg";

export default function Hero() {
  const textRef = useRef([]);
  const emojiRef = useRef(null);
  const svgRef = useRef([]);

  textRef.current = [];
  svgRef.current = [];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 🔹 TEXT ANIMATION
    tl.from(textRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.12,
      force3D: true,
    });

    // 🔹 SVG ENTRY ANIMATION
    tl.from(
      svgRef.current,
      {
        opacity: 0,
        scale: 0.5,
        y: 80,
        rotate: -10,
        duration: 1.2,
        stagger: 0.3,
      },
      "-=0.3"
    );

    // 🌸 SVG 1 → FLOAT DRIFT
    gsap.to(svgRef.current[0], {
      x: "+=30",
      y: "+=20",
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // 🌪️ SVG 2 → ROTATE + BREATHING
    gsap.to(svgRef.current[1], {
      rotation: 360,
      duration: 6,
      ease: "linear",
      repeat: -1,
    });

    gsap.to(svgRef.current[1], {
      scale: 0.9,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 🍃 SVG 3 → FALLING LOOP
    const fall = () => {
      gsap.fromTo(
        svgRef.current[2],
        {
          y: -100,
          x: Math.random() * window.innerWidth,
          rotation: 0,
          opacity: 1,
        },
        {
          y: window.innerHeight + 100,
          x: "+=100",
          rotation: 360,
          duration: 6,
          ease: "linear",
          onComplete: fall,
        }
      );
    };

    fall();

    // 👇 EMOJI BOUNCE
    gsap.to(emojiRef.current, {
      y: 6,
      duration: 0.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-10 relative overflow-hidden bg-white">
      
      {/* 🌸 SVG Decorations */}
      <img
        ref={(el) => (svgRef.current[0] = el)}
        src={Svg1}
        className="absolute top-20 left-10 w-24 opacity-90 pointer-events-none"
        alt=""
      />

      <img
        ref={(el) => (svgRef.current[1] = el)}
        src={Svg2}
        className="absolute bottom-20 right-10 w-28 opacity-90 pointer-events-none"
        alt=""
      />

      <img
        ref={(el) => (svgRef.current[2] = el)}
        src={Svg3}
        className="absolute top-10 left-1/2 w-20 opacity-80 pointer-events-none"
        alt=""
      />

      {/* 🔤 TEXT CONTENT */}
      <p
        ref={(el) => (textRef.current[0] = el)}
        className="text-[10px] sm:text-xs tracking-[0.3em] font-bold mb-4"
      >
        DEDICATE TO YOU 🌸
      </p>

      <h1
        ref={(el) => (textRef.current[1] = el)}
        className="text-3xl sm:text-5xl md:text-6xl font-light mb-5 leading-tight"
      >
        Our Story Begins...
      </h1>

      <p
        ref={(el) => (textRef.current[2] = el)}
        className="text-gray-800 max-w-xs sm:max-w-md md:max-w-lg text-sm sm:text-base"
      >
        Every great journey starts with a single step, and ours began
        with a look that changed everything forever.
      </p>

      {/* 👇 SCROLL INDICATOR */}
      <div
        ref={(el) => (textRef.current[3] = el)}
        className="absolute bottom-10 flex flex-col items-center text-gray-700"
      >
        <span className="text-xs tracking-widest mb-1">SCROLL</span>
        <span ref={emojiRef} className="text-xl will-change-transform">
          👇
        </span>
      </div>

    </section>
  );
}