import { FC } from 'react';

import 'ui/container/container.styles.scss';

export const Container: FC = ({ children }) => (
  <div className="container">{children}</div>
);
