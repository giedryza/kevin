import { createAction, NormalisedValues } from 'utils/redux';
import { Image, ImagesActionTypes } from 'state/images/images.types';

export const ImagesActions = {
  setLoading: (payload: boolean) =>
    createAction(ImagesActionTypes.SetLoading, payload),
  updateImages: (payload: NormalisedValues<Image>) =>
    createAction(ImagesActionTypes.updateImages, payload),
  setActiveImage: (payload: string | null) =>
    createAction(ImagesActionTypes.setActiveImage, payload),
};
