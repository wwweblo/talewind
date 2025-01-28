"use client";

import React, { useState } from "react";

const CheckBox = ({ label, checked, onChange, disabled = false }) => {
  return (
    <label
      className={`flex items-center space-x-2 ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled} // Передача атрибута disabled
        className={`w-5 h-5 text-blue-500 border-2 ${
          disabled ? "border-gray-300 bg-gray-100" : "border-gray-300"
        } rounded focus:ring-blue-500`}
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

export const CheckBoxGroup = ({ items }) => {
  const [values, setValues] = useState(
    items.map((item) => ({ label: item.label, checked: item.checked }))
  );

  const handleCheck = (index) => {
    if (items[index].disabled) return; // Блокировка изменения, если элемент отключен
    const newValues = [...values];
    newValues[index].checked = !newValues[index].checked;
    setValues(newValues);
  };

  return (
    <div className="flex m-5 flex-col space-y-2">
      {items.map((item, index) => (
        <CheckBox
          key={index}
          label={item.label}
          checked={values[index].checked}
          onChange={() => handleCheck(index)}
          disabled={item.disabled}
        />
      ))}
    </div>
  );
};
