"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";

const CustomCalendar = ({ type = "date", availableDates = [], style = "white" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear());

  const toggleCalendar = () => setIsOpen(!isOpen);

  const handleDateSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleYearChange = (direction) => {
    setYear(year + direction);
  };

  // Классы для разных стилей
  const buttonStyle =
    style === "blue"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "bg-white text-blue-500 hover:bg-gray-100 border border-gray-300";

  const dropdownStyle =
    style === "blue"
      ? "text-blue-500"
      : "bg-white text-blue-500 border border-gray-300";

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  return (
    <div className="relative flex flex-col items-start">
      {/* Кнопка для открытия выбора */}
      <button
        onClick={toggleCalendar}
        className={`w-52 h-10 px-3 text-center rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${buttonStyle}`}
      >
        {selectedValue ? selectedValue : type === "date" ? "ДД.ММ.ГГГГ" : "Выберите месяц"}
      </button>

      {/* Открывающееся меню */}
      {isOpen && (
        <div
          className={`mt-2 ${
            type === "month" ? "w-72" : "w-52"
          } max-h-72 rounded-md shadow-lg overflow-y-auto z-50 custom-scrollbar ${dropdownStyle}`}
        >
          {type === "date" ? (
            <div className="grid grid-cols-2 gap-2 p-2">
              {availableDates.map((date, index) => (
                <button
                  key={index}
                  onClick={() => handleDateSelect(date)}
                  className="px-3 py-2 text-center rounded-md text-sm bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {date}
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => handleYearChange(-1)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  &lt;&lt;
                </button>
                <span className="text-lg font-bold">{year}</span>
                <button
                  onClick={() => handleYearChange(1)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  &gt;&gt;
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {months.map((month, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(`${month} ${year}`)}
                    className={`w-full px-4 py-2 text-center rounded-md text-sm ${
                      selectedValue === `${month} ${year}`
                        ? "bg-gray-300 text-gray-600"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

CustomCalendar.propTypes = {
  type: PropTypes.oneOf(["date", "month"]).isRequired, // "date" для выбора даты, "month" для выбора месяца
  availableDates: PropTypes.arrayOf(PropTypes.string),
  style: PropTypes.oneOf(["white", "blue"]),
};

export default CustomCalendar;
