import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
