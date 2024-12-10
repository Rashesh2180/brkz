import React from "react";

const Button = ({ text, bgcolor = "primary", textColor = "white", borderColor = "primary", hoverTextColor = "primary", hoverBgColor = "white" }) => {
  // Construct the dynamic class names based on passed props
  return (
    <button
      className={`h-14 text-xl font-semibold capitalize cursor-pointer rounded-full px-10 flex items-center justify-center bg-${bgcolor} text-${textColor} hover:text-${hoverTextColor} hover:bg-${hoverBgColor} border border-${borderColor}`}
    >
      {text}
    </button>
  );
};

export default Button;
