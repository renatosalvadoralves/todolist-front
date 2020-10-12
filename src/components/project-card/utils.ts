import { IData } from 'src/pages/home/utils';
import { api } from 'src/utils/api';
import * as yup from 'yup';

export interface IFormInputs {
  name: string;
}

export interface Props {
  data: IData;
}

export const schema = yup.object().shape({
  name: yup.string().required('This field is required'),
});

export const addProject = async (userId: string, data: IFormInputs) =>
  await api.post(`/project/${userId}`, data);
