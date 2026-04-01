"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

import svg1 from "../assets/svg/12.svg";
import svg2 from "../assets/svg/5.svg";
import svg3 from "../assets/svg/8.svg";
import svg4 from "../assets/svg/4.svg";

gsap.registerPlugin(ScrollTrigger);

const storyData = [
  { id: 1, img: img1, title: "The Day We Met", date: "October 14, 2021", text: "It wasn’t just a meeting, it was a collision of worlds. The air felt lighter, the coffee tasted sweeter, and for the first time, everything made sense." },
  { id: 2, img: img2, title: "Our First Memory", date: "October 18, 2021", text: "Under the glow of the holiday lights, we shared a moment that felt like time had stopped, and everything else faded away." },
  { id: 3, img: img3, title: "Moments We Loved", date: "Every Day Since", text: "From quiet mornings to beautiful journeys, every second has been a memory worth holding forever." },
];

export default function Cards() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(".card", {
        start: "top 92%",
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.12 }),
      });

      gsap.utils.toArray(".svg").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          { opacity: 0.5, x: 0, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 95%", once: true } }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 px-5 sm:px-10 overflow-hidden">
      <img src={svg1} className="svg absolute top-10 left-5 w-14 opacity-50 pointer-events-none" />
      <img src={svg2} className="svg absolute top-40 right-5 w-16 opacity-50 pointer-events-none" />
      <img src={svg3} className="svg absolute bottom-20 left-10 w-12 opacity-50 pointer-events-none" />
      <img src={svg4} className="svg absolute bottom-10 right-10 w-14 opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-24">
        {storyData.map((item, i) => (
          <div key={item.id} className="card opacity-0 translate-y-10 grid md:grid-cols-2 gap-8 items-center">
            <div className={`relative flex justify-center ${i % 2 !== 0 ? "md:order-2" : ""}`}>
              <div className="w-[240px] sm:w-[260px] h-[300px] sm:h-[340px] overflow-hidden rounded shadow-sm">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <span className="absolute bottom-2 bg-white text-[10px] px-3 py-1 rounded shadow">{item.date}</span>
            </div>
            <div className={`text-center md:text-left ${i % 2 !== 0 ? "md:order-1" : ""}`}>
              <h2 className="text-xl sm:text-2xl font-medium mb-2 text-gray-800">{item.title}</h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}