import { State } from 'state/types';
import { Image } from 'state/images/images.types';

export const selectImageById = (state: State, id: string): Image | null =>
  state.images.byId[id] ?? null;
