import { FAILED_MESSAGE, PENDING_MESSAGE, SUCCESS_MESSAGE } from '.';

export const pending = (message?: string) => ({
  type: PENDING_MESSAGE,
  message,
  status: 'pending',
});

export const failed = (message?: string) => ({
  type: FAILED_MESSAGE,
  message,
  status: 'failed',
});

export const success = (message?: string) => ({
  type: SUCCESS_MESSAGE,
  message,
  status: 'success',
});
