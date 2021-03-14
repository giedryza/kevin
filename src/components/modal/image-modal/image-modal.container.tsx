import { FC, useCallback, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ImageModal as Component } from 'components/modal/image-modal/image-modal.component';
import { router } from 'utils/lib/router';
import { State } from 'utils/redux/types';
import {
  addToFavourites,
  removeFromFavourites,
  getImageDetails,
} from 'domain/images/images.thunks';
import {
  makeIsImageInFavouritesSelector,
  selectImageDetails,
} from 'domain/images/images.selectors';

interface Props {
  imageId: string;
}

export const ImageModal: FC<Props> = ({ imageId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImageDetails(imageId));
  }, [dispatch, imageId]);

  const image = useSelector((state: State) =>
    selectImageDetails(state, imageId)
  );
  const selectIsImageInFavourites = useMemo(
    makeIsImageInFavouritesSelector,
    []
  );
  const isInFavourites = useSelector((state: State) =>
    selectIsImageInFavourites(state, imageId)
  );

  const closeModal = useCallback(() => {
    history.push({
      search: router.stringifyParams({ id: '' }),
    });
  }, [history]);

  const like = () => dispatch(addToFavourites(imageId));

  const unlike = () => dispatch(removeFromFavourites(imageId));

  if (!image) return null;

  return image ? (
    <Component
      image={image}
      isLiked={isInFavourites}
      onCloseClick={closeModal}
      onLikeClick={like}
      onUnlikeClick={unlike}
    />
  ) : null;
};
