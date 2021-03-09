/* eslint-disable react/button-has-type */
import { FC, useMemo, AllHTMLAttributes, AriaAttributes } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import 'ui/button/button.styles.scss';
import { Icon, IconName } from 'ui/icon/icon.component';

interface Props {
  label?: string;
  icon?: IconName;
  title?: string;
  onClick?: () => void;
  url?: string | NavLinkProps['to'];
  type?: JSX.IntrinsicElements['button']['type'];
  disabled?: boolean;
  styleType?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  ariaLabel?: AriaAttributes['aria-label'];
}

export const Button: FC<Props> = ({
  url,
  label,
  icon,
  title,
  onClick,
  disabled,
  type = 'button',
  size = 'sm',
  styleType = 'primary',
  ariaLabel,
}) => {
  const content = useMemo(
    () => (
      <>
        {icon && (
          <Icon
            name={icon}
            className="button__icon"
            focusable={false}
            aria-hidden
          />
        )}

        {label && <span className="button__label">{label}</span>}
      </>
    ),
    [icon, label]
  );

  const attributes: AllHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> = {
    className: `button --${styleType} --${size}`,
    onClick,
    title,
    'aria-label': ariaLabel,
  };

  return url ? (
    <NavLink {...attributes} activeClassName="--active" to={url}>
      {content}
    </NavLink>
  ) : (
    <button {...attributes} type={type} disabled={disabled}>
      {content}
    </button>
  );
};
