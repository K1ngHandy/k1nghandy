import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FilterableProductTable from './components/Table';
import { Routes, Route } from 'react-router-dom';
import Todo from './components/Todo';
import Weather from './components/Weather';

function App() {

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
          <Route exact path="/table" element={<FilterableProductTable />} />
        </Routes>
        <Routes>
          <Route exact path="/todo" element={<Todo />} />
        </Routes>
        <Routes>
          <Route exact path="/weather" element={<Weather />} />
        </Routes>
      </article>
      <aside className='Aside Aside-1'>1</aside>
      <aside className='Aside Aside-2'>2</aside>
      <footer className='Footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
