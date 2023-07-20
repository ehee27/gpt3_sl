import React from 'react';
import './App.css';

// import containers - used the index.js to aggregate and now it's easily readable
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT,
} from './containers';
// import individual components - used the index.js to aggregate and now it's easily readable
import { CTA, Brand, Navbar } from './components';
const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
