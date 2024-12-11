import React from "react";

const OfferBanner = () => {
  return (
    <div className="  w-full flex gap-10 items-start max-sm:flex-col">
      <div className="flex-1 h-[150px] w-full rounded-xl overflow-hidden ">
        <img
          src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1728381140/home/online_cashback_new_banner_en_ldfozd.png"
          alt=""
          className=" h-full w-full object-center"
        />
      </div>
      <div className="flex-1 h-[150px] w-full rounded-xl overflow-hidden ">
      <img
          src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1728309137/home/Home_BNPL_Banner_hzxmjo.png"
          alt=""
          className=" h-full w-full object-center"
        />
      </div>
    </div>
  );
};

export default OfferBanner;
