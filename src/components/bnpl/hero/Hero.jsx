import React from "react";
import entxt from "../../../translationText/en.json";

const Hero = () => {
  const common = entxt.common;
  const heroTxt = entxt.bnpl.hero;
  return (
    <div className=" h-[calc(100vh-84px)] bg-gradient-to-b from-primary to-[#375c8d] flex-col justify-center items-center">
      <div className=" h-full w-full py-10 flex justify-between items-center gap-8 max-lg:flex-col xl:gap-14  custom-container">
        <div className=" flex-1">
          <h1 className=" text-xl text-white font-medium p-1 !text-start  rounded-md">
            <span className=" mr-2 py-1 px-2 border text-sm font-semibold uppercase text-white bg-secondary-dark rounded-lg">
              {common.new}
            </span>
            {heroTxt.heading}
          </h1>
          <h2 className=" section-title !text-white mt-2 !text-start">
            {heroTxt.title}
          </h2>
          <p className=" section-subtitle !text-white !text-start">
            {heroTxt.sub_tilte}
          </p>
          <div className=" mt-10 flex justify-start items-center gap-10">
          <button className=" border border-white cursor-pointer rounded-full sm:px-8 px-4 py-3 text-xl font-bold text-white">
            {common.Howwork}
          </button>
          <button className="   bg-secondary-dark cursor-pointer rounded-full sm:px-8 px-4 py-3 text-xl font-bold text-white">
          {common.apply}
          </button>
        </div>
        </div>
        <div className=" h-full w-full flex-1">
          <img
            className=" w-full h-full object-contain"
            src="https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1728912806%2Fhome%2Fillustration_bnpl_ttvzfc.png&w=1920&q=75"
            alt=""
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
