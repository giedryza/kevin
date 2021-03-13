import { ActionsUnion } from 'utils/redux/types';
import { ImagesActions } from 'domain/images/images.actions';
import { ImagesActionTypes, ImagesState } from 'domain/images/images.types';

const INITIAL_STATE: ImagesState = {
  ids: [],
  byId: {},
  favourites: [],
  activeImage: null,
  details: {
    ids: [],
    byId: {},
  },
  isLoading: false,
  isDetailsLoading: false,
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
    case ImagesActionTypes.SetDetailsLoading:
      return {
        ...state,
        isDetailsLoading: action.payload,
      };
    case ImagesActionTypes.updateImages:
      return {
        ...state,
        ids: [...state.ids, ...action.payload.ids],
        byId: { ...state.byId, ...action.payload.byId },
      };
    case ImagesActionTypes.setActiveImage:
      return {
        ...state,
        activeImage: action.payload,
      };
    case ImagesActionTypes.setImageDetails:
      return {
        ...state,
        details: {
          ids: [...state.details.ids, action.payload.id],
          byId: {
            ...state.details.byId,
            [action.payload.id]: action.payload,
          },
        },
      };
    case ImagesActionTypes.addToFavourites:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case ImagesActionTypes.removeFromFavourites:
      return {
        ...state,
        favourites: state.favourites.filter((id) => id !== action.payload),
      };
    case ImagesActionTypes.setFavourites:
      return {
        ...state,
        favourites: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
