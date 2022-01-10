import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const img = 'https://picsum.photos/200/300';

  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <article className='Main'>
        <h1>Home</h1>
        <img className='App-img' src={img} alt='random' />
        <h4>Subtitle text</h4>
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
