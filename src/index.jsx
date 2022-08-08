import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Home } from './components/Home';
import { CV } from './components/CV';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Offline } from './components/Offline';
import { Navigation } from './components/Navigation';

const App = () => {
  const [langVersion, setLangVersion] = useState('CZ');
  const handleSelectLanguage = (language) => {
    setLangVersion(language);
    langVersion === 'CZ'
      ? (content = content.Czech)
      : (content = content.English);
  };
  return (
    <>
      <header>
        <Navigation onSelectLanguage={handleSelectLanguage} />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="cv" element={<CV />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="offline" element={<Offline />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '3rem' }}>
              <p>Tady není vůbec nic!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);
