import React from "react";

const ServicesCard = (props) => {
  return (
    <div
      className="
      relative overflow-hidden

      bg-gradient-to-br from-white/20 to-white/5
      backdrop-blur-2xl
      w-full h-full
      flex flex-col gap-8
      border border-white/20
      rounded-2xl
      px-3 py-3
      text-white
      shadow-[0_8px_32px_rgba(0,0,0,0.45)]

      transition-all duration-300
      hover:-translate-y-2
      hover:scale-[1.03]
      hover:shadow-[0_20px_60px_rgba(16,185,129,0.45)]
      hover:border-emerald-300/40
      "
    >
      {/* ✨ Glass shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-20 pointer-events-none"></div>

      <div className="flex flex-row items-center">
        
        {/* LEFT SIDE */}
        <div className="w-[40%] flex flex-col justify-between gap-5 items-center">

          <img
            className="
            w-full h-max rounded-2xl
            border border-white/20
            shadow-lg shadow-emerald-500/20
            "
            src={props.img}
            alt=""
          />

          <button
            className="
            px-5 py-2 rounded-lg
            bg-white/10 backdrop-blur-md
            text-white text-[16px]
            border border-white/20

            transition
            hover:bg-emerald-500/30
            hover:shadow-lg hover:shadow-emerald-400/40
            hover:-translate-y-1
            "
          >
            Learn More....
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-[60%] h-max rounded-3xl leading-relaxed p-4">

          <h1 className="mb-4 text-slate-100 font-semibold text-lg">
            {props.head}
          </h1>

          <p className="text-white/80">
            {props.para}
          </p>

        </div>
      </div>
    </div>
  );
};

export default ServicesCard;