import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'styles/index.scss';
import { Routes } from 'core/routes';
import { Layout } from 'components/layout/layout.component';

export const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
};
