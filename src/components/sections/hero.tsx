"use client";

import { IoMdArrowForward } from "react-icons/io";
import { IoSchool } from "react-icons/io5";
import MainButton from "../ui/buttons/mainButton";
import { MdComputer, MdOutlineArticle } from "react-icons/md";
import HeroCard from "../ui/cards/heroCard";
import formatNumber from "@/utils/numberFormat";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { LuUser, LuUsers } from "react-icons/lu";
import { useStats } from "@/hooks/getStats";

export default function Hero() {
  const { stats, loading, error } = useStats();
  //TODO: Manejar estado de carga de cada una de las cards y en caso que haya un error.

  return (
    <header className="flex flex-col gap-36 justify-center h-dvh items-center pt-35 mx-[10%]">
      <div className="flex flex-col gap-16 max-w-5xl items-center justify-center">
        <div className="flex gap-2 items-center bg-amber-50 px-4 py-2 rounded-full text-sm border border-amber-300 shadow-yellow-center/50 text-amber-400">
          <IoSchool className="font-bold stroke-3" size={20} strokeWidth={4} />
          <span>Aplicación de investigación</span>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-bold text-neutral-900 text-center mx-[8%]">
            La investigación de la UPTC en un solo lugar
            <span className="text-yellow-400"></span>
          </h1>
          <p className="text-xl text-center text-amber-950/60 text-pretty">
            Explora grupos de investigacion, articulos y libros publicados,
            proyectos de investigación y mas.
          </p>
        </div>

        <div className="flex gap-6">
          <MainButton href="" primary>
            Explorar grupos
            <IoMdArrowForward
              className="group-hover:translate-x-1.5 transition-all ease-bounce duration-300 translate-x-1"
              size={20}
            />
          </MainButton>

          <MainButton href={""}>Ver proyectos</MainButton>
        </div>
      </div>

      <div className="flex justify-between w-full gap-8">
        <HeroCard
          title="Grupos Activos"
          Icon={LuUsers}
          amount={formatNumber(stats.groups)}
          text={`${stats.boyacaGroups} en Boyacá`}
          isLoading={stats.groups === 0 || stats.boyacaGroups === 0}
        />
        <HeroCard
          title="Investigadores"
          Icon={LuUser}
          amount={formatNumber(stats.members)}
          text="Activos"
          isLoading={stats.members === 0}
        />
        <HeroCard
          title="Softwares Publicados"
          Icon={MdComputer}
          amount={formatNumber(stats.softwares)}
          text={`+${formatNumber(stats.validSoftwares)} validados`}
          isLoading={stats.softwares === 0 || stats.validSoftwares === 0}
        />
        <HeroCard
          title="Articulos Publicados"
          Icon={MdOutlineArticle}
          amount={formatNumber(stats.articles)}
          text={`+${formatNumber(stats.yearArticles)} este año`}
          isLoading={stats.articles === 0 || stats.yearArticles === 0}
        />
        <HeroCard
          title="Proyectos Realizados"
          Icon={AiOutlineFundProjectionScreen}
          amount={formatNumber(stats.projects)}
          text={`${formatNumber(stats.endedProjects)} finalizados`}
          isLoading={stats.projects === 0 || stats.endedProjects === 0}
        />
      </div>
    </header>
  );
}
