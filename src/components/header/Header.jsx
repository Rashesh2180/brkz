import React, { useState,useEffect } from "react";
import enText from "../../translationText/en.json";
import { NavLink, useLocation } from "react-router-dom";
import { IoEarth } from "react-icons/io5";
const Header = () => {
  const [open, setOpen] = useState(false);
  const navList = enText.navList;
  const loginTxt = enText.common;

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setOpen(prev=>!prev);
  };
 
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; 
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="xl:px-16  lg:px-10 px-5 py-5 flex gap-5 justify-between items-center relative shadow-header">
      <NavLink to="/" className=" bg-primary h-10 w-10 text-white font-black rounded-full flex justify-center items-center">
      B
        {/* <img src="/assets/svg/logo/logo.svg" alt="" className="object-contain w-[183px] h-12" /> */}
      </NavLink>

      <ul className="lg:flex hidden items-center gap-4">
        {navList.map((ele, ind) => (
          <li key={ind} className="px-4">
            <NavLink
              to={ele.href}
              className={`text-base font-semibold py-2 hover:text-secondary-dark ${
                location.pathname === ele.href
                  ? "text-secondary-dark border-b-4 border-secondary-dark"
                  : "text-secondary-light"
              }`}
            >
              {ele.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 ">
        <button className="text-sm font-bold text-primary capitalize max-lg:hidden">
          {loginTxt.login}
        </button>
        <button className="px-5 h-11 font-semibold max-lg:hidden hover:shadow-custom text-white rounded-lg bg-primary capitalize">
          {loginTxt.register}
        </button>

        <div
          className="relative h-11 gap-2 bg-primary-light px-5 flex justify-center items-center rounded-md"
          onMouseEnter={() => setDropdownOpen(true)} // Open on hover
          onMouseLeave={() => setDropdownOpen(false)} // Close when leaving the button
        >
          {/* <img
            src="/assets/images/herocarsol/world/world.png"
            alt=""
            className="h-5 w-5"
          /> */}
          <IoEarth className=" text-xl text-white" />
          <button className="text-white text-base flex items-center ml-2 gap-2 font-medium">
            EN
          </button>
          {/* Rotate the arrow when dropdown is open */}
          <i
            className={`fa-solid fa-chevron-down text-white text-xs transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          ></i>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul
              className="absolute top-full right-0 bg-white text-black shadow-lg rounded-lg mt-2 w-48"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <li className="px-4 py-2  hover:bg-primary hover:text-white">
                <NavLink>عربي</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-primary hover:text-white">
                <NavLink>English</NavLink>
              </li>
            </ul>
          )}
        </div>
        <button onClick={handleToggle} className=" lg:hidden">
          {!open ? (
            <i className="fa-solid fa-bars text-primary text-xl lg:hidden"></i>
          ) : (
           
              <i className="fa-solid fa-xmark text-red-600 text-xl"></i>
          )}
        </button>
      </div>

      {open && (
        <ul className="flex  flex-col  w-56 absolute top-[84px] right-0 pt-10 bg-white z-50 shadow-xl h-screen items-start p-5 gap-8">
          {navList.map((ele, ind) => (
            <li key={ind} className="">
              <NavLink
                to={ele.href}
                className={`text-base font-semibold py-2 hover:text-primary ${
                  location.pathname === ele.href
                    ? "text-primary border-b-4 border-primary"
                    : "text-secondary-light"
                }`}
              >
                {ele.text}
              </NavLink>
            </li>
          ))}
          <button className="text-sm font-bold text-primary capitalize">
            {loginTxt.login}
          </button>
          <button className="px-5 h-11 font-semibold hover:shadow-custom text-white rounded-lg bg-primary capitalize">
            {loginTxt.register}
          </button>
        </ul>
      )}
    </div>
  );
};

export default Header;
