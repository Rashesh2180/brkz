import React from "react";
import Button from "../../../components/button/Button";

const Hero = () => {
  return (
    <section className=" min-h-[calc(100vh-84px)] bg-gradient-to-b from-primary flex flex-col  justify-center items-center to-[#375c8d]">
      <div className="custom-container h-full flex  gap-10 max-md:flex-col py-5  justify-between items-center flex-row-reverse">
        <div className=" text-white flex-1">
          <h2 className="  text-lg  text-secondary-dark font-medium">Our vision is</h2>
          <h2 className=" text-5xl font-black mt-5 tracking-wide  ">
            Building Tomorrow
          </h2>
          <h2 className=" text-5xl font-black tracking-wide mt-3 ">
            One Partnership at a Time
          </h2>
          <h3 className="  mt-10 text-lg font-semibold !text-secondary-dark">Who we are?</h3>
          <p className=" max-w-[500px] mt-3 font-medium text-lg">
            Our mission is passionately dedicated to empowering our partners in
            the MENA construction industry, we bridge Materials, Equipment,
            Manpower, and Financing needs through cutting-edge technology,
            building the cities of tomorrow.
          </p>
          <div className=" mt-10">
          <Button text="Explore Our Company Profile"/>

          </div>
        </div>
        <div className=" flex-1">
          <img src="/assets/images/about/hero/about_hero.svg" className="  mr-auto h-[536px]" alt="" />

        </div>
      </div>
    </section>
  );
};

export default Hero;
