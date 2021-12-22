import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <h2>Website Building in Progress, Stay Tuned.</h2>
      <Routes>
        <Route exact path="/" />
        <Route path="Social" />
      </Routes>
    </div>
  );
}

export default App;
