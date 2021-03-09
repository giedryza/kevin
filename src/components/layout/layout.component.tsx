import { FC } from 'react';

import 'components/layout/layout.styles.scss';
import { Nav } from 'components/nav/nav.component';

export const Layout: FC = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      <main>{children}</main>
    </div>
  );
};
