import { combineReducers } from 'redux';

import images from 'state/images/images.reducer';

export const rootReducer = combineReducers({
  images,
});

export type RootState = ReturnType<typeof rootReducer>;
