import ApiResponse from "@/interfaces/apiResponse.interface.js";
import Article from "@/interfaces/article.interface.js";
import Group from "@/interfaces/group.interface.js";
import Member from "@/interfaces/member.interface.js";
import Project from "@/interfaces/project.interface.js";
import Software from "@/interfaces/software.interface.js";
import {
  getArticles,
  getGroupsLight,
  getMembers,
  getProjects,
  getSoftwares,
} from "@/services/api";
import { useEffect, useState } from "react";

interface StatConfig {
  key: keyof typeof initialStats;
  save: () => Promise<
    ApiResponse<Group | Member | Software | Article | Project>
  >;
}

const initialStats = {
  groups: 0,
  boyacaGroups: 0,
  members: 0,
  softwares: 0,
  validSoftwares: 0,
  articles: 0,
  yearArticles: 0,
  projects: 0,
  endedProjects: 0,
} as const;

export const useStats = () => {
  const [stats, setStats] = useState(initialStats);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const CONFIG: StatConfig[] = [
    { key: "groups", save: () => getGroupsLight() },
    { key: "boyacaGroups", save: () => getGroupsLight("department=boyacá") },
    { key: "members", save: () => getMembers("state=activo") },
    { key: "softwares", save: () => getSoftwares() },
    { key: "validSoftwares", save: () => getSoftwares("validated=true") },
    { key: "articles", save: () => getArticles() },
    { key: "yearArticles", save: () => getArticles("from=2025") },
    { key: "projects", save: () => getProjects() },
    { key: "endedProjects", save: () => getProjects("status=finalizado") },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const results = await Promise.all(CONFIG.map(({ save }) => save()));

        setStats((prev) => ({
          ...prev,
          ...Object.fromEntries(
            CONFIG.map(({ key }, i) => [key, results[i].meta.totalDocs])
          ),
        }));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error al cargar datos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { stats, loading, error };
};
