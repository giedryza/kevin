import { routes } from 'config/routes';
import { IconName } from 'ui/icon/icon.component';

export const links = [
  {
    label: 'Home',
    url: routes.home,
    icon: IconName.Picture,
  },
  {
    label: 'Favourites',
    url: routes.favourites,
    icon: IconName.Heart,
  },
];
