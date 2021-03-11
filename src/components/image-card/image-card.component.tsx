import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import 'components/image-card/image-card.styles.scss';
import { State } from 'state/types';
import { selectImageById } from 'state/images/images.selectors';
import { Button } from 'ui/button/button.component';
import { IconName } from 'ui/icon/icon.component';
import { router } from 'utils/router';

interface Props {
  id: string;
}

export const ImageCard: FC<Props> = ({ id }) => {
  const history = useHistory();

  const image = useSelector((state: State) => selectImageById(state, id));

  if (!image) return null;

  const navigateToImage = () => {
    history.push({
      search: router.stringifyParams({ id: image.id }),
    });
  };

  return (
    <div className="image-card">
      <button
        className="image-card__button"
        type="button"
        onClick={navigateToImage}
      >
        <img
          className="image-card__image"
          src={image.urls.small}
          alt={image.alt_description}
        />
      </button>
      <div className="image-card__actions">
        <Button icon={IconName.Heart} ariaLabel="Remove like" />
      </div>
    </div>
  );
};
