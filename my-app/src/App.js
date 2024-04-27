import React from 'react';
import './App.css';
import './bootstrap.min.css';
import VillaLobosPage from './pages/VillaLobosPage'; // Updated path
import ChorosPage from './pages/ChorosPage'; // Updated path
import Navbar from './components/navbar';
import MainCarousel from './components/carousel';
import Marketing from './components/marketing';
import Featurette from './components/featurette';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <MainCarousel />
      <Marketing />
      <Featurette />
      <Footer />
    </>
  );
}


export default App;
