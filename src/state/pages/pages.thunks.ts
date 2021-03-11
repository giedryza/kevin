import { Thunk } from 'state/types';
import { getImages } from 'state/images/images.thunks';
import { Params, router } from 'utils/router';
import { ImagesActions } from 'state/images/images.actions';

export const processParams = (params: Params): Thunk => (dispatch) => {
  const { id } = params;

  if (id && typeof id === 'string') {
    dispatch(ImagesActions.setActiveImage(id));
  }
};

export const initApp = (search: string): Thunk => (dispatch) => {
  if (search) {
    const params = router.parseParams(search);

    dispatch(processParams(params));
  }
};

export const initHomePage = (): Thunk => (dispatch, getState) => {
  const { images } = getState();

  if (!images.ids.length) {
    dispatch(getImages());
  }
};
