import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from 'ui/container/container.component';
import { Favourites } from 'components/favourites/favourites.component';
import { initFavouritesPage } from 'domain/pages/pages.thunks';
import { State } from 'utils/redux/types';

export const FavouritesPage: FC = () => {
  const dispatch = useDispatch();

  const favourites = useSelector((state: State) => state.images.favourites);

  useEffect(() => {
    dispatch(initFavouritesPage(favourites));
  }, [dispatch, favourites]);

  return (
    <Container>
      <Favourites />
    </Container>
  );
};
