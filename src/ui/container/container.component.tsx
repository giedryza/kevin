import { FC } from 'react';

import 'ui/container/container.styles.scss';

export const Container: FC = ({ children }) => {
  return <div className="container">{children}</div>;
};
