import { createAction } from 'utils/redux/utils';
import { AppErrorActionTypes } from 'state/app-error/app-error.types';

export const AppErrorActions = {
  setError: (payload: string | null) =>
    createAction(AppErrorActionTypes.SetError, payload),
};
