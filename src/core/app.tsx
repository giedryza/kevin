import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import 'styles/index.scss';
import { store } from 'state/store';
import { Routes } from 'core/routes';
import { Layout } from 'components/layout/layout.component';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </Provider>
  );
};
