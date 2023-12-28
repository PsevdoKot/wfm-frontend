import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { DetailMessageType } from '../types/detail-message';
import { store } from '../store';
import { AuthStatus, NameSpace } from '../consts';
import { logoutAction } from '../store/api-actions';
import { StatusCodes } from 'http-status-codes';

const BACKEND_URL = 'http://127.0.0.1:5173';
const REQUEST_TIMEOUT = 5000;


const useToken = (config: AxiosRequestConfig) => {
  const token = getToken();

  if (token && config.headers) {
    config.headers['x-token'] = token;
  }

  return config;
};

// const redirectOnError = (error: AxiosError<DetailMessageType>) => {
//   if (error.response && error.response.status !== StatusCodes.UNAUTHORIZED) {
//     store.dispatch(setErrorCode(error.response.status));
//     store.dispatch(redirectToRoute(AppRoutes.Error.FullPath));
//   }

//   throw error;
// };

const redirectToLoginOnExpiredToken = (error: AxiosError<DetailMessageType>) => {
  if (error.response?.status === StatusCodes.UNAUTHORIZED && getToken() !== ''
    && store.getState()[NameSpace.User].authStatus === AuthStatus.Auth) {
    store.dispatch(logoutAction);
  }

  throw error;
};


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(useToken);

  // api.interceptors.response.use(
  //   (response) => response,
  //   redirectOnError
  // );

  api.interceptors.response.use(
    (response) => response,
    redirectToLoginOnExpiredToken
  );

  return api;
};
