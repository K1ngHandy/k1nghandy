import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import HomeButton from './hooks/HomeButton';
import AboutButton from './hooks/AboutButton';

function App() {

  return (
    <div className='App'>
      <div className='App-header'>
        <Link to='/'><HomeButton /></Link>
        <Link to='/about' ><AboutButton /></Link>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>

  );
}

export default App;
