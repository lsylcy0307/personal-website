import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import GalleryPage from './pages/gallerypage';
import ExperiencePage from './pages/experiencespage';
import ProjectsPage from './pages/projectspage';
import Header from './components/header'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const str = '</> with ♥'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<GalleryPage />} index />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<GalleryPage />} />
          <Route path="/experiences" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <footer style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '1rem', color: '#666' }}>
          <p style={{ fontSize: '14px' }}>{str} by Su Yeon Lee</p>
          <div style={{ fontSize: '20px' }}>
            <a href="https://github.com/lsylcy0307" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#666' }}>
              <i className="fab fa-github fa-1x"></i>
            </a>
            <a href="mailto:slee37@seas.upenn.edu" style={{ margin: '0 10px', color: '#666' }}>
              <i className="fas fa-envelope fa-1x"></i>
            </a>
            <a href="https://linkedin.com/in/lee-yeon-sl" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#666' }}>
              <i className="fab fa-linkedin fa-1x"></i>
            </a>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

