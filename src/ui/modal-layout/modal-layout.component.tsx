import { FC } from 'react';

import 'ui/modal-layout/modal-layout.styles.scss';

interface Props {
  titleId: string;
  onClose: () => void;
}

export const ModalLayout: FC<Props> = ({ titleId, onClose, children }) => {
  return (
    <div className="modal" aria-modal aria-labelledby={titleId} role="dialog">
      <div className="modal__backdrop" onClick={onClose} aria-hidden />

      <div className="modal__content">{children}</div>
    </div>
  );
};
