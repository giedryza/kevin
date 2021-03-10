import { ActionsUnion } from 'state/types';
import { ImagesActions } from 'state/images/images.actions';
import { ImagesActionTypes, ImagesState } from 'state/images/images.types';

const INITIAL_STATE: ImagesState = {
  ids: [],
  byId: {},
  isLoading: false,
};

const reducer = (
  state = INITIAL_STATE,
  action: ActionsUnion<typeof ImagesActions>
): ImagesState => {
  switch (action.type) {
    case ImagesActionTypes.SetLoading:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ImagesActionTypes.updateImages:
      return {
        ...state,
        ids: [...state.ids, ...action.payload.ids],
        byId: { ...state.byId, ...action.payload.byId },
      };
    default:
      return state;
  }
};

export default reducer;
