import { AppRoutes } from './app-routes';
import CalculatorSVG from './components/svg/calculator-svg';
import PlanningSVG from './components/svg/planning-svg';
import UserSVG from './components/svg/user-svg';
import ManagementSVG from './components/svg/management-svg';
import { NavLink } from './types/nav-link';
import { Role } from './types/role';

export const AuthStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
} as const;

export const Roles = {
  Employee: 'Employee',
  Manager: 'Manager',
  Leader: 'Leader',
} as const;

export const RolesRU: { [key: string]: Role } = {
  'Сотрудник': 'Employee',
  'Менеджер': 'Manager',
  'Руководитель': 'Leader',
} as const;

export const NavLinksData: ReadonlyArray<NavLink> = [
  {
    Icon: <UserSVG />,
    Title: 'Личный кабинет',
    Href: AppRoutes.User.FullPath,
  },
  {
    Icon: <ManagementSVG />,
    Title: 'Система управления персоналом',
    Href: AppRoutes.Management.FullPath,
  },
  {
    Icon: <PlanningSVG />,
    Title: 'Планирование',
    Href: AppRoutes.Planning.FullPath,
  },
  {
    Icon: <CalculatorSVG />,
    Title: 'Калькулятор метрик',
    Href: AppRoutes.Calculator.FullPath,
  },
];

export const APIRoute = {
  Signup: 'signup',
  Login: 'login',
  Logout: 'logout',
} as const;

export const NameSpace = {
  Error: 'Error',
  User: 'User',
} as const;

export const ErrorCodesDesc: { [key: number]: string } = {
  400: 'Bad Request',
  401: 'Unauthorized',
  404: 'Not Found',
  408: 'Request Timeout',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
} as const;
