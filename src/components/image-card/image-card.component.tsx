import { FC } from 'react';

import 'components/image-card/image-card.styles.scss';
import { Button } from 'ui/button/button.component';
import { IconName } from 'ui/icon/icon.component';
import { Image } from 'state/images/images.types';

interface Props {
  image: Image;
  isLiked: boolean;
  onCardClick: () => void;
  onUnlikeClick: () => void;
}

export const ImageCard: FC<Props> = ({
  image,
  isLiked,
  onCardClick,
  onUnlikeClick,
}) => {
  return (
    <div className="image-card">
      <button
        className="image-card__button"
        type="button"
        onClick={onCardClick}
      >
        <img
          className="image-card__image"
          src={image.urls.small}
          alt={image.alt_description}
        />
      </button>
      <div className="image-card__actions">
        {isLiked && (
          <Button
            icon={IconName.Heart}
            ariaLabel="Unlike"
            onClick={onUnlikeClick}
          />
        )}
      </div>
    </div>
  );
};
