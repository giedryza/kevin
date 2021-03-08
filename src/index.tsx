import { StrictMode } from 'react';
import { render } from 'react-dom';

import { App } from 'app';

const root = document.getElementById('root') as HTMLDivElement;

const app: JSX.Element = (
  <StrictMode>
    <App />
  </StrictMode>
);

render(app, root);
