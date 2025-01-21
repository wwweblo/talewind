"use client";
import React, { useState } from "react";

const Dropdown = ({ options, placeholder = "Выберите группу" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64">
      {/* Кнопка выбора */}
      <button
        type="button"
        onClick={toggleDropdown}
        className={`w-full p-3 border rounded-md text-blue-700 bg-white flex justify-between items-center shadow-sm focus:outline-none ${
          isOpen ? "border-blue-500 bg-blue-100" : "border-gray-400"
        }`}
      >
        {selectedOption || placeholder}
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
          ⌄
        </span>
      </button>

      {/* Выпадающий список */}
      {isOpen && (
        <ul className="absolute w-full mt-1 border border-blue-500 bg-white rounded-md shadow-lg max-h-40 overflow-y-auto custom-scrollbar">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="p-3 hover:bg-blue-100 text-blue-700 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
