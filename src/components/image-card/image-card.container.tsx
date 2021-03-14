import { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ImageCard as Component } from 'components/image-card/image-card.component';
import { State } from 'utils/redux/types';
import { router } from 'utils/lib/router';
import {
  selectImageById,
  makeIsImageInFavouritesSelector,
} from 'domain/images/images.selectors';
import { removeFromFavourites } from 'domain/images/images.thunks';

interface Props {
  id: string;
}

export const ImageCard: FC<Props> = ({ id }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const image = useSelector((state: State) => selectImageById(state, id));
  const selectIsImageInFavourites = useMemo(
    makeIsImageInFavouritesSelector,
    []
  );
  const isInFavourites = useSelector((state: State) =>
    selectIsImageInFavourites(state, id)
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
