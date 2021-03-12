import { endpoints } from 'config/endpoints';
import { ImagesActions } from 'state/images/images.actions';
import { isImageWithDetails } from 'state/images/images.selectors';
import { Image, ImageDetails } from 'state/images/images.types';
import { PromiseThunk, Thunk } from 'state/types';
import { api } from 'utils/api';
import { normaliseValues } from 'utils/redux';

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
    console.error(error);
  } finally {
    dispatch(ImagesActions.setLoading(false));
  }
};

export const fetchImageDetails = (id: string): PromiseThunk => async (
  dispatch
) => {
  try {
    dispatch(ImagesActions.setDetailsLoading(true));

    const { data } = await api.get<ImageDetails>(`${endpoints.photos}/${id}`);

    dispatch(ImagesActions.setImageDetails(data));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(ImagesActions.setDetailsLoading(false));
  }
};

export const getImageDetails = (id: string): Thunk => (dispatch, getState) => {
  const state = getState();

  if (isImageWithDetails(state, id)) return;

  dispatch(fetchImageDetails(id));
};
