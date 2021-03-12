import { createAction, NormalisedValues } from 'utils/redux';
import {
  Image,
  ImageDetails,
  ImagesActionTypes,
} from 'state/images/images.types';

export const ImagesActions = {
  setLoading: (payload: boolean) =>
    createAction(ImagesActionTypes.SetLoading, payload),
  setDetailsLoading: (payload: boolean) =>
    createAction(ImagesActionTypes.SetDetailsLoading, payload),
  updateImages: (payload: NormalisedValues<Image>) =>
    createAction(ImagesActionTypes.updateImages, payload),
  setActiveImage: (payload: string | null) =>
    createAction(ImagesActionTypes.setActiveImage, payload),
  setImageDetails: (payload: ImageDetails) =>
    createAction(ImagesActionTypes.setImageDetails, payload),
};
