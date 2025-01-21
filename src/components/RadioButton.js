"use client";

import React, { useState } from "react";

const RadioButton = ({ label, checked, onChange, disabled = false }) => {
  return (
    <label
      className={`flex items-center space-x-2 ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="w-5 h-5 text-blue-500 border-2 border-gray-300 rounded-full focus:ring-blue-500"
      />
      <span
        className={`text-sm ${
          disabled ? "text-gray-400" : "text-blue-500"
        }`}
      >
        {label}
      </span>
    </label>
  );
};

export const RadioButtonGroup = ({ items }) => {
  const [selected, setSelected] = useState(
    items.findIndex((item) => item.checked)
  );

  return (
    <div className="flex flex-col space-y-2">
      {items.map((item, index) => (
        <RadioButton
          key={index}
          label={item.label}
          checked={selected === index}
          onChange={() => setSelected(index)}
          disabled={item.disabled}
        />
      ))}
    </div>
  );
};
