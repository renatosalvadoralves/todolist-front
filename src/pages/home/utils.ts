import { api } from 'src/utils/api';

export const getProjects = async (userId: string) =>
  await api.get(`/projects/${userId}`);

export const getTasks = async (userId: string) =>
  await api.get(`/tasks/${userId}`);

export interface IData {
  name: string;
  tasks?: Array<ITask>;
  user: string;
  _id: string;
}

interface ITask {
  createdAt: string;
  description: string;
  isCompleted: boolean;
  project: string;
  updatedAt: string;
  user: string;
  _id: string;
}
