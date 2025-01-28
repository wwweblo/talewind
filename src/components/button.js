import React from "react";

const sizeStyles = {
  sm: "px-10 py-3 text-base",
  md: "px-20 py-3 text-base",
  bg: "px-40 py-3 text-base",
};

const variantStyles = {
  light_blue: "bg-blue-500 text-white hover:bg-blue-600",
  blue: "bg-blue-700 text-white hover:bg-blue-900",
  gray: "bg-gray-500 text-white hover:bg-gray-600",
};

const Button = ({ text, variant = "light_blue", size = "md", callback, imageSrc, altText }) => (
  <button
    className={`font-thin m-5 rounded-lg transition duration-300 flex items-center justify-center ${sizeStyles[size]} ${variantStyles[variant]}`}
    onClick={callback}
  >
    {text}
    {imageSrc && (
      <img
        src={imageSrc}
        alt={altText}
        className="ml-2"
      />
    )}
  </button>
);

export default Button;
