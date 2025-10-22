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
import MiniHeroCard from "../ui/cards/miniHeroCard";

export default function Hero() {
  const { stats, loading } = useStats();

  return (
    <header className="flex flex-col lg:gap-36 md:gap-18 gap-12 justify-center h-full items-center pt-35 mx-[10%] min-h-screen">
      <div className="flex flex-col md:gap-16 gap-8 max-w-5xl items-center justify-center">
        <div className="flex gap-2 items-center bg-amber-50 lg:px-4 lg:py-2 px-3 py-1 rounded-full lg:text-sm text-xs border border-amber-300 shadow-yellow-center/50 text-amber-400">
          <IoSchool
            className="font-bold stroke-3 max-lg:w-4"
            size={20}
            strokeWidth={4}
          />
          <span>Aplicación de investigación</span>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="lg:text-6xl text-4xl font-bold text-neutral-900 text-center mx-[8%] hidden sm:block">
            La investigación de la UPTC en un solo lugar
          </h1>
          <h1
            className="lg:text-6xl text-4xl font-bold text-neutral-900 text-center mx-[8%] sm:hidden"
            aria-hidden="true"
          >
            Investigación de la UPTC
          </h1>
          <p className="lg:text-xl text-lg text-center text-amber-950/60 text-pretty">
            Explora grupos de investigacion, articulos y libros publicados,
            proyectos de investigación y mas.
          </p>
        </div>

        <div className="flex gap-6 sm:flex-row flex-col">
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

      <div className="xl:flex justify-between w-full gap-4 hidden">
        <HeroCard
          title="Grupos Activos"
          Icon={LuUsers}
          amount={formatNumber(stats.groups)}
          text={`${stats.boyacaGroups} en Boyacá`}
          isLoading={loading}
        />
        <HeroCard
          title="Investigadores"
          Icon={LuUser}
          amount={formatNumber(stats.members)}
          text="Activos"
          isLoading={loading}
        />
        <HeroCard
          title="Softwares Públicos"
          Icon={MdComputer}
          amount={formatNumber(stats.softwares)}
          text={`+${formatNumber(stats.validSoftwares)} validados`}
          isLoading={loading}
        />
        <HeroCard
          title="Articulos Publicados"
          Icon={MdOutlineArticle}
          amount={formatNumber(stats.articles)}
          text={`+${formatNumber(stats.yearArticles)} este año`}
          isLoading={loading}
        />
        <HeroCard
          title="Proyectos Realizados"
          Icon={AiOutlineFundProjectionScreen}
          amount={formatNumber(stats.projects)}
          text={`${formatNumber(stats.endedProjects)} finalizados`}
          isLoading={loading}
        />
      </div>

      <div className="w-full gap-4 xl:hidden flex flex-wrap justify-center items-center">
        <MiniHeroCard
          title="Grupos Activos"
          amount={formatNumber(stats.groups)}
          isLoading={loading}
        />
        <MiniHeroCard
          title="Investigadores"
          amount={formatNumber(stats.members)}
          isLoading={loading}
        />
        <MiniHeroCard
          title="Softwares Públicos"
          amount={formatNumber(stats.softwares)}
          isLoading={loading}
        />
        <MiniHeroCard
          title="Articulos Publicados"
          amount={formatNumber(stats.articles)}
          isLoading={loading}
        />
        <MiniHeroCard
          title="Proyectos Realizados"
          amount={formatNumber(stats.projects)}
          isLoading={loading}
        />
      </div>
    </header>
  );
}
