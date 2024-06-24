import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import GalleryPage from './pages/gallerypage';
import ExperiencePage from './pages/experiencespage';
import ProjectsPage from './pages/projectspage';
import Header from './components/header'
import './App.css';


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
      </BrowserRouter>
    </div>
  );
}

export default App;

