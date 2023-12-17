import { AppRoutes } from './app-routes';
import WFMSVG from './components/svg/wfm-svg';
import { NavLink } from './types/nav-link';

export const AuthStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
} as const;

export const NavLinksData: ReadonlyArray<NavLink> = [
  {
    Svg: <WFMSVG />,
    Title: 'WFM',
    Href: AppRoutes.Main.FullPath,
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

export const ErrorCodesDesc: {[key: number]: string} = {
  400: 'Bad Request',
  401: 'Unauthorized',
  404: 'Not Found',
  408: 'Request Timeout',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
} as const;
