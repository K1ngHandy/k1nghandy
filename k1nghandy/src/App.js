import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <h2>Website Building in Progress, Stay Tuned.</h2>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="Social" />
      </Routes>
    </div>
  );
}

export default App;
