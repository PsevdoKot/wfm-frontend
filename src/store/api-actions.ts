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
import { ServerUserData } from '../types/server-user-data';
import { staffMock } from '../mocks/staff';
import findStaffMemeberById from '../shared/find-staff-member-by-id';

export const fetchStaffDataAction = createAsyncThunk<UserData[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'staff/fetchStaffData',
  // async (_, { extra: api }) => {
  () => {
    // const { data } = await api.get<UserData[]>(APIRoute.Staff);
    const data = staffMock; // мок на время тестирования
    return data;
  },
);

export const fetchStaffMemberDataAction = createAsyncThunk<UserData, { staffMemberId: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'staff/fetchStaffMemberData',
  // async (_, { extra: api }) => {
  ({ staffMemberId }) => {
    // const { data } = await api.get<UserData>(`${APIRoute.Staff}/${id}`);
    const data = findStaffMemeberById(staffMock, staffMemberId) as UserData; // мок на время тестирования
    return data;
  },
);

export const changeUserDataAction = createAsyncThunk<void, { role: Role }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'staff/changeUserData',
  async ({ role }, { extra: api }) => {
    await api.post(APIRoute.User, { role });
  },
);

export const deleteUserDataAction = createAsyncThunk<void, { id: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'staff/deleteUser',
  async ({ id }, { dispatch, extra: api }) => {
    dispatch(redirectToRoute(AppRoutes.Staff.FullPath)); // перенести ниже, когда будет взаимодействие со сервером
    await api.delete(`${APIRoute.User}/${id}`);
  },
);

export const checkAuthAction = createAsyncThunk<ServerUserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_, { extra: api }) => {
    const { data } = await api.get<ServerUserData>(APIRoute.Login);
    return data;
  },
);

export const signupAction = createAsyncThunk<void, RegistrationData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/signup',
  async ({ firstName, lastName, patronymic, role, login, password }, { dispatch, extra: api }) => {
    await api.post<UserData>(APIRoute.Signup, { firstName, lastName, patronymic, role, login, password });

    dispatch(redirectToRoute(AppRoutes.Login.FullPath));
  },
);

export const loginAction = createAsyncThunk<ServerUserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<ServerUserData>(APIRoute.Login, { login, password });

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
