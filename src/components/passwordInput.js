"use client";

import React, { useRef } from "react";

const PasswordInput = ({ placeholder = "Пароль" }) => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.classList.add("border-blue-500", "bg-blue-100", "text-blue-500");
      inputRef.current.classList.remove("border-gray-400", "bg-white", "text-gray-900");
    }
  };

  const handleBlur = () => {
    if (inputRef.current) {
      inputRef.current.classList.add("border-gray-400", "bg-white", "text-gray-900");
      inputRef.current.classList.remove("border-blue-500", "bg-blue-100", "text-blue-900");
    }
  };

  return (
    <input
      ref={inputRef}
      type="password"
      placeholder={placeholder}
      className="p-3 border border-gray-400 bg-white text-gray-900 rounded-md focus:outline-none"
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default PasswordInput;
