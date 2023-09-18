import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import WyHeader from './components/wy-header';
import WyFooter from './components/wy-footer';

function App() {
  return (
    <>
      <WyHeader />

      <Suspense fallback="...load">
        <Outlet />
      </Suspense>

      <WyFooter />
    </>
  );
}

export default App;
