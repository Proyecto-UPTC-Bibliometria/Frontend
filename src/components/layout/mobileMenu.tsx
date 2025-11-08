"use client";

import { IoClose } from "react-icons/io5";
import MobileLink from "../ui/links/moibileLink";

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const style = isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <section
      className={`flex md:hidden fixed w-full h-dvh bg-white/70 backdrop-blur-lg z-50 flex-col p-8 justify-between ${style} transition-all ease-in-out duration-300`}
    >
      <button
        className="hover:bg-neutral-200 w-fit rounded-xl transition-all ease-in-out duration-200"
        onClick={() => onClose()}
      >
        <IoClose size={42} />
      </button>

      <nav>
        <ul className="w-fill justify-center items-center flex flex-col gap-6">
          <li className="w-fit">
            <MobileLink href={"/"}>Inicio</MobileLink>
          </li>
          <li className="w-fit">
            <MobileLink href={"/groups"}>Grupos</MobileLink>
          </li>
          <li className="w-fit">
            <MobileLink href={"/members"}>Miembros</MobileLink>
          </li>
          <li className="w-fit">
            <MobileLink href={"/proyects"}>Proyectos</MobileLink>
          </li>
        </ul>
      </nav>

      <div className="flex w-full justify-center gap-1 text-neutral-400 items-center">
        <span className="w-fit">Más información</span>
      </div>
    </section>
  );
}
