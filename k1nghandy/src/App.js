import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  const logo = 'https://images.pexels.com/photos/48770/business-time-clock-clocks-48770.jpeg?cs=srgb&dl=pexels-pixabay-48770.jpg&fm=jpg://www.pexels.com/photo/london-new-york-tokyo-and-moscow-clocks-48770/';

  return (
    <div>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>

      <Routes>
        <Route exact path="/home" component={Home} />
      </Routes>
      <Routes>
        <Route exact path="/about" component={About} />
      </Routes>

      < h1 > Website Building in Progress</h1 >
      <img class='App-logo' src={logo} className='App-logo' alt='logo' />
      <br />
    </div>

  );
}

export default App;
