import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroLabel = () => {
  const tickerRef = useRef(null);

  useEffect(() => {
    const el = tickerRef.current;

    gsap.fromTo(
      el,
      { x: 0 },
      {
        x: "-50%",
        duration: 5,
        ease: "linear",
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className="w-full flex justify-center mt-6">

      <div className="w-full  overflow-hidden bg-black rounded px-4 py-2">

        {/* MOVING BELT */}
        <div
          ref={tickerRef}
          className="flex whitespace-nowrap text-white font-medium"
        >
          <p className="mx-6">
            Build Fast • Launch Smart • Scale Confidently •
          </p>
          <p className="mx-6">
            Build Fast • Launch Smart • Scale Confidently •
          </p>
          <p className="mx-6">
            Build Fast • Launch Smart • Scale Confidently •
          </p>
          <p className="mx-6">
            Build Fast • Launch Smart • Scale Confidently •
          </p>
        </div>

      </div>

    </div>
  );
};

export default HeroLabel;