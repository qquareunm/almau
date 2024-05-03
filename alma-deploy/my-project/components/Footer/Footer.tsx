"use client";

import { useState } from "react";
import { sendUserToTelegramBot } from "../../app/utils/api";
import Logo_w from "/public/logo_w.png";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import PhoneInput from "react-phone-number-input/input";
import cn from "classnames";

interface FormContactFields {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const isBrowser = typeof window !== "undefined";
const SESSION_KEY = "form";

export const getEmailRegex = () => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
};

export const getFullNameRegex = () => {
  return /^[A-Za-z\u0400-\u04FF\s]+$/;
};

const Footer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const kazakhstanPhoneValidator = (value: string) => {
    return (
      (value &&
        value.startsWith("+7") &&
        value.replace(/\D/g, "").length === 11) ||
      "Введите правильный телефонный номер для Казахстана (+7 XXX XXX XX XX)"
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<FormContactFields>({
    shouldFocusError: false,
    defaultValues: {},
  });
  useFormPersist(SESSION_KEY, {
    watch,
    setValue,
    storage: isBrowser ? sessionStorage : undefined,
    exclude: ["language", "consent"],
  });

  const handleSave = async (data: FormContactFields) => {
    setIsLoading(true);

    try {
      const newData = {
        ...data,
        createdAt: new Date().toLocaleString(),
      };

      await Promise.all([sendUserToTelegramBot(newData)]);

      setIsSent(true);
      reset();
      sessionStorage.removeItem(SESSION_KEY);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  };

  return (
    <footer id="footer" className="flex flex-col bg-primary text-white">
      <div className="footer-top mb-2 bg-primary pb-32 pt-20">
        <div className="container">
          <h2 className="mb-6 text-t24 xl:text-t36">Получить консультацию</h2>
          <form
            onSubmit={handleSubmit(handleSave)}
            className="block flex-row justify-between xl:flex"
          >
            <div className="block flex-row gap-9 xl:flex">
              <div className="mb-2 block">
                <input
                  {...register("fullName", {
                    required: true,
                    pattern: {
                      value: getFullNameRegex(),
                      message: "Введите имя",
                    },
                  })}
                  type="name"
                  placeholder="Ваше имя"
                  className={`mb-4 w-[100%] rounded-3xl border border-border bg-primary_input/60 pb-3 pl-3 pr-3 pt-3 text-t15 font-extralight md:pb-3 md:pl-6 md:pt-5 md:text-t24 xl:mb-0 xl:w-[390px] xl:pb-3 xl:pl-6 xl:pt-5 xl:text-t24 ${errors.fullName ? "border-red-500" : ""}`}
                />

                <div>
                  {errors.fullName && errors.fullName.type === "pattern" && (
                    <span className="text-red-500">
                      {errors.fullName.message}
                    </span>
                  )}
                  {errors.fullName && errors.fullName.type === "required" && (
                    <span className="text-red-500">Поле имя обязательно</span>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <PhoneInput
                  {...register("phone", {
                    required: true,
                    validate: kazakhstanPhoneValidator,
                  })}
                  placeholder="Телефон (+7 XXX XXX XX XX)"
                  className={`mb-4 w-[100%] rounded-3xl border border-border bg-primary_input/60 pb-3 pl-3 pr-3 pt-3 text-t15 font-extralight md:pb-3 md:pl-6 md:pt-8 md:text-t24 xl:mb-0 xl:w-[390px] xl:pb-3 xl:pl-6 xl:pt-5  xl:text-t24 ${errors.phone ? "border-red-500" : ""}`}
                  onChange={(value: string) => setValue("phone", value)}
                />

                <div>
                  {errors.phone && errors.phone.type === "required" && (
                    <span className="text-red-500">
                      Поле телефона обязательно
                    </span>
                  )}
                  {errors.phone && (
                    <span className="text-red-500">{errors.phone.message}</span>
                  )}
                </div>
              </div>
            </div>
            <button
              className={cn(
                "bg-re text-t14 w-[100%] rounded-3xl bg-accent px-10 py-2 duration-300 hover:scale-105 xl:h-[65.19px] xl:w-[258px] xl:px-16 xl:text-t24",
                isSent ? "bg-success" : "bg-accent"
              )}
            >
              {isSent ? "Спасибо!" : "Отправить"}
            </button>
          </form>
        </div>
      </div>
      <div className="container bg-primary">
        <div className="px-16 py-10">
          <Link href="/">
            <Image
              src={Logo_w}
              alt="Logo Alma"
              width={224}
              height={90}
              className="flex-shrink-0 object-contain"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
