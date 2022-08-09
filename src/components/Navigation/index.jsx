import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Navigation = ({ onSelectLanguage }) => {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = () => setNavOpen(false);

  const [isOn, setIsOn] = useState(false);
  const [language, setLanguage] = useState('CZ');
  console.log(language);
  const switchOn = () => {
    setIsOn(!isOn);
    isOn ? setLanguage('CZ') : setLanguage('EN');
    console.log(language);
    onSelectLanguage(language);
  };

  return (
    <>
      <div className="lang-switch">
        <label className="toggle">
          <input onChange={switchOn} id="lang-btn" type="checkbox" />
          <span className="labels" data-on="CZ" data-off="EN"></span>
        </label>
      </div>
      <div className="mobile-menu">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="nav-btn"
        ></button>
        <div
          className={navOpen ? 'nav-mobile' : 'nav-mobile nav-mobile--closed '}
        >
          <Link onClick={closeNav} to="/home">
            {language === 'CZ' ? 'Domů' : 'Home'}
          </Link>
          <Link onClick={closeNav} to="/cv">
            {language === 'CZ' ? 'CV' : 'CV'}
          </Link>
          <Link onClick={closeNav} to="/portfolio">
            {language === 'CZ' ? 'Portfolio' : 'Portfolio'}
          </Link>
          <Link onClick={closeNav} to="/contact">
            {language === 'CZ' ? 'Kontakt' : 'Contact'}
          </Link>
          <Link onClick={closeNav} to="/offline">
            {language === 'CZ' ? 'Offline projekty' : 'Offline projects'}
          </Link>
        </div>
      </div>
      <nav>
        <Link to="/home">{language === 'CZ' ? 'Domů' : 'Home'}</Link>
        <Link to="/cv">{language === 'CZ' ? 'CV' : 'CV'}</Link>
        <Link to="/portfolio">
          {language === 'CZ' ? 'Portfolio' : 'Portfolio'}
        </Link>
        <Link to="/vontact">{language === 'CZ' ? 'Kontakt' : 'Contact'}</Link>
        <Link to="/offline">
          {language === 'CZ' ? 'Offline projekty' : 'Offline projects'}
        </Link>
      </nav>
    </>
  );
};
