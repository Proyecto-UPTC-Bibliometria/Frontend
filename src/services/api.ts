import { api } from "@/config/axios.config.js";
import ApiResponse from "@/interfaces/apiResponse.interface.js";
import Article from "@/interfaces/article.interface.js";
import Book from "@/interfaces/book.interface.js";
import Group from "@/interfaces/group.interface.js";
import Member from "@/interfaces/member.interface.js";
import Project from "@/interfaces/project.interface.js";
import Software from "@/interfaces/software.interface.js";

export async function getGroups(
  query?: string,
  page?: number
): Promise<ApiResponse<Group>> {
  const response = await api.get(`/groups?page=${page || 1}&${query}`);

  return response.data;
}

export async function getGroupsLight(
  query?: string,
  page?: number
): Promise<ApiResponse<Group>> {
  const response = await api.get(`/light/groups?page=${page || 1}&${query}`);

  return response.data;
}

export async function getMembers(
  query?: string,
  page?: number
): Promise<ApiResponse<Member>> {
  const response = await api.get(`/members?page=${page || 1}&${query}`);

  return response.data;
}

export async function getArticles(
  query?: string,
  page?: number
): Promise<ApiResponse<Article>> {
  const response = await api.get(`/articles?page=${page || 1}&${query}`);

  return response.data;
}

export async function getBooks(
  query?: string,
  page?: number
): Promise<ApiResponse<Book>> {
  const response = await api.get(`/books?page=${page || 1}&${query}`);

  return response.data;
}

export async function getSoftwares(
  query?: string,
  page?: number
): Promise<ApiResponse<Software>> {
  const response = await api.get(`/softwares?page=${page || 1}&${query}`);

  return response.data;
}

export async function getProjects(
  query?: string,
  page?: number
): Promise<ApiResponse<Project>> {
  const response = await api.get(`/projects?page=${page || 1}&${query}`);

  return response.data;
}
