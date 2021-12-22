import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Weather from './components/Weather';

function App() {
  const pic = 'https://images.pexels.com/photos/48770/business-time-clock-clocks-48770.jpeg?cs=srgb&dl=pexels-pixabay-48770.jpg&fm=jpg://www.pexels.com/photo/london-new-york-tokyo-and-moscow-clocks-48770/';

  return (
    <div className="App">
      {/* <Home /> */}
      <img src={pic} alt='london-new-york-tokyo-and-moscow-clocks' />
      <h2>Website Building in Progress, Stay Tuned.</h2>
      <button>Enter</button>
      <br />
      
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="Weather" component={Weather} />
      </Routes>
    </div>
  );
}

export default App;
