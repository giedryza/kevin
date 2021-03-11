import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { initApp } from 'state/pages/pages.thunks';

export const Initialiser: FC = ({ children }) => {
  const { search } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initApp(search));
  }, [dispatch, search]);

  return <>{children}</>;
};
