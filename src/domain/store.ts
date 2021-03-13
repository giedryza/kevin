import { createStore, applyMiddleware, Middleware, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from 'domain/root.reducer';

class Store {
  private middlewares: Middleware[] = [thunk];

  private get enhancer(): StoreEnhancer {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line global-require
      const { composeWithDevTools } = require('redux-devtools-extension');

      return composeWithDevTools(applyMiddleware(...this.middlewares));
    }

    return applyMiddleware(...this.middlewares);
  }

  init = () => createStore(rootReducer, this.enhancer);
}

export const store = new Store().init();
