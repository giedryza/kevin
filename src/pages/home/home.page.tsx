import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Home } from 'components/home/home.component';
import { Container } from 'ui/container/container.component';
import { getImages } from 'state/images/images.thunks';

export const HomePage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <Container>
      <Home />
    </Container>
  );
};
