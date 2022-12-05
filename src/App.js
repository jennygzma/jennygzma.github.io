import './App.css';
import React from 'react';
import About from './components/About'
import Experiences from './components/Experiences'
import News from './components/News'
import Blog from './components/Blog'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font-serif bg-cream">
      <div className='mx-80'> 
        <Navbar/>
        <About/>
        <Experiences/>
        <News/>
        <Blog/>
      </div>
    </main>
  );
}

export default App;
