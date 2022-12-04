import './App.css';
import React from 'react';
import About from './components/About'
import Experiences from './components/Experiences'
import News from './components/News'
import Blog from './components/Blog'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Experiences/>
      <News/>
      <Blog/>
    </main>
  );
}

export default App;
