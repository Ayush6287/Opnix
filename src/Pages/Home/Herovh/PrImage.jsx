import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Primage from "../../../assets/primg.png";

const PrImage = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;

    // Entrance
    gsap.fromTo(
      el,
      { y: 10, opacity: 0,  },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // Floating
    gsap.to(el, {
      y: -10,
      duration: 3.2,
      ease: "sine.inOut",
      repeat : 1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="relative w-full flex  mb-[-10px]   justify-center mt-[-10px] px-4">

      {/* 🔥 (2) Glow behind image */}
      <div className="
        absolute
        w-[520px] h-[520px]
        bg-emerald-400/20
        blur-3xl
        rounded-full
        z-0
      " />

      {/* 🔥 Image */}
      <img
        ref={imgRef}
        src={Primage}
        alt="Product preview"
        className="
          relative z-10
          w-full
          max-w-4xl
          h-auto
          rounded-xl
          shadow-2xl
        "
      />

    </div>
  );
};

export default PrImage;