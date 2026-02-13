import React from "react";

const FirstAboutHeading = () => {
  return (
    <div className="text-slate-300 flex flex-col items-center text-center bg-gradient-to-t from-emerald-800 to-black px-4 py-16">

      {/* Heading */}
      <h1
        className="
          hover:text-emerald-300
          leading-none
          
          text-5xl
          sm:text-6xl
          md:text-7xl
          lg:text-8xl
          xl:text-[180px]
        "
      >
        Admiyz.
      </h1>

      {/* Paragraph */}
      <p
        className="
          mt-5
          hover:text-orange-300
          
          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl
          
          max-w-xs
          sm:max-w-md
          md:max-w-2xl
          lg:max-w-4xl
        "
      >
        We are a results-driven web development agency focused on building fast,
        scalable, and conversion-ready digital products. Our work blends clean
        design, modern technologies, and smart engineering to help businesses
        grow online. From high-performance websites to custom web applications,
        we turn ideas into reliable digital experiences that are built to scale.
      </p>

    </div>
  );
};

export default FirstAboutHeading;