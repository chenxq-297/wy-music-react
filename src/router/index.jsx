import React, {lazy} from 'react';
import {Navigate, createBrowserRouter} from 'react-router-dom';

import App from '@/App';

// 一级路由
const Mine = lazy(() => import('@/views/mine'));
const Download = lazy(() => import('@/views/download'));
const Discover = lazy(() => import('@/views/discover'));
const Focus = lazy(() => import('@/views/focus'));

// 二级路由
import Album from '@/views/discover/c-views/album';
import Recommend from '@/views/discover/c-views/recommend';
import Ranking from '@/views/discover/c-views/ranking';
import Songs from '@/views/discover/c-views/songs';
import Djradio from '@/views/discover/c-views/djradio';
import Artist from '@/views/discover/c-views/artist';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to={'/discover'} />,
      },
      {
        path: '/discover',
        element: <Discover />,
        children: [
          {
            path: '/discover',
            element: <Navigate to={'/discover/recommend'} />,
          },
          {
            path: '/discover/recommend',
            element: <Recommend />,
          },
          {
            path: '/discover/ranking',
            element: <Ranking />,
          },
          {
            path: '/discover/songs',
            element: <Songs />,
          },
          {
            path: '/discover/djradio',
            element: <Djradio />,
          },
          {
            path: '/discover/artist',
            element: <Artist />,
          },
          {
            path: '/discover/album',
            element: <Album />,
          },
        ],
      },
      {
        path: '/focus',
        element: <Focus />,
      },
      {
        path: '/download',
        element: <Download />,
      },
      {
        path: '/mine',
        element: <Mine />,
      },
    ],
  },
]);

export default router;
