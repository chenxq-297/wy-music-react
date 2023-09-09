import React from 'react';
import ReactDOM from 'react-dom/client';

import {RouterProvider} from 'react-router-dom';
import router from './router';

import {Provider} from 'react-redux';
import store from './store';

import 'normalize.css';
import './assets/css/index.less';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
