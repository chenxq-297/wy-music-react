import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import WyHeader from './components/wy-header';
import WyFooter from './components/wy-footer';
import Player from './views/player';

function App() {
  return (
    <>
      <WyHeader />

      <Suspense fallback="...load">
        <Outlet />
      </Suspense>

      <WyFooter />
      <Player />
    </>
  );
}

export default App;
