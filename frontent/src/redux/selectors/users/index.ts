import { createSelector } from 'reselect';
export const userSelector = (state: any) => state.user;

export const selectStatusOfUser = createSelector(userSelector, (user) => user.isAuthenticated);
