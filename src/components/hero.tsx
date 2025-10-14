import { IoMdArrowForward } from "react-icons/io";
import { IoSchool } from "react-icons/io5";

export default function Hero() {
  return (
    <section className="flex flex-col gap-10 justify-center h-dvh items-center">
      <div className="flex flex-col gap-16 max-w-5xl items-center justify-center">
        <div className="flex gap-2 items-center bg-amber-50 px-4 py-2 rounded-full text-sm border border-amber-300 shadow-yellow-center/50 text-amber-400">
          <IoSchool className="font-bold stroke-3" size={20} strokeWidth={4} />
          <span>Aplicación de investigación</span>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-bold text-neutral-950 text-center mx-[8%]">
            La investigación de la UPTC en un solo lugar
            <span className="text-yellow-400"></span>
          </h1>
          <p className="text-xl text-center text-amber-950/60 text-pretty">
            Explora grupos de investigacion, articulos y libros publicados,
            proyectos de investigación y mas.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            className="group bg-amber-300 pl-5 pr-4 py-3.5 font-normal rounded-2xl hover:scale-105 button hover:bg-[#f8cc2e] text-neutral-950 shadow-yellow-center/70 flex gap-2 items-center"
            href=""
          >
            Explorar grupos
            <IoMdArrowForward
              className="group-hover:translate-x-0.5 transition-all ease-bounce duration-300"
              size={20}
            />
          </a>
          <a
            className="bg-neutral-200 px-5 py-3.5 font-normal rounded-2xl hover:scale-105 button hover:bg-neutral-300 shadow-black-center/5"
            href=""
          >
            Ver proyectos
          </a>
        </div>
      </div>

      <div></div>
    </section>
  );
}
