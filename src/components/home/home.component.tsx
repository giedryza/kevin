import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { Grid } from 'ui/grid/grid.component';
import { State } from 'state/types';
import { ImageCard } from 'components/image-card/image-card.component';

export const Home: FC = () => {
  const ids = useSelector((state: State) => state.images.ids);

  const images = useMemo(
    () => ids.map((id) => <ImageCard id={id} key={id} />),
    [ids]
  );

  return <Grid>{images}</Grid>;
};
