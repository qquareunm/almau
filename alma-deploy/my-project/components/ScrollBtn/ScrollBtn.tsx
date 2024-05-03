"use client";

import { Link as Scroll } from "react-scroll";

import { useScrollVisibility } from "../../hooks/useScrollVisibility";
import ScrollBtnImg from "../../public/arrow-top-icon.png";
import Image from "next/image";

export const ScrollBtn = () => {
  const isVisible = useScrollVisibility("conspection");

  return (
    <Scroll
      to="header"
      href="header"
      smooth={true}
      duration={100}
      aria-label="Повернутись догори"
      className={`${
        !isVisible ? "opacity-0" : "opacity-1"
      } fixed bottom-28 right--10 flex h-20 w-20 items-center justify-center rounded transition-opacity duration-300 md:right-[calc((100vw_-_788px)_*_0.5)] xl:right-[calc((100vw_-_1454px)_*_0.5)]`}
    >
      <Image src={ScrollBtnImg} className="h-20 w-20" alt={"scroll to top"} />
    </Scroll>
  );
};
