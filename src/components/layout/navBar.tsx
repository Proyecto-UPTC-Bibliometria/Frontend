"use client";

import { FiHome } from "react-icons/fi";
import NavLink from "../ui/links/navLink";
import NavButton from "../ui/buttons/navButton";
import { IoLanguage } from "react-icons/io5";
import { LuMoon, LuSun } from "react-icons/lu";
import Image from "next/image";
import logo from "../../../public/logo.webp";
import logoWhite from "../../../public/logo-white.webp";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function NavBar({
  openMenu,
  changeTheme,
}: {
  openMenu: () => void;
  changeTheme: () => void;
}) {
  const [headerStyle, setHeaderStyle] = useState<string>(
    "py-6 md:py-12 bg-transparent"
  );

  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    setTheme(window.localStorage.getItem("theme") ?? "");
  });

  useEffect(() => {
    const handleScroll = () => {
      const style =
        window.scrollY > 10
          ? "py-3 md:py-6 bg-neutral-50/55 dark:bg-neutral-900/50 dark:shadow-white-center/5 backdrop-blur-lg shadow-black-center/20"
          : "py-6 md:py-12 bg-transparent";

      setHeaderStyle(style);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`flex justify-between items-center fixed w-full px-[10%] ${headerStyle} transition-all ease-in-out duration-200 z-50`}
    >
      <div>
        <Link
          className="flex hover:scale-115 hover:rotate-z-3 transition-all ease-bounce duration-300"
          href={"/"}
        >
          <Image
            className="drop-shadow-black-center/40 dark:hidden"
            src={logo}
            alt="UPTC smooth logo"
            height={42}
          />
          <Image
            className="drop-shadow-white-center/20 hidden dark:block"
            src={logoWhite}
            alt="UPTC smooth logo in white"
            height={42}
          />
        </Link>
      </div>

      <nav className="hidden md:flex">
        <ul className="flex gap-4 items-center">
          <li>
            <NavLink href={"/"}>
              <FiHome className="p-0 h-min w-fit" size={20} />
            </NavLink>
          </li>
          <li>
            <NavLink href={"/groups"}>Grupos</NavLink>
          </li>
          <li>
            <NavLink href={"/members"}>Miembros</NavLink>
          </li>
          <li>
            <NavLink href={"/proyects"}>Proyectos</NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex gap-4 items-center">
        <NavButton aria-label="Change Language">
          <IoLanguage size={22} />
        </NavButton>
        <NavButton aria-label="Change color scheme" action={changeTheme}>
          <LuMoon
            className={`${
              theme === "dark" ? "" : "scale-0"
            } transition-all ease-bounce duration-300`}
            size={22}
          />
          <LuSun
            className={`${
              theme === "dark" ? "scale-0" : ""
            } transition-all ease-bounce duration-300 absolute`}
            size={22}
          />
        </NavButton>
        <NavButton
          aria-label="Open hamburger menu"
          className="flex md:hidden"
          action={openMenu}
        >
          <HiMenuAlt3 size={22} />
        </NavButton>
      </div>
    </header>
  );
}
