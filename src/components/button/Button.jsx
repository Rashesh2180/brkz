import React from "react";

const Button = ({text}) => {
  return (
    <button
      className={`h-14 text-xl font-semibold capitalize cursor-pointer  rounded-lg px-10 flex items-center justify-center  bg-primary text-white hover:text-primary hover:bg-white border border-primary`}
    >{text}</button>
  );
};

export default Button;
