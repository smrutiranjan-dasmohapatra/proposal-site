"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 🎨 SVGs
import Svg1 from "../assets/svg/1.svg";
import Svg2 from "../assets/svg/6.svg";
import Svg3 from "../assets/svg/7.svg";

gsap.registerPlugin(ScrollTrigger);

export default function AskSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const svg1Ref = useRef(null);
  const svg2Ref = useRef(null);
  const svg3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
    });

    // 💬 TEXT
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    )

    // 🔘 BUTTONS
    .fromTo(
      ".ask-btn",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // 🌸 SVG 1
    gsap.fromTo(
      svg1Ref.current,
      { opacity: 0, x: -40, y: -40 },
      {
        opacity: 0.6,
        x: 0,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.to(svg1Ref.current, {
      y: -15,
      rotate: 6,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });

    // 💖 SVG 2
    gsap.fromTo(
      svg2Ref.current,
      { opacity: 0, y: -20, rotate: -5 },
      {
        opacity: 0.7,
        y: 0,
        rotate: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.to(svg2Ref.current, {
      y: -12,
      rotate: 4,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut",
    });

    // ✨ SVG 3
    gsap.fromTo(
      svg3Ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 0.6,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.to(svg3Ref.current, {
      x: 25,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
    });

  }, []);

  // 💖 YES → WhatsApp
  const handleYes = () => {
    const phone = "8249172250";
    const message = "YES";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // 💍 ALWAYS YES → WhatsApp
  const handleAlwaysYes = () => {
    const phone = "8249172250";
    const message = "ALWAYS YES";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="flex justify-center items-center bg-white">
      <div
        ref={containerRef}
        className="relative pb-24 w-full text-center m-20 space-y-20 overflow-hidden"
      >
        {/* 🌸 SVG 1 */}
        <img
          ref={svg1Ref}
          src={Svg1}
          alt=""
          className="absolute top-20 left-0 w-16 opacity-0"
        />

        {/* 💖 SVG 2 */}
        <img
          ref={svg2Ref}
          src={Svg2}
          alt=""
          className="absolute top-[120px] right-0 w-20 opacity-0"
        />

        {/* 💬 TEXT */}
        <h1
          ref={textRef}
          className="text-3xl sm:text-7xl font-medium leading-tight text-gray-800"
        >
          Can we turn this LIKE into LOVE?
        </h1>

        {/* 💖 BUTTONS */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={handleYes}
            className="ask-btn px-8 py-3 rounded-[3px] text-sm 
                       border border-gray-300 
                       hover:bg-green-300 transition-all duration-300"
          >
            Yes
          </button>

          <button
            onClick={handleAlwaysYes}
            className="ask-btn px-8 py-3 rounded-[3px] text-sm 
                       bg-gradient-to-r from-pink-500 to-pink-700
                       text-white shadow-md 
                       hover:scale-105 transition-all duration-300"
          >
            Always Yes
          </button>
        </div>

        {/* 💫 FINAL ENDING */}
        <div className="mt-16 text-center space-y-3">
          <h2 className="text-lg sm:text-xl text-gray-600">
            made with love 💖
          </h2>

          <p className="text-base sm:text-lg text-gray-800 font-medium">
            no matter what you choose…  
            because I only want YES 😌
          </p>
        </div>

      </div>
    </section>
  );
}