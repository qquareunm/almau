"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegistrationPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (!formData.email || !formData.password) {
      setErrorMessage("Необходимо ввести электронную почту и пароль.");
      return;
    }

    if (!formData.email.includes("@")) {
      setErrorMessage("Неверный формат электронной почты.");
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage("Пароль должен содержать как минимум 6 символов.");
      return;
    }


    setErrorMessage("");

    axios
      .post(`${process.env.NEXT_PUBLIC_HOST}/auth/create`, formData)
      .then((response) => {
        console.log("Registration successful:", response.data);

        router.push("/my-cabinet");
        setTimeout(() => {
          window.location.reload();
        }, 500);

        localStorage.setItem("email", response.data.user.email);
        localStorage.setItem("password", response.data.user.password);
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };
  return (
    <div className="flex flex-grow flex-col  mb-12">
      <div className="xl:w-[440px] mx-auto mt-8 max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Регистрация</h2>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-semibold">
              Електронная почта:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-semibold">
              Имя:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="surname"
              className="mb-2 block text-sm font-semibold"
            >
              Фамилия:
            </label>
            <input
              type="text"
              name="surname"
              placeholder="Фамилия"
              value={formData.surname}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full mb-8 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
          >
            Зарегистрироваться
          </button>
        </form>
        <Link href={"/auth"} className="text-blue-500 hover:underline border border-blue-500 rounded-md px-4 py-2 ">Войти в существующий аккаунт</Link>
      </div>
    </div>
  );
};

export default RegistrationPage;
