import { api } from 'src/utils/api';
import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().required('This field is required'),
  password: yup.string().required('This field is required'),
});

export interface IFormInputs {
  email: string;
  password: string;
}

export const login = async (data: IFormInputs) =>
  await api.post('/signin', data);
