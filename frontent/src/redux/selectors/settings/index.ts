import { createSelector } from 'reselect';
export const settingsSelector = (state: any) => state.settings;

export const selectTheme = createSelector(settingsSelector, (settings) => settings.theme);
export const selectLangage = createSelector(settingsSelector, (settings) => settings.langage);
