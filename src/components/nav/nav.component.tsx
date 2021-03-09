import { FC } from 'react';

import 'components/nav/nav.styles.scss';
import { links } from 'components/nav/nav.constants';
import { Button } from 'ui/button/button.component';
import { Icon, IconName } from 'ui/icon/icon.component';

export const Nav: FC = () => {
  return (
    <nav className="nav">
      <Icon name={IconName.Logo} className="nav__logo" />

      <ul className="nav__links">
        {links.map((link) => (
          <li key={link.label}>
            <Button
              ariaLabel={link.label}
              title={link.label}
              url={link.url}
              icon={link.icon}
              styleType="secondary"
              size="md"
            />
          </li>
        ))}
      </ul>

      <span />
    </nav>
  );
};
