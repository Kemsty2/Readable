import { CHANGE_THEME, CHANGE_LANGAGE } from '../actions';

const initialState = {
  theme: 'light',
  langage: 'en',
};

type ThemeReducerType = {
  type: string;
  theme?: string;
  langage?: string;
};

export default (state = initialState, action: ThemeReducerType) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case CHANGE_LANGAGE:
      return {
        ...state,
        langage: action.langage,
      };
    default:
      return state;
  }
};
