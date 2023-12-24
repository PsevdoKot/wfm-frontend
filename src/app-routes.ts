export const AppRoutes = {
  User: {
    FullPath: '/user/:id',
  },
  Management: {
    FullPath: '/managment',
  },
  Planning: {
    FullPath: '/'
  },
  Calculator: {
    FullPath: '/calculator'
  },
  Login: {
    FullPath: '/login',
  },
  SignUp: {
    FullPath: '/signup',
  },
  Error: {
    FullPath: '*'
  },
} as const;
