import { NameSpace } from '../../consts';
import { AuthStatus } from '../../types/auth-status';
import { State } from '../../types/state';
import { UserProcessState } from './user-process';

export const getUserData = (state: State): UserProcessState => state[NameSpace.User];
export const getUserFirstName = (state: State): string | undefined => state[NameSpace.User].firstName;
export const getUserLastName = (state: State): string | undefined => state[NameSpace.User].lastName;
export const getUserPatronymic = (state: State): string | undefined => state[NameSpace.User].patronymic;
export const getUserAvatar = (state: State): string | undefined => state[NameSpace.User].avatarUrl;
export const getUserRole = (state: State): string | undefined => state[NameSpace.User].role;
export const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;
