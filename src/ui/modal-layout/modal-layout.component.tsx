import { FC } from 'react';
import FocusTrap from 'focus-trap-react';

import 'ui/modal-layout/modal-layout.styles.scss';
import { useBodyScrollLock } from 'utils/use-body-scroll-lock';

interface Props {
  titleId: string;
  onClose: () => void;
}

export const ModalLayout: FC<Props> = ({ titleId, onClose, children }) => {
  useBodyScrollLock();

  return (
    <FocusTrap>
      <div className="modal" aria-modal aria-labelledby={titleId} role="dialog">
        <div className="modal__backdrop" onClick={onClose} aria-hidden />

        <div className="modal__content">{children}</div>
      </div>
    </FocusTrap>
  );
};
