import React, { useRef } from "react";
import enText from "../../../translationText/en.json";
const Features = () => {
  const videoRef = useRef(null);

  const handleClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  const featureTxt = enText.about.feature;
  return (
    <div className=" py-20  custom-container">
      <h1 className=" section-title max-w-[900px] mx-auto">
        {featureTxt.title_1}{" "}
        <span className=" text-secondary-dark">{featureTxt.title_2}</span>
      </h1>
      <h1 className="section-subtitle">{featureTxt.sub_tilte}</h1>
      <div className=" mt-10 rounded-3xl h-[600px] w-full overflow-hidden">
        <video
          ref={videoRef}
          className="h-full object-contain w-full rounded-3xl"
          poster="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1716874500/Videos/ibrahims_poster_xiukqv.png"
          src="https://res.cloudinary.com/dtbk6u1pb/video/upload/v1716535908/Videos/ibrahim_owjbcb.mp4"
          onClick={handleClick}
        ></video>
      </div>

      <div className=" mt-20">
        <h1 className=" section-title max-w-[900px] mx-auto">
          {featureTxt.our}{" "}
          <span className=" text-secondary-dark">{featureTxt.feature}</span>
        </h1>
        <h1 className="section-subtitle">{featureTxt.sub_title_2}</h1>
        <div className="mt-10 flex justify-center gap-10 flex-wrap">
          <div className="group h-[130px] max-w-[350px] w-full relative">
            <img
              src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1717139155/About%20Us/wamda_pn1mnq.png"
              alt=""
              className="h-full w-full object-contain"
            />
            <button className="absolute bottom-0  right-2 transform  px-4 py-2 bg-secondary-dark text-white text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              Read More
            </button>
          </div>
          <div className="group h-[130px] max-w-[350px] w-full relative">
            <img
              src="https://brkz.com/images/icons/forbesIcon.png"
              alt=""
              className="h-full w-full object-contain"
            />
            <button className="absolute bottom-0  right-2 transform  px-4 py-2 bg-secondary-dark text-white text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              Read More
            </button>
          </div>
          <div className="group h-[130px] max-w-[350px] w-full relative">
            <img
              src="https://brkz.com/images/icons/techcrunchIcon.png"
              alt=""
              className="h-full w-full object-contain"
            />
            <button className="absolute bottom-0  right-2 transform  px-4 py-2 bg-secondary-dark text-white text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              Read More
            </button>
          </div>
          <div className="group h-[130px] max-w-[350px] w-full relative">
            <img
              src="https://brkz.com/images/icons/arabiaIcon.png"
              alt=""
              className="h-full w-full object-contain"
            />
            <button className="absolute bottom-0  right-2 transform  px-4 py-2 bg-secondary-dark text-white text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              Read More
            </button>
          </div>
          <div className="group h-[130px] max-w-[350px] w-full relative">
            <img
              src="https://brkz.com/images/icons/enterIcon.png"
              alt=""
              className="h-full w-full object-contain"
            />
            <button className="absolute bottom-0  right-2 transform  px-4 py-2 bg-secondary-dark text-white text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
