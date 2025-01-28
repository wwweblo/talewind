"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import "../app/globals.css";
import PasswordInput from "@/components/passwordInput";
import Button from "@/components/button";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (login.trim().toLowerCase() === "admin" && password.trim() === "pswrd") {
      router.push("/");
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Header />
      <div className="flex flex-grow items-center justify-center">
        <AuthContainer>
          <ImageSection />
          <FormSection
            login={login}
            setLogin={setLogin}
            password={password}
            setPassword={setPassword}
            onLogin={handleLogin}
          />
        </AuthContainer>
      </div>
    </div>
  );
};

// Компонент Header
const Header = () => (
  <header className="flex max-w-4xl w-full bg-white shadow-md py-4 mt-40 px-8 items-center justify-between rounded mx-auto">
    <div className="flex items-center">
      <img src="/logo.png" alt="Логотип" className="w-12 h-12 mr-4" />
      <h1 className="text-xl font-bold text-blue-500">Компания</h1>
    </div>
  </header>
);

// Компонент контейнера для авторизации
const AuthContainer = ({ children }) => (
  <div className="flex max-w-4xl w-full bg-white shadow-lg rounded-lg">
    {children}
  </div>
);

// Компонент секции с изображением
const ImageSection = () => (
  <div className="w-1/2 relative">
    <img
      src="/background.png"
      alt="Левая часть"
      className="w-full h-full object-cover rounded-l-lg"
    />
    <div className="absolute bottom-4 left-4 w-12 h-2 bg-white rounded-full"></div>
  </div>
);

// Компонент секции с формой авторизации
const FormSection = ({ login, setLogin, password, setPassword, onLogin }) => (
  <div className="w-1/2 p-8 relative flex flex-col justify-center">
    <h2 className="text-xl font-bold text-center text-blue-500 mb-8">
      Авторизация
    </h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onLogin();
      }}
      className="flex flex-col items-center space-y-6"
    >
      {/* Поле логина */}
      <InputField
        id="login"
        label="Логин:"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        placeholder="Введите логин"
      />
      {/* Поле пароля */}
      <PasswordInput
        placeholder="Введите пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Кнопка */}
      <Button text="Войти" variant="light_blue" size="md" callback={onLogin} />
    </form>

    <DecorativeCircles />
  </div>
);

// Компонент поля ввода
const InputField = ({ id, label, value, onChange, placeholder }) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-sm font-semibold text-blue-600">
      {label}
    </label>
    <input
      type="text"
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

// Декоративные круги
const DecorativeCircles = () => (
  <div className="absolute bottom-4 right-4 flex space-x-2">
    <div className="bg-blue-400 rounded-full w-8 h-8"></div>
    <div className="bg-blue-300 rounded-full w-6 h-6"></div>
    <div className="bg-blue-200 rounded-full w-4 h-4"></div>
  </div>
);

export default LoginPage;
