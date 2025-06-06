import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Navigation = ({ onSelectLanguage }) => {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = () => setNavOpen(false);

  const [isOn, setIsOn] = useState(false);
  const [language, setLanguage] = useState('English');
  console.log(language, 'language nav aktualni');
  const switchOn = () => {
    setIsOn(!isOn);
    isOn ? setLanguage('English') : setLanguage('Czech');
  };

  useEffect(() => {
    onSelectLanguage(language), [language];
  });

  return (
    <>
      <div className="navigation container">
        <div className="lang-switch">
          <label className="toggle">
            <input onChange={switchOn} id="lang-btn" type="checkbox" />
            <span className="labels" data-on="EN" data-off="CZ"></span>
          </label>
        </div>
        <div className="mobile-menu">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="nav-btn"
          ></button>
          <div
            className={
              navOpen ? 'nav-mobile' : 'nav-mobile nav-mobile--closed '
            }
          >
            <Link onClick={closeNav} to="/home">
              {language === 'Czech' ? 'Domů' : 'Home'}
            </Link>
            <Link onClick={closeNav} to="/about">
              {language === 'Czech' ? 'O mně' : 'About me'}
            </Link>
            <Link onClick={closeNav} to="/portfolio">
              {language === 'Czech' ? 'Portfolio' : 'Portfolio'}
            </Link>
            <Link onClick={closeNav} to="/offlineprojects">
              {language === 'Czech' ? 'Offline projekty' : 'Offline projects'}
            </Link>
          </div>
        </div>
        <nav className="nav-desktop">
          <Link to="/home">{language === 'Czech' ? 'Domů' : 'Home'}</Link>
          <Link to="/about">{language === 'Czech' ? 'O mně' : 'About me'}</Link>
          <Link to="/portfolio">
            {language === 'Czech' ? 'Portfolio' : 'Portfolio'}
          </Link>
          <Link to="/offlineprojects">
            {language === 'Czech' ? 'Offline projekty' : 'Offline projects'}
          </Link>
        </nav>
      </div>
    </>
  );
};
