import React from "react";
import enText from "../../../translationText/en.json";

const Invenstors = () => {
  const aboutTxt = enText.about.investors;
  return (
    <div className=" py-20 px-5 custom-container ">
      <h1 className=" small-title  text-center">{aboutTxt.title}</h1>
      <h1 className=" section-title  text-center">
        <span className=" text-secondary-dark"> {aboutTxt.meet} </span>{" "}
        {aboutTxt.subtitle}
      </h1>
      <div className=" mt-10 flex brands-slider  animate-slide gap-16 items-center">
        <div className=" leading-[12.5rem]">
          <img
            src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1717152689/About%20Us/icon9900_b2f2xl.png"
            width={180}
            alt=""
          />
        </div>
        <div className=" leading-[12.5rem]">
          <img
            src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1717152689/About%20Us/iconBeco_xufkol.png"
            width={180}
            alt=""
          />
        </div>
        <div className=" leading-[12.5rem]">
          <img
            src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1717152690/About%20Us/iconVenture_mtfw3z.png"
            width={180}
            alt=""
          />
        </div>
        <div className=" leading-[12.5rem]">
          <img
            src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1717152690/About%20Us/iconWaed_pvylxq.png"
            width={180}
            alt=""
          />
        </div>
        <div className=" leading-[12.5rem]">
          <img
            src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1717152690/About%20Us/iconKnolwood_qi6uxx.png"
            width={180}
            alt=""
          />
        </div>
        <div className=" leading-[12.5rem]">
          <img
            src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1717152689/About%20Us/iconClass5_xp3zhb.png"
            width={180}
            alt=""
          />
        </div>
        <div className=" leading-[12.5rem]">
          <img
            src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1717152690/About%20Us/iconRzm_stzuhv.png"
            width={180}
            alt=""
          />
        </div>
        <div className=" leading-[12.5rem]">
          <img
            src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1717152690/About%20Us/iconPlus_gitkg7.png"
            width={180}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Invenstors;
