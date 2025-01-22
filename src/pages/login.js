"use client";

import React from "react";
import "../app/globals.css";
import PasswordInput from "@/components/passwordInput";
import Button from "@/components/button";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="flex max-w-4xl w-full bg-white shadow-lg rounded-lg">
        {/* Левая часть с изображением */}
        <div className="w-1/2 relative">
          <img
            src="/background.png" // Укажите путь к вашему изображению
            alt="Левая часть"
            className="w-full h-full object-cover rounded-l-lg"
          />
          {/* Декоративный элемент (линия) */}
          <div className="absolute bottom-4 left-4 w-12 h-2 bg-white rounded-full"></div>
        </div>

        {/* Правая часть с формой авторизации */}
        <div className="w-1/2 p-8 relative flex flex-col justify-center">
          {/* Форма авторизации */}
          <h2 className="text-xl font-bold text-center text-blue-500 mb-8">
            Авторизация
          </h2>
          <form className="flex flex-col items-center space-y-6">
            <div className="w-full">
              <label
                htmlFor="login"
                className="block text-sm font-semibold text-blue-600"
              >
                Логин:
              </label>
              <input
                type="email"
                id="login"
                name="login"
                placeholder="example@domain.com"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-blue-600"
              >
                Пароль:
              </label>
              <PasswordInput placeholder="Введите пароль" />
            </div>
            <Button
              text="Войти"
              variant="light_blue"
              size="md"
              onClick={(e) => {
                e.preventDefault();
                console.log("Вход выполнен");
              }}
            />
          </form>

          {/* Декоративные элементы */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <div className="bg-blue-400 rounded-full w-8 h-8"></div>
            <div className="bg-blue-300 rounded-full w-6 h-6"></div>
            <div className="bg-blue-200 rounded-full w-4 h-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
