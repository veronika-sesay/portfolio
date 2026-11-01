import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Navigation } from './components/Navigation';
import { NotFound } from './components/NotFound';
import { Footer } from './components/Footer';

const App = () => {
  const [langVersion, setLangVersion] = useState('English');

  const handleSelectLanguage = (language) => {
    setLangVersion(language);
  };
  return (
    <>
      <header>
        <Navigation onSelectLanguage={handleSelectLanguage} />
      </header>
      <main>
        <Outlet context={[langVersion]} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="footer" element={<Footer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
