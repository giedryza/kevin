import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import 'ui/toast/toast.styles.scss';
import { Portal } from 'ui/portal/portal.component';
import { Toast } from 'ui/toast/toast.component';
import { State } from 'utils/redux/types';
import { AppErrorActions } from 'domain/app-error/app-error.actions';

export const ErrorToast: FC = () => {
  const dispatch = useDispatch();

  const clearError = () => {
    dispatch(AppErrorActions.setError(null));
  };

  const message = useSelector((state: State) => state.appError.message);

  return message ? (
    <Portal id="toast">
      <Toast message={message} onClick={clearError} />
    </Portal>
  ) : null;
};
