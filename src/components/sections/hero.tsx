"use client";

import { IoMdArrowForward } from "react-icons/io";
import { IoSchool } from "react-icons/io5";
import MainButton from "../buttons/mainButton";
import {
  getArticles,
  getGroupsLight,
  getMembers,
  getProjects,
  getSoftwares,
} from "@/services/api";
import { MdComputer, MdOutlineArticle } from "react-icons/md";
import HeroCard from "../cards/heroCard";
import { useEffect, useState } from "react";
import formatNumber from "@/utils/numberFormat";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { LuUser, LuUsers } from "react-icons/lu";

export default function Hero() {
  const [totalGroups, setTotalGroups] = useState<number>(0);
  const [totalGroupsDepartment, setTotalGroupsDepartment] = useState<number>(0);
  const [totalMembers, setTotalMembers] = useState<number>(0);
  const [totalSoftwares, setTotalSoftwares] = useState<number>(0);
  const [totalValidatedSoftwares, setTotalValidatedSoftwares] =
    useState<number>(0);
  const [totalArticles, setTotalArticles] = useState<number>(0);
  const [totalArticles2025, setTotalArticles2025] = useState<number>(0);
  const [totalProjects, setTotalProjects] = useState<number>(0);
  const [totalProjectsEnded, setTotalProjectsEnded] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const results = await Promise.all([
        getGroupsLight(),
        getGroupsLight("department=boyacá"),
        getMembers("state=activo"),
        getSoftwares(),
        getSoftwares("validated=true"),
        getArticles(),
        getArticles("from=2025"),
        getProjects(),
        getProjects("status=finalizado"),
      ]);

      const [
        groups,
        groupsDepartment,
        members,
        softwares,
        validatedSoftwares,
        articles,
        articles2025,
        projects,
        projectsEnded,
      ] = results;

      setTotalGroups(groups.meta.totalDocs);
      setTotalGroupsDepartment(groupsDepartment.meta.totalDocs);
      setTotalMembers(members.meta.totalDocs);
      setTotalSoftwares(softwares.meta.totalDocs);
      setTotalValidatedSoftwares(validatedSoftwares.meta.totalDocs);
      setTotalArticles(articles.meta.totalDocs);
      setTotalArticles2025(articles2025.meta.totalDocs);
      setTotalProjects(projects.meta.totalDocs);
      setTotalProjectsEnded(projectsEnded.meta.totalDocs);
    };

    fetchData();
  });

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
          amount={formatNumber(totalGroups)}
          text={`${totalGroupsDepartment} en Boyacá`}
        />
        <HeroCard
          title="Investigadores"
          Icon={LuUser}
          amount={formatNumber(totalMembers)}
          text="Activos"
        />
        <HeroCard
          title="Softwares Publicados"
          Icon={MdComputer}
          amount={formatNumber(totalSoftwares)}
          text={`+${formatNumber(totalValidatedSoftwares)} validados`}
        />
        <HeroCard
          title="Articulos Publicados"
          Icon={MdOutlineArticle}
          amount={formatNumber(totalArticles)}
          text={`+${formatNumber(totalArticles2025)} este año`}
        />
        <HeroCard
          title="Proyectos Realizados"
          Icon={AiOutlineFundProjectionScreen}
          amount={formatNumber(totalProjects)}
          text={`${formatNumber(totalProjectsEnded)} finalizados`}
        />
      </div>
    </header>
  );
}
