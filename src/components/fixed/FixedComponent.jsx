import React from "react";
import enText from "../../translationText/en.json"; 

const FixedComponent = () => {
  const { title } = enText.fixed_component;

  return (
    <div className=" max-w-[189px] z-[1000000] flex  fixed bottom-20 right-20 flex-col justify-end gap-[6px]">
      <div className=" bg-[#f4f7f8]   p-3 rounded-lg  ">
        <h2 className="text-secondary-dark text-sm font-semibold text-center">{title}</h2>
      </div>
      <button className=" bg-[#3ace01] h-20 w-20 rounded-full  shrink-0 ml-auto hover:shadow-xl flex justify-center items-center">
        <img src="/assets/svg/whatsapp/whatsapp.svg" alt=""  className=" h-8 w-8"/>

      </button>
    </div>
  );
};

export default FixedComponent;
