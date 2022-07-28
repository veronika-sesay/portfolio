import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './components/Home';
import { CV } from './components/CV';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Offline } from './components/Offline';

const App = () => {
  const [navopen, setNavopen] = useState(false);
  const closeNav = () => setNavopen(false);

  return (
    <>
      <header>
        <button
          onClick={() => setNavopen(!navopen)}
          className="nav-btn"
        ></button>
        <div className={navopen ? 'nav-mobile' : 'nav-mobile nav--closed '}>
          <Link onClick={closeNav} to="/Home">
            Domů
          </Link>
          <Link onClick={closeNav} to="/CV">
            CV
          </Link>
          <Link onClick={closeNav} to="/Portfolio">
            Portfolio
          </Link>
          <Link onClick={closeNav} to="/Contact">
            Kontakt
          </Link>
          <Link onClick={closeNav} to="/Offline">
            Offline projekty
          </Link>
        </div>
        <nav>
          <Link to="/Home">Domů</Link>
          <Link to="/CV">CV</Link>
          <Link to="/Portfolio">Portfolio</Link>
          <Link to="/Contact">Kontakt</Link>
          <Link to="/Offline">Offline projekty</Link>
        </nav>
      </header>
      <Outlet />
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
