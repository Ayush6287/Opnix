import React from 'react'
import { useEffect } from 'react'
import { gsap } from "gsap";
const HeroLabel = () => {

  useEffect(() => {
    gsap.to(".ticker", {
      x: "-50%",
      duration: 4,
      ease: "linear",
      repeat : -1
    });
  }, []);
  

  return (
    <div className="overflow-hidden w-[500px] bg-yellow-500 rounded-3xl  text-black">
      <div className="flex ticker whitespace-nowrap">
        <p className="">
          Build Fast • Launch Smart • Scale Confidently •
        </p>
        <p className="">
          Build Fast • Launch Smart • Scale Confidently •
        </p>
        
      </div>
    </div>
  );
};
export default HeroLabel
