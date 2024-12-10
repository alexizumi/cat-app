import React from 'react';
import './App.css';
import CatFetcher from './components/CatFetcher';
import Header from './components/Header';

function App() {
  return (
    <main>
      <div className="App">
        <Header />
        <CatFetcher />
      </div>
    </main>
  );
}

export default App;
