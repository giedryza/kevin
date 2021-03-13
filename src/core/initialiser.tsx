import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { paramsListener } from 'domain/pages/pages.thunks';
import { setFavourites } from 'domain/images/images.thunks';

export const Initialiser: FC = ({ children }) => {
  const { search } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(paramsListener(search));
    dispatch(setFavourites());
  }, [dispatch, search]);

  return <>{children}</>;
};
