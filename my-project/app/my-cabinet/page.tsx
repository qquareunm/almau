"use client";
import { useState, useEffect } from "react";
import Test from "../../components/test/page";
import Link from "next/link";
const CabinetPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    setIsLoggedIn(!!email && !!password);
  }, [isLoggedIn]);

  return (
    <main className="flex-grow">
      {isLoggedIn ? (
        <div>
          <Test />
        </div>
      ) : (
        <div className="container my-11">
          <Link
            href={"/auth"}
            className="rounded-md border border-blue-500 px-4 py-2 text-blue-500 hover:underline "
          >
            Ввойти
          </Link>
        </div>
      )}
    </main>
  );
};

export default CabinetPage;
