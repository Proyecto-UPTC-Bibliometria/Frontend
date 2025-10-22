"use client";

import { FiHome } from "react-icons/fi";
import NavLink from "../ui/links/navLink";
import NavButton from "../ui/buttons/navButton";
import { IoLanguage } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";
import Image from "next/image";
import logo from "../../../public/logo.webp";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="flex justify-between items-center md:py-12 py-6 fixed w-full px-[10%]">
      <div>
        <Link
          className="flex hover:scale-115 hover:rotate-z-3 transition-all ease-bounce duration-300"
          href={"/"}
        >
          <Image
            className="drop-shadow-black-center/70"
            src={logo}
            alt="UPTC smooth logo"
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
        <NavButton aria-label="Cambiar idioma">
          <IoLanguage size={22} />
        </NavButton>
        <NavButton aria-label="Cambiar modo de color">
          <LuMoon size={22} />
        </NavButton>
      </div>
    </header>
  );
}
