import { LOGIN_USER, LOGOUT_USER } from '.';

export const login = (user: any) => ({
  type: LOGIN_USER,
  user,
});

export const logout = () => ({
  type: LOGOUT_USER,
});
