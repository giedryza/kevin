import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import 'components/modal/image-modal/image-modal.styles.scss';
import { ModalLayout } from 'ui/modal-layout/modal-layout.component';
import { router } from 'utils/router';
import { TITLE_ID } from 'components/modal/image-modal/image-modal.constants';

interface Props {
  imageId: string;
}

export const ImageModal: FC<Props> = ({ imageId }) => {
  const history = useHistory();

  const closeModal = () => {
    history.push({
      search: router.stringifyParams({ id: '' }),
    });
  };

  return (
    <ModalLayout titleId={TITLE_ID} onClose={closeModal}>
      <h1>{imageId}</h1>
      <button type="button" onClick={closeModal}>
        CLOSE
      </button>
    </ModalLayout>
  );
};
