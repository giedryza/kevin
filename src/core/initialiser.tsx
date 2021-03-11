import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { paramsListener } from 'state/pages/pages.thunks';

export const Initialiser: FC = ({ children }) => {
  const { search } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(paramsListener(search));
  }, [dispatch, search]);

  return <>{children}</>;
};
