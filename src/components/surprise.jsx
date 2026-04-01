"use client";
import { useRef, useState } from "react";
import gsap from "gsap";

import Svg1 from "../assets/svg/1.svg";
import Svg2 from "../assets/svg/6.svg";
import Svg3 from "../assets/svg/3.svg";

export default function Surprise() {
  const [show, setShow] = useState(false);
  const textRef = useRef(null);
  const revealRef = useRef(null);
  const svg1Ref = useRef(null);
  const svg2Ref = useRef(null);
  const svg3Ref = useRef(null);

  const message = `Why I like you…\n\nBecause you make even ordinary moments feel special.\nBecause your smile can fix my worst days.\nBecause talking to you never feels enough.\nBecause you understand me without words.\nBecause you make me feel calm and happy at the same time.\nBecause with you, everything feels right.\nBecause you are not perfect, but perfect for me.\nBecause you became my habit without me noticing.\nBecause being with you feels like home.\nBecause… it’s just you.`;

  const typeText = (text, element, speed = 26) => {
    let i = 0;
    element.innerHTML = "";
    const typing = setInterval(() => {
      element.innerHTML += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(typing);
    }, speed);
  };

  const handleClick = () => {
    setShow(true);
    gsap.fromTo(revealRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out", onComplete: () => typeText(message, textRef.current) });

    const tl = gsap.timeline();
    tl.fromTo(svg1Ref.current, { opacity: 0, x: -40, y: -40, rotate: -10 }, { opacity: 0.7, x: 0, y: 0, rotate: 0, duration: 1 });
    gsap.to(svg1Ref.current, { y: -15, rotate: 5, repeat: -1, yoyo: true, duration: 3, ease: "sine.inOut" });

    tl.fromTo(svg2Ref.current, { opacity: 0, scale: 0.5 }, { opacity: 0.7, scale: 1, duration: 1 }, "-=0.6");
    gsap.to(svg2Ref.current, { scale: 1.15, repeat: -1, yoyo: true, duration: 1.8, ease: "power1.inOut" });

    tl.fromTo(svg3Ref.current, { opacity: 0, y: 40 }, { opacity: 0.6, y: 0, duration: 1 }, "-=0.6");
    gsap.to(svg3Ref.current, { x: 20, repeat: -1, yoyo: true, duration: 4, ease: "sine.inOut" });
  };

  return (
    <section className="py-24 px-5 flex justify-center items-center bg-white">
      <div className="relative w-full max-w-xl bg-green-200 rounded-[6px] shadow-md p-10 text-center overflow-hidden">
        <img ref={svg1Ref} src={Svg1} alt="" className="absolute top-4 left-4 w-14 opacity-0" />
        <img ref={svg2Ref} src={Svg2} alt="" className="absolute top-4 right-4 w-16 opacity-0" />
        <img ref={svg3Ref} src={Svg3} alt="" className="absolute bottom-4 left-1/2 w-12 opacity-0" />

        <h2 className="text-2xl sm:text-3xl font-medium mb-3 text-gray-800">A little something for you</h2>
        <p className="text-gray-500 mb-6">Click below… maybe you’ll understand</p>

        {!show && <button onClick={handleClick} className="px-6 py-2 bg-pink-500 text-white text-sm rounded-[4px] hover:opacity-80 transition">Click here</button>}

        {show && (
          <div ref={revealRef} className="mt-6">
            <p ref={textRef} className="text-gray-700 text-sm sm:text-base whitespace-pre-line text-left" style={{ lineHeight: "1.9" }} />
          </div>
        )}
      </div>
    </section>
  );
}