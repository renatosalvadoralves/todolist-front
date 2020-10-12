import { api } from 'src/utils/api';

export const remove = async (projectId: string, userId: string) =>
  await api.delete(`/project/${projectId}/${userId}`);

export const update = async (
  projectId: string,
  userId: string,
  data: IRequestUpdate,
) => await api.put(`/project/${projectId}/${userId}`, data);

interface IRequestUpdate {
  name: string;
}
