import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { APIRoute } from '../consts';
import { redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
import { AppRoutes } from '../app-routes';
import { clearUserData, setUserData } from './user-process/user-process';
import { UserData } from '../types/user-data';
import { RegistrationData } from '../types/registration-data';
import { AuthData } from '../types/auth-data';
import { Role } from '../types/role';

export const changeUserDataAction = createAsyncThunk<void, { role: Role }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async ({ role }, { extra: api }) => {
    await api.post(APIRoute.User, { role });
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const signupAction = createAsyncThunk<void, RegistrationData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ firstName, lastName, patronymic, role, login, password }, { dispatch, extra: api }) => {
    await api.post<UserData>(APIRoute.Signup, { firstName, lastName, patronymic, role, login, password });

    dispatch(redirectToRoute(AppRoutes.Login.FullPath));
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { login, password });

    saveToken(data.token);
    dispatch(setUserData(data));

    dispatch(redirectToRoute(AppRoutes.Management.FullPath));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);

    dropToken();
    dispatch(clearUserData);

    dispatch(redirectToRoute(AppRoutes.Login.FullPath));
  },
);
