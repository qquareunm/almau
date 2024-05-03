"use client";
import Link from "next/link";
import Logo from "/public/logo.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import Menus from "/public/menu.png";
import { useRouter } from "next/navigation";
import { Menu } from "./Menu/Menu";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    setIsLoggedIn(!!email && !!password);
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    router.push("/auth")
    setIsLoggedIn(false);
  };

  return (
    <header
      id="header"
      className="xl:border-dark/50 bg-primary xl:border-b xl:border-solid xl:bg-white"
    >
      <Menu />
      <div className="invisible h-0 w-0 overflow-hidden bg-primary text-t16 text-white xl:visible xl:h-auto xl:w-auto xl:pb-3 xl:pt-4">
        <ul className="container flex flex-row items-center justify-between gap-14 text-center">
          <li>
            <Image
              src={Menus}
              alt="Menu"
              width={50}
              height={50}
              className="flex-shrink-0 pb-3 pl-3 pt-3"
            />
          </li>
          <li>
            <Link href="/programms" className="hover:underline">
              Поступающим
            </Link>
          </li>
          <li>
            <Link
              href="/almau-history"
              className="duration-300 hover:underline"
            >
              Все об AlmaU
            </Link>
          </li>
          <li>
            <Link
              href="/o-preduniversarii"
              className="duration-300 hover:underline"
            >
              О предуниверсарии
            </Link>
          </li>
          <li>
            <Link href={"#footer"} className="duration-300 hover:underline">
              Контакты
            </Link>
          </li>
          <li>
            {isLoggedIn ? (
              <Link
                href={"/my-cabinet"}
                className="duration-300 hover:underline"
              >
                Мой кабинет
              </Link>
            ) : (
              <Link href={"/auth"} className="duration-300 hover:underline">
                Вход в мой кабинет
              </Link>
            )}
          </li>
          {isLoggedIn && (
            <li>
              <button
                onClick={handleLogout}
                className="duration-300 hover:underline"
              >
                Выйти
              </button>
            </li>
          )}
          <li className="grid gap-3 pb-4 pt-4">
            <button
              className="w-[212px] rounded-xl border border-white
 bg-primary pb-1 pt-1 text-t16 font-extralight !italic text-zinc-400"
            >
              Язык: Русский
            </button>
            <input
              type="name"
              placeholder="Поиск"
              className="w-[212px] rounded-xl border border-white bg-primary pb-1 pl-8 pt-1 text-t16 font-extralight !italic"
            />
          </li>
        </ul>
      </div>
      <div className="container bg-white px-6 text-black">
        <div className="hidden items-center justify-between py-10 xl:block">
          <nav >
            <Link className="inline-block" href="/">
              <Image
                src={Logo}
                alt="Logo Alma"
                width={200}
                height={80}
                className="flex-shrink-0 object-contain pb-7 pt-5"
              />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
