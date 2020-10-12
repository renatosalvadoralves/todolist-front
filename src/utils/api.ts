import axios from 'axios';
import { store } from 'src/redux/store';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = store.getState().user.data?.token;

  if (!token) {
    return config;
  }

  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
