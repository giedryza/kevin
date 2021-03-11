import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Home } from 'components/home/home.component';
import { Container } from 'ui/container/container.component';
import { initHomePage } from 'state/pages/pages.thunks';

export const HomePage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initHomePage());
  }, [dispatch]);

  return (
    <Container>
      <Home />
    </Container>
  );
};
