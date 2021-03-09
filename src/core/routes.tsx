import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from 'config/routes';
import { HomePage } from 'pages/home/home.page';
import { FavouritesPage } from 'pages/favourites/favourites.page';

export const Routes: FC = () => {
  return (
    <Switch>
      <Route path={routes.favourites}>
        <FavouritesPage />
      </Route>
      <Route path={routes.home}>
        <HomePage />
      </Route>
    </Switch>
  );
};
