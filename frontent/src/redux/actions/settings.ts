import { CHANGE_THEME, CHANGE_LANGAGE } from '.';

export const changeTheme = (theme: string) => ({
  type: CHANGE_THEME,
  theme,
});

export const changeLangage = (langage: string) => ({
  type: CHANGE_LANGAGE,
  langage,
});
