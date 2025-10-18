import { api } from "@/config/axios.config";
import ApiResponse from "@/interfaces/apiResponse.interface";
import Group from "@/interfaces/Group.interface";

export async function getGroups(page?: number): Promise<ApiResponse<Group>> {
  const response = await api.get(`/groups?page=${page || 1}`);

  return response.data;
}
