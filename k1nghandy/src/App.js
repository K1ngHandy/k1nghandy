import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/Table';
import Clock from './components/Clock';
import { Routes, Route } from 'react-router-dom';

function App() {
  const img = 'https://picsum.photos/200/300';

  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <article className='Main'>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/clock" element={<Clock date={new Date()} />} />
        </Routes>
        <img className='Main-img' src={img} alt='random generated'></img>
      </article>
      <aside className='Aside Aside-1'></aside>
      <aside className='Aside Aside-2'></aside>
      <footer className='Footer'>
        <Footer />
      </footer>
      <br />

    </div>
  );
}

export default App;
