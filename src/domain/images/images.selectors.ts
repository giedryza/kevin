import { State } from 'utils/redux/types';
import { Image, ImageDetails } from 'domain/images/images.types';

export const selectImageById = (state: State, id: string): Image | null =>
  state.images.byId[id] ?? null;

export const selectImageDetails = (
  state: State,
  id: string
): ImageDetails | null => state.images.details.byId[id] ?? null;

export const isImageWithDetails = (state: State, id: string): boolean =>
  !!selectImageDetails(state, id);

export const isImageInFavourites = (state: State, id: string) =>
  state.images.favourites.includes(id);
