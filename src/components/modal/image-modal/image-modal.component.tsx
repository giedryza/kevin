import { FC, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import 'components/modal/image-modal/image-modal.styles.scss';
import { ModalLayout } from 'ui/modal-layout/modal-layout.component';
import { router } from 'utils/router';
import {
  META,
  TITLE_ID,
} from 'components/modal/image-modal/image-modal.constants';
import { getImageDetails } from 'state/images/images.thunks';
import { State } from 'state/types';
import { selectImageDetails } from 'state/images/images.selectors';
import { Button } from 'ui/button/button.component';
import { Icon, IconName } from 'ui/icon/icon.component';

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

  const closeModal = useCallback(() => {
    history.push({
      search: router.stringifyParams({ id: '' }),
    });
  }, [history]);

  if (!image) return null;

  return (
    <ModalLayout titleId={TITLE_ID} onClose={closeModal}>
      <article className="image-modal">
        <div className="image-modal__image-container">
          <img
            className="image-modal__image"
            src={image.urls.regular}
            alt={image.alt_description}
          />
        </div>

        <div className="image-modal__info-container">
          <div className="image-modal__actions">
            <Button
              label="Like"
              icon={IconName.Heart}
              styleType="secondary"
              onClick={() => console.log('like')}
            />
            <Button
              ariaLabel="Close"
              icon={IconName.Close}
              styleType="secondary"
              onClick={closeModal}
            />
          </div>

          <div className="image-modal__header">
            <h1 className="image-modal__title" id={TITLE_ID}>
              {image.description || 'Unknown'}
            </h1>
            <div className="image-modal__subtitle-container">
              {image.user.profile_image.small ? (
                <img
                  className="image-modal__avatar"
                  src={image.user.profile_image.small}
                  alt={image.user.name}
                />
              ) : (
                <Icon
                  name={IconName.Avatar}
                  className="image-modal__avatar --placeholder"
                />
              )}

              <h2 className="image-modal__subtitle">{image.user.name}</h2>
            </div>
          </div>

          <div className="image-modal__meta">
            {META.map((item) => (
              <div className="image-modal__meta-group" key={item.key}>
                <h3 className="image-modal__meta-title">{item.title}</h3>
                <span className="image-modal__meta-info">
                  {image.exif[item.key] ?? '-'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </ModalLayout>
  );
};
