import { Role } from './role';

export type UserData = {
  firstName: string;
  lastName: string;
  patronymic: string;
  role: Role;
  avatarUrl: string;
  token: string;
};
