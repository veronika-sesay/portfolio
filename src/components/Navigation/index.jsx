import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Navigation = ({ onSelectLanguage }) => {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = () => setNavOpen(false);

  const [language, setLanguage] = useState('English');
  const switchOn = (event) => {
    const selectedLanguage = event.currentTarget.checked ? 'Czech' : 'English';
    setLanguage(selectedLanguage);
    onSelectLanguage(selectedLanguage);
  };

  return (
    <>
      <div className="navigation container">
        <div className="lang-switch">
          <label className="toggle">
            <input
              checked={language === 'Czech'}
              onChange={switchOn}
              id="lang-btn"
              type="checkbox"
            />
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
          </div>
        </div>
        <nav className="nav-desktop">
          <Link to="/home">{language === 'Czech' ? 'Domů' : 'Home'}</Link>
          <Link to="/about">{language === 'Czech' ? 'O mně' : 'About me'}</Link>
          <Link to="/portfolio">
            {language === 'Czech' ? 'Portfolio' : 'Portfolio'}
          </Link>
        </nav>
      </div>
    </>
  );
};
