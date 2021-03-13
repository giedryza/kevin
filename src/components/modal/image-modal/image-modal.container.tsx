import { FC, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ImageModal as Component } from 'components/modal/image-modal/image-modal.component';
import { router } from 'utils/lib/router';
import {
  addToFavourites,
  removeFromFavourites,
  getImageDetails,
} from 'state/images/images.thunks';
import { State } from 'utils/redux/types';
import {
  isImageInFavourites,
  selectImageDetails,
} from 'state/images/images.selectors';

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
  const isInFavourites = useSelector((state: State) =>
    isImageInFavourites(state, imageId)
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
