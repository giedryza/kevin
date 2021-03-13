import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import 'styles/index.scss';
import { store } from 'domain/store';
import { Routes } from 'core/routes';
import { Initialiser } from 'core/initialiser';
import { Layout } from 'components/layout/layout.component';
import { Modal } from 'components/modal/modal.component';
import { ErrorToast } from 'components/error-toast/error-toast.component';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Initialiser>
          <Layout>
            <Routes />

            <Modal />
            <ErrorToast />
          </Layout>
        </Initialiser>
      </Router>
    </Provider>
  );
};
