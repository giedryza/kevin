import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ImageCard as Component } from 'components/image-card/image-card.component';
import { State } from 'utils/redux/types';
import { router } from 'utils/lib/router';
import {
  isImageInFavourites,
  selectImageById,
} from 'domain/images/images.selectors';
import { removeFromFavourites } from 'domain/images/images.thunks';

interface Props {
  id: string;
}

export const ImageCard: FC<Props> = ({ id }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const image = useSelector((state: State) => selectImageById(state, id));
  const isInFavourites = useSelector((state: State) =>
    isImageInFavourites(state, id)
  );

  const unlike = () => dispatch(removeFromFavourites(id));

  const navigateToImage = () => {
    history.push({
      search: router.stringifyParams({ id }),
    });
  };

  return image ? (
    <Component
      image={image}
      isLiked={isInFavourites}
      onCardClick={navigateToImage}
      onUnlikeClick={unlike}
    />
  ) : null;
};
