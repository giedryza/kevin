import { FC } from 'react';

import 'ui/grid/grid.styles.scss';

export const Grid: FC = ({ children }) => (
  <div className="grid">{children}</div>
);
