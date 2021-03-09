import { FC } from 'react';

import { Container } from 'ui/container/container.component';
import { Favourites } from 'components/favourites/favourites.component';

export const FavouritesPage: FC = () => {
  return (
    <Container>
      <Favourites />
    </Container>
  );
};
