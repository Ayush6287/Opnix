import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroHeading = () => {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 60,
        opacity: 0,
        duration: 3,
        stagger: 0.2,
        ease: "power3.out",
       yoyo : true
      });

      gsap.from(badgeRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        ease: "back.out(1.7)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center px-4 sm:px-8"
    >
      <div className="w-full max-w-5xl text-center">
        <h1 className="font-semibold text-slate-800 leading-tight 
                       text-3xl sm:text-4xl md:text-4xl lg:text-6xl">

          <span className="hero-line block">
            From Concept to Production  — Rapidly.    We Build
          </span>

          <span className="hero-line block mt-2">
         Modern Apps That   Go Live and Drive <br />
            <button ref={badgeRef}
            className="inline-block mt-4 px-4 py-2 
                       text-lg sm:text-xl md:text-2xl lg:text-2xl
                       rounded-xl bg-emerald-600 text-white"> Results.</button>
             
        
           
          </span>

       

        </h1>
      </div>
    </div>
  );
};

export default HeroHeading;