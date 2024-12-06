import React from "react";
import enText from "../../translationText/en.json"; // Importing the JSON data

const Footer = () => {
  const { 
    address, 
    get_in_touch, 
    email, 
    tax, 
    call_us, 
    cr_details, 
    buy_material, 
    contact_us, 
    blog, 
    copyright, 
    privacy_policy 
  } = enText.footer;

  return (
    <footer className=" py-20">
      <div className="custom-container flex  justify-between gap-10">
        <img src="/assets/svg/footer/footer.svg" className=" w-[90px] h-[116px]" alt="" />
        {/* Address */}
        <div className="text-secondary-dark  text-sm font-semibold leading-8">
          <ul>
            <li>{buy_material}</li>
            <li>{contact_us}</li>
            <li>{blog}</li>
          </ul>
        </div>
        <div className="text-secondary-dark ">
        <h3 className="font-bold text-secondary-light">{get_in_touch}</h3>
          <p className=" text-secondary-dark font-semibold mt-3">{address}</p>
          <ul className=" font-medium mt-5 grid grid-cols-2 gap-2">
            <li>{email} <span className=" font-semibold text-primary">hello@brkz.com</span></li>
            <li>{tax} <span className=" font-semibold text-primary">311411370400003</span></li>
            <li>{call_us} <span className=" font-semibold text-primary">+966 11 510 1706</span></li>
            <li>{cr_details} <span className="font-semibold text-primary">شركة بي ار كيه زد العالمية لتقنية المعلومات - 1010824788</span></li>
          </ul>
        </div>


        {/* Links Section */}
      

        {/* Copyright and Privacy */}
       
      </div>
      <div className="text-secondary-dark py-5 mt-5 border-t  text-center relative ">
          <p>{copyright}</p>
          <p className=" text-primary cursor-pointer">{privacy_policy}</p>

          <img src="/assets/svg/footer/arrow.svg" className=" h-10 w-10 absolute bottom-2 cursor-pointer right-10" alt="" />
        </div>
    </footer>
  );
};

export default Footer;
