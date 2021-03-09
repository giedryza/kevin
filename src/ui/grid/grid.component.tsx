import { FC } from 'react';

import 'ui/grid/grid.styles.scss';

export const Grid: FC = ({ children }) => {
  return <div className="grid">{children}</div>;
};
