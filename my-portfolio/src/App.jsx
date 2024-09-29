import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor"
import Home from './pages/Main';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <Header />
      <div className="App">
        <AnimatedCursor
          innerSize={10}
          outerSize={10}
          color='0, 255, 255'
          outerAlpha={0.4}
          innerScale={0.9}
          outerScale={7}
        />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />

        {/* Redirect to Home for any undefined routes */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;