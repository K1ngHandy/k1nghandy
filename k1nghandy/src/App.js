import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  const pic = 'https://images.pexels.com/photos/48770/business-time-clock-clocks-48770.jpeg?cs=srgb&dl=pexels-pixabay-48770.jpg&fm=jpg://www.pexels.com/photo/london-new-york-tokyo-and-moscow-clocks-48770/';

  return (
    <div className="App">
      <Router>
        <div>
          <nav className='nav'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" component={About} />
            {/* <About /> */}
            <Route exact path="/" component={Home} />
            {/* <Home /> */}
          </Routes>
        </div>
      </Router>

      {/* <Home /> */}
      <h1>Website Building in Progress</h1>
      <img class='App-logo' src={pic} alt='london-new-york-tokyo-and-moscow-clocks' />
      <br />
      <br />
    </div>
  );
}

export default App;
