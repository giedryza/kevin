import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { State } from 'utils/redux/types';
import { Grid } from 'ui/grid/grid.component';
import { ImageCard } from 'components/image-card/image-card.container';

export const Favourites: FC = () => {
  const favourites = useSelector((state: State) => state.images.favourites);

  const images = useMemo(
    () => favourites.map((id) => <ImageCard id={id} key={id} />),
    [favourites]
  );

  return <Grid>{images}</Grid>;
};
