import React from "react";

const TeamGallery = () => {
  return (
    <div className=" bg-[#f4f6f7] py-20">
      <div className=" max-w-[1200px] px-3 mx-auto flex flex-col items-center justify-center">
        <h1 className=" small-title">
          The driving force behind our success
        </h1>
        <h2 className="section-title "> <span className="!text-secondary-dark">Meet</span> our Team</h2>
        <p className=" text-center mt-5 max-w-[600px] text-lg text-secondary-light mx-auto">
          Company culture refers to the character, values, and beliefs that go
          beyond the organizational structure and shape how a company operates
          and how its members interact. It represents the overall spirit and
          behaviors shared by team members, influencing their decisions and
          interactions
        </p>

        <div className=" grid md:grid-cols-3  gap-10 mt-10">
        <div className=" h-[360px] w-full rounded-lg overflow-hidden  ">
            <img className=" w-full h-full object-fill  max-md:object-cover max-md:object-top" src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1710394661/About%20Us/Image4_gbspsx.png" alt="" />
          </div>
          <div className=" h-[360px] w-full md:col-span-2 rounded-lg overflow-hidden ">
            <img
              src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1710394675/About%20Us/image1_wpxxnm.png"
              alt=""
              className=" h-full w-full object-fill"
            />
          </div>
         
        
        </div>
        <div className=" grid md:grid-cols-2 w-full gap-10 mt-10">
        <div className=" h-[360px] w-full rounded-lg overflow-hidden ">
            <img className=" w-full h-full object-cover" src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1710394660/About%20Us/Image2_scshku.png" alt="" />
          </div>
          <div className=" h-[360px] w-full rounded-lg overflow-hidden ">
            <img className=" w-full h-full object-cover" src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1710394660/About%20Us/Image3_iiwvpj.png" alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeamGallery;
