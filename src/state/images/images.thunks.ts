import { endpoints } from 'config/endpoints';
import { ImagesActions } from 'state/images/images.actions';
import { Image } from 'state/images/images.types';
import { PromiseThunk } from 'state/types';
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
