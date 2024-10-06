import { useMutation } from '@tanstack/react-query';
import axiosInstance from './axios';

export const login = async (credentials) => {
  const response = await axiosInstance.post('/auth/login', credentials);
  return response.data;
};

export const getUser = async () => {
  const response = await axiosInstance.get('/auth/user');
  return response.data;
};


// const mutation = useMutation(login, {
//     onSuccess: (data) => {
//       dispatch(loginSuccess({ user: data.user, token: data.token }));
//       window.location.href = '/dashboard'; // redirect to dashboard after login
//     },
//     onError: (error) => {
//       console.error('Login failed', error);
//     },
//   });