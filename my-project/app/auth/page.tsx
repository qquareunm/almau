"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const minLength = 6;
    return password.length >= minLength;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Неверный формат электронной почты.");
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage("Пароль должен содержать как минимум 6 символов.");
      return;
    }

    axios
      .post(`${process.env.NEXT_PUBLIC_HOST}/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        console.log("Login successful:", response.data);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        router.push("/my-cabinet");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch((error) => {
        console.error("Login failed:", error.response.data);
        setErrorMessage(
          "Неверный адрес электронной почты или пароль. Проверьте введенные данные."
        );
      });
  };

  return (
    <div className="mb-12 flex flex-grow flex-col">
      <div className="mx-auto mt-8 max-w-md rounded-lg bg-white p-6 shadow-md xl:w-[422px]">
        <h2 className="mb-4 text-2xl font-semibold">Логин</h2>
        {errorMessage && (
          <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-semibold">
              Електронная почта:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold"
            >
              Пароль:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mb-8 w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
          >
            Войти
          </button>
        </form>

        <Link
          href={"auth/registration"}
          className="rounded-md border border-blue-500 px-4 py-2 text-blue-500 hover:underline"
        >
          Регистрация
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
