import React from 'react';
import Discover from './views/discover';

function App() {
  return (
    <div className="App">
      <span>123123123</span>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <main>
        <Discover name="297" age={18} />
      </main>
    </div>
  );
}

export default App;
