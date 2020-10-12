import { api } from 'src/utils/api';
import * as yup from 'yup';

export interface IFormInputs {
  description: string;
}

export const schema = yup.object().shape({
  description: yup.string().required('This field is required'),
});

export interface Props {
  data: Array<object>;
}

export const addTask = async (
  userId: string,
  projectId: string,
  data: IFormInputs,
) => await api.post(`/task/${projectId}/${userId}`, data);
