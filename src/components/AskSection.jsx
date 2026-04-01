"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Svg1 from "../assets/svg/1.svg";
import Svg2 from "../assets/svg/6.svg";
import Svg3 from "../assets/svg/7.svg";

export default function AskSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const svg1Ref = useRef(null);
  const svg2Ref = useRef(null);
  const svg3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ scrollTrigger: { trigger: containerRef.current, start: "top 75%" } });

    tl.fromTo(textRef.current, { opacity: 0, y: 120 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .fromTo(".ask-btn", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4");

    [svg1Ref, svg2Ref, svg3Ref].forEach((ref, i) => {
      gsap.fromTo(ref.current, { opacity: 0, x: i === 0 ? -40 : i === 2 ? 0 : 0, y: i === 0 ? -40 : i === 2 ? 40 : -20 }, { opacity: i === 1 ? 0.7 : 0.6, x: 0, y: 0, duration: 1, scrollTrigger: { trigger: containerRef.current, start: "top 80%" } });
      gsap.to(ref.current, { x: i === 2 ? 25 : 0, y: i === 0 ? -15 : i === 1 ? -12 : 0, rotate: i === 0 ? 6 : i === 1 ? 4 : 0, repeat: -1, yoyo: true, duration: i === 1 ? 2.5 : i === 0 ? 3 : 4, ease: "sine.inOut" });
    });
  }, []);

  const handleYes = () => window.open("https://wa.me/8249172250?text=YES", "_blank");
  const handleAlwaysYes = () => window.open("https://wa.me/8249172250?text=ALWAYS YES", "_blank");

  return (
    <section className="flex justify-center items-center bg-white">
      <div ref={containerRef} className="relative pb-24 w-full text-center m-20 space-y-20 overflow-hidden">
        <img ref={svg1Ref} src={Svg1} alt="" className="absolute top-20 left-0 w-16 opacity-0" />
        <img ref={svg2Ref} src={Svg2} alt="" className="absolute top-[120px] right-0 w-20 opacity-0" />
        <img ref={svg3Ref} src={Svg3} alt="" className="absolute top-40 left-10 w-14 opacity-0" />

        <h1 ref={textRef} className="text-3xl sm:text-7xl font-medium leading-tight text-gray-800">Can we turn this LIKE into LOVE?</h1>

        <div className="flex justify-center gap-6 mt-8">
          <button onClick={handleYes} className="ask-btn px-8 py-3 rounded-[3px] text-sm border border-gray-300 hover:bg-green-300 transition-all duration-300">Yes</button>
          <button onClick={handleAlwaysYes} className="ask-btn px-8 py-3 rounded-[3px] text-sm bg-gradient-to-r from-pink-500 to-pink-700 text-white shadow-md hover:scale-105 transition-all duration-300">Always Yes</button>
        </div>

        <div className="mt-16 text-center space-y-3">
          <h2 className="text-lg sm:text-xl text-gray-600">made with love 💖</h2>
          <p className="text-base sm:text-lg text-gray-800 font-medium">no matter what you choose… because I only want YES 😌</p>
        </div>
      </div>
    </section>
  );
}