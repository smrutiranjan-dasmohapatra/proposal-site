"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const btnRef = useRef(null);

   const handleAlwaysYes = () => {
    const phone = "8249172250"; // 👉 replace with your number
    const message = " YES";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };


  useEffect(() => {
    gsap.from(navRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power2.out",
    });

    gsap.from(logoRef.current, {
      opacity: 0,
      y: -10,
      delay: 0.5,
      duration: 1,
    });

    gsap.from(btnRef.current, {
      scale: 0.8,
      opacity: 0,
      delay: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-transparent"
    >
      <h1 ref={logoRef} className="text-lg md:text-xl font-semibold">
      Proposal
      </h1>

      <button
        ref={btnRef}
        onClick={handleAlwaysYes}
        className="px-5 py-2 rounded-[3px] bg-pink-500 text-white"
      >
        Yes 
      </button>
    </header>
  );
}
