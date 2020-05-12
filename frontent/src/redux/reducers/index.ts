import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';
import settingsReducer from './settings';
import messageReducer from './message';
import userReducer from './user';

const rootReducer = combineReducers({
  form: reducerForm,
  user: userReducer,
  message: messageReducer,
  settings: settingsReducer,
});

export default rootReducer;
