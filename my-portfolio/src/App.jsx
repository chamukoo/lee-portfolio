import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
