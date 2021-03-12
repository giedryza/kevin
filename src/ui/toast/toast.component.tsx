import { FC } from 'react';
import FocusTrap from 'focus-trap-react';

import 'ui/toast/toast.styles.scss';
import { Icon, IconName } from 'ui/icon/icon.component';
import { Button } from 'ui/button/button.component';

interface Props {
  message: string | null;
  onClick: () => void;
}

export const Toast: FC<Props> = ({ message, onClick }) => {
  if (!message) return null;

  return (
    <FocusTrap>
      <div className="toast">
        <Icon name={IconName.Alert} className="toast__icon" />
        <p className="toast__message">{message}</p>
        <Button
          ariaLabel="Close"
          styleType="secondary"
          icon={IconName.Close}
          onClick={onClick}
        />
      </div>
    </FocusTrap>
  );
};
