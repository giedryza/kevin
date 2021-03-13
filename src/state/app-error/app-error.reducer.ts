import { ActionsUnion } from 'utils/redux/types';
import { AppErrorActions } from 'state/app-error/app-error.actions';
import {
  AppErrorActionTypes,
  AppErrorState,
} from 'state/app-error/app-error.types';

const INITIAL_STATE: AppErrorState = {
  message: null,
};

const reducer = (
  state = INITIAL_STATE,
  action: ActionsUnion<typeof AppErrorActions>
): AppErrorState => {
  switch (action.type) {
    case AppErrorActionTypes.SetError:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
