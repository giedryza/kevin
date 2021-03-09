import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from 'config/routes';
import { Home } from 'pages/home/home.page';
import { Favourites } from 'pages/favourites/favourites.page';

export const Routes: FC = () => {
  return (
    <Switch>
      <Route path={routes.favourites}>
        <Favourites />
      </Route>
      <Route path={routes.home}>
        <Home />
      </Route>
    </Switch>
  );
};
