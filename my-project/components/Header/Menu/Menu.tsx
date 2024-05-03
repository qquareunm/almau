'use client';
import Menus from "/public/menu.png";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from "/public/logo.png";
import Image from "next/image";

import { useRouter } from "next/navigation";
export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        setMenuClosed()
    };
    const setMenuOpened = () => {
        setIsOpen(true);
    };

    const setMenuClosed = () => {
        setIsOpen(false);
    };

    const toggleScrollLock = () => {
        if (isOpen) {
            document.body.classList.add('lock-scroll');
        } else {
            document.body.classList.remove('lock-scroll');
        }
    };
    useEffect(() => {
        toggleScrollLock();
    }, [isOpen]);

    return (
        <>

            <button className="ml-auto xl:hidden" onClick={() => setMenuOpened()}>

                <Image
                    src={Menus}
                    alt="Menu"
                    width={50}
                    height={50}
                    className="flex-shrink-0 pb-3 pt-3 pl-3"
                />
            </button>
            {isOpen ? (
                <div className="fixed inset-0 z-10 overflow-scroll bg-white">
                    <div id="headermob" className="mb-32">

                        <div className="bg-dark py-3 ">

                            <div className="flex flex-row items-center justify-between">

                                <button className="flex-shrink-0 pb-3 pt-3 pl-3 pr-3 text-2xl text-primary" onClick={() => setMenuClosed()}>
                                    X
                                </button>
                            </div>

                        </div>

                        <div className="px-10 md:container xl:containermt-3 bg-white text-2xl text-primary justify-center ml-6">
                            <nav>
                                <Link href="/" onClick={() => { setMenuClosed(); }}>
                                    <Image
                                        src={Logo}
                                        alt="Logo Alma"
                                        width={200}
                                        height={80}
                                        className="flex-shrink-0 object-contain pb-7 pt-5 mb-5"
                                    />
                                </Link>
                                <ul className="mb-12 flex flex-col gap-1 text-menuItemsMob " >
                                    <li className="mb-4">
                                        <Link href="/programms" className="hover:underline" onClick={() => setMenuClosed()}>
                                            Поступающим
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="/almau-history"
                                            className="duration-300 hover::underline"
                                            onClick={() => setMenuClosed()}
                                        >
                                            Все об AlmaU
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="/o-preduniversarii"
                                            className="duration-300 hover::underline"
                                            onClick={() => setMenuClosed()}
                                        >
                                            О предуниверсарии
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href={"#footer"}
                                            className="duration-300 hover::underline"
                                            onClick={() => setMenuClosed()}
                                        >
                                            Контакты
                                        </Link>
                                    </li>
                                    <li>
                                        {isLoggedIn ? (
                                            <Link
                                                href={"/my-cabinet"}
                                                className="duration-300 hover:underline "
                                                onClick={() => setMenuClosed()}
                                            >
                                                Мой кабинет
                                            </Link>
                                        ) : (
                                            <Link href={"/auth"} onClick={() => setMenuClosed()} className="duration-300 hover:underline mt-2">
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

                                    <li className="grid gap-3 pt-4 pb-4">

                                        <button className="w-[212px] rounded-xl border text-zinc-400
 border-white bg-primary pb-1 pt-1 text-t16 font-extralight !italic">
                                            Язык: Русский
                                        </button>
                                        <input
                                            type="name"
                                            placeholder="Поиск"
                                            className="w-[212px] rounded-xl border border-white bg-primary pb-1 pl-8 pt-1 text-t16 font-extralight !italic"
                                        />

                                    </li>
                                </ul>

                            </nav>
                        </div>

                    </div>

                </div>
            ) : null}
        </>
    );
};
