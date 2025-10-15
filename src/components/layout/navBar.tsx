import Link from "next/link";
import { FiHome } from "react-icons/fi";

export default function NavBar() {
  return (
    <header className="flex justify-between items-center py-12 fixed w-full px-[10%]">
      <div></div>

      <nav>
        <ul className="flex gap-6 items-center">
          <li>
            <Link
              className="text-neutral-500 hover:text-neutral-800 transition-all ease-in-out duration-200 nav-link relative px-4 py-2 before:bg-transparent before:scale-50 before:origin-center hover:before:bg-neutral-200/60 hover:before:scale-105 before:rounded-xl flex items-center gap-1"
              href={"/"}
            >
              <FiHome className="p-0 h-min w-fit" />
              {/* hola mundo a todos */}
            </Link>
          </li>
          <li>
            <Link
              className="text-neutral-500 hover:text-neutral-800 transition-all ease-in-out duration-200 nav-link relative px-4 py-2 before:bg-transparent before:scale-50 before:origin-center hover:before:bg-neutral-200/60 hover:before:scale-105 before:rounded-xl"
              href={"/"}
            >
              Grupos
            </Link>
          </li>
        </ul>
      </nav>

      <div></div>
    </header>
  );
}
