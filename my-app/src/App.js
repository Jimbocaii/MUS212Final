// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar';
import MainCarousel from './components/carousel'; 
import Marketing from './components/marketing'; 
import Featurette from './components/featurette'; 
import Footer from './components/footer';
import VillaLobosPage from './pages/VillaLobosPage';
import ChorosPage from './pages/ChorosPage';
import CubanPage from './pages/CubanPage';
import RecordingPage from './pages/RecordingPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <MainCarousel />
            <Marketing />
            <Featurette />
            <Footer />
          </div>
        } exact />
        <Route path="/villa-lobos" element={<VillaLobosPage />} />
        <Route path="/brazilian-choro" element={<ChorosPage />} />
        <Route path="/cuban-american" element={<CubanPage />} />
        <Route path="/performances" element={<RecordingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
