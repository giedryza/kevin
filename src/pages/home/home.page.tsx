import { FC } from 'react';

import { Home } from 'components/home/home.component';
import { Container } from 'ui/container/container.component';

export const HomePage: FC = () => {
  return (
    <Container>
      <Home />
    </Container>
  );
};
