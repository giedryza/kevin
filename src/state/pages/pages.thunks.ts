import { Thunk } from 'state/types';
import { getImages } from 'state/images/images.thunks';
import { router } from 'utils/router';
import { ImagesActions } from 'state/images/images.actions';

export const paramsListener = (search: string): Thunk => (
  dispatch,
  getState
) => {
  const { id } = router.parseParams(search);
  const { images } = getState();

  if (images.activeImage && !id) {
    dispatch(ImagesActions.setActiveImage(null));
  } else if (id && typeof id === 'string') {
    dispatch(ImagesActions.setActiveImage(id));
  }
};

export const initHomePage = (): Thunk => (dispatch, getState) => {
  const { images } = getState();

  if (!images.ids.length) {
    dispatch(getImages());
  }
};
