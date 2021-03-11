import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import 'styles/index.scss';
import { store } from 'state/store';
import { Routes } from 'core/routes';
import { Initialiser } from 'core/initialiser';
import { Layout } from 'components/layout/layout.component';
import { Modal } from 'components/modal/modal.component';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Initialiser>
          <Layout>
            <Routes />

            <Modal />
          </Layout>
        </Initialiser>
      </Router>
    </Provider>
  );
};
