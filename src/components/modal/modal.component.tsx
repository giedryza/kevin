import { FC } from 'react';
import { useSelector } from 'react-redux';

import { Portal } from 'ui/portal/portal.component';
import { State } from 'state/types';
import { MODAL_ROOT } from 'components/modal/modal.constants';
import { ImageModal } from 'components/modal/image-modal/image-modal.container';

export const Modal: FC = () => {
  const activeImage = useSelector((state: State) => state.images.activeImage);

  return activeImage ? (
    <Portal id={MODAL_ROOT}>
      <ImageModal imageId={activeImage} />
    </Portal>
  ) : null;
};
