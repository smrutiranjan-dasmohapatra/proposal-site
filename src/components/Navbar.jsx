"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const btnRef = useRef(null);

  const handleYes = () => {
    window.open("https://wa.me/8249172250?text=YES", "_blank");
  };

  useLayoutEffect(() => {
    gsap.set([navRef.current, logoRef.current, btnRef.current], { opacity: 0, y: -20 });
    gsap.to(navRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    gsap.to(logoRef.current, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
    gsap.to(btnRef.current, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-transparent">
      <h1 ref={logoRef} className="text-lg md:text-xl font-semibold">Proposal</h1>
      <button ref={btnRef} onClick={handleYes} className="px-5 py-2 rounded bg-pink-500 text-white">
        Yes
      </button>
    </header>
  );
}