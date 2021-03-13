import { PromiseThunk, Thunk } from 'utils/redux/types';
import { getImages } from 'state/images/images.thunks';
import { router } from 'utils/lib/router';
import { ImagesActions } from 'state/images/images.actions';
import { api } from 'utils/lib/api';
import { endpoints } from 'config/endpoints';
import { Image } from 'state/images/images.types';
import { normaliseValues } from 'utils/redux/utils';
import { AppErrorActions } from 'state/app-error/app-error.actions';
import { GENERIC_ERROR } from 'state/app-error/app-error.constants';

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

const fetchFavourites = (
  favourites: string[]
): PromiseThunk<Image[]> => async () => {
  const promises = favourites.map((id) =>
    api.get<Image>(`${endpoints.photos}/${id}`)
  );

  const response = await Promise.all(promises);

  const images = response.map(({ data }) => data);

  return images;
};

export const initFavouritesPage = (favourites: string[]): Thunk => async (
  dispatch
) => {
  if (!favourites.length) return;

  try {
    dispatch(ImagesActions.setLoading(true));

    const images = await dispatch(fetchFavourites(favourites));

    const { byId } = normaliseValues(images);

    dispatch(ImagesActions.updateImages({ ids: [], byId }));
  } catch (error) {
    dispatch(AppErrorActions.setError(error.message || GENERIC_ERROR));
  } finally {
    dispatch(ImagesActions.setLoading(true));
  }
};
