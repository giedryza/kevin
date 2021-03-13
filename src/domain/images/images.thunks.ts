import { endpoints } from 'config/endpoints';
import { AppErrorActions } from 'domain/app-error/app-error.actions';
import { GENERIC_ERROR } from 'domain/app-error/app-error.constants';
import { ImagesActions } from 'domain/images/images.actions';
import { FAVOURITE_IMAGES_STORAGE_KEY } from 'domain/images/images.constants';
import { isImageWithDetails } from 'domain/images/images.selectors';
import { Image, ImageDetails } from 'domain/images/images.types';
import { PromiseThunk, Thunk } from 'utils/redux/types';
import { api } from 'utils/lib/api';
import { normaliseValues } from 'utils/redux/utils';
import { storage } from 'utils/lib/storage';

export const getImages = (): PromiseThunk => async (dispatch) => {
  try {
    dispatch(ImagesActions.setLoading(true));

    const response = await api.get<Image[]>(endpoints.photos, {
      params: {
        per_page: 30,
      },
    });

    const { ids, byId } = normaliseValues(response.data);

    dispatch(ImagesActions.updateImages({ ids, byId }));
  } catch (error) {
    dispatch(AppErrorActions.setError(error.message || GENERIC_ERROR));
  } finally {
    dispatch(ImagesActions.setLoading(false));
  }
};

const fetchImageDetails = (id: string): PromiseThunk => async (dispatch) => {
  try {
    dispatch(ImagesActions.setDetailsLoading(true));

    const { data } = await api.get<ImageDetails>(`${endpoints.photos}/${id}`);

    dispatch(ImagesActions.setImageDetails(data));
  } catch (error) {
    dispatch(AppErrorActions.setError(error.message || GENERIC_ERROR));
  } finally {
    dispatch(ImagesActions.setDetailsLoading(false));
  }
};

export const getImageDetails = (id: string): Thunk => (dispatch, getState) => {
  const state = getState();

  if (isImageWithDetails(state, id)) return;

  dispatch(fetchImageDetails(id));
};

export const addToFavourites = (id: string): Thunk => (dispatch, getState) => {
  dispatch(ImagesActions.addToFavourites(id));

  const { images } = getState();

  storage.setItem(FAVOURITE_IMAGES_STORAGE_KEY, images.favourites);
};

export const removeFromFavourites = (id: string): Thunk => (
  dispatch,
  getState
) => {
  dispatch(ImagesActions.removeFromFavourites(id));

  const { images } = getState();

  storage.setItem(FAVOURITE_IMAGES_STORAGE_KEY, images.favourites);
};

export const setFavourites = (): Thunk => (dispatch) => {
  const favourites =
    storage.getItem<string[]>(FAVOURITE_IMAGES_STORAGE_KEY) ?? [];

  dispatch(ImagesActions.setFavourites(favourites));
};
