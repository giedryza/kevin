import { combineReducers } from 'redux';

import images from 'state/images/images.reducer';
import appError from 'state/app-error/app-error.reducer';

export const rootReducer = combineReducers({
  images,
  appError,
});

export type RootState = ReturnType<typeof rootReducer>;
