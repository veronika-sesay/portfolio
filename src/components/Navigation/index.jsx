import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Navigation = ({ onSelectLanguage }) => {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = () => setNavOpen(false);

  const [isOn, setIsOn] = useState(false);
  const [language, setLanguage] = useState('EN');
  const switchOn = () => {
    setIsOn(!isOn);
    isOn ? setLanguage('EN') : setLanguage('CZ');
    onSelectLanguage(language);
  };

  return (
    <>
      <div className="lang-switch">
        <label className="toggle">
          <input onChange={switchOn} id="lang-btn" type="checkbox" />
          <span
            className="labels"
            data-on={language}
            data-off={language}
          ></span>
        </label>
      </div>
      <button onClick={() => setNavOpen(!navOpen)} className="nav-btn"></button>
      <div
        className={navOpen ? 'nav-mobile' : 'nav-mobile nav-mobile--closed '}
      >
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
    </>
  );
};
