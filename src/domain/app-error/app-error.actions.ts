import { createAction } from 'utils/redux/utils';
import { AppErrorActionTypes } from 'domain/app-error/app-error.types';

export const AppErrorActions = {
  setError: (payload: string | null) =>
    createAction(AppErrorActionTypes.SetError, payload),
};
