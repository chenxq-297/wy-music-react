import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import router from './router';

import { Provider } from 'react-redux';
import store from './store';

import { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme';

import 'normalize.css';
import './assets/css/base.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
