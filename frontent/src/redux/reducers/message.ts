import { PENDING_MESSAGE, FAILED_MESSAGE, SUCCESS_MESSAGE } from '../actions';
import { toast } from 'react-toastify';

type MessageReducerType = {
  type: string;
  message?: string;
  status?: string;
};

const initialState = {
  message: '',
  status: '',
};

export default (state = initialState, action: MessageReducerType) => {
  switch (action.type) {
    case PENDING_MESSAGE:
      if (action.message)
        toast(action.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          type: 'info',
        });
      return {
        ...state,
        status: action.status,
        message: action.message,
      };

    case FAILED_MESSAGE:
      if (action.message)
        toast(action.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          type: 'error',
        });
      return {
        ...state,
        status: action.status,
        message: action.message,
      };
    case SUCCESS_MESSAGE:
      if (action.message)
        toast(action.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          type: 'success',
        });
      return {
        ...state,
        status: action.status,
        message: action.message,
      };
    default:
      return state;
  }
};
