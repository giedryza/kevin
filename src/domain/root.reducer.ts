import { combineReducers } from 'redux';

import images from 'domain/images/images.reducer';
import appError from 'domain/app-error/app-error.reducer';

export const rootReducer = combineReducers({
  images,
  appError,
});

export type RootState = ReturnType<typeof rootReducer>;
