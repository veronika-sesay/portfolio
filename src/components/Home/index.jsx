import React, { useState } from 'react';
import './style.css';
import { useOutletContext } from 'react-router-dom';

export const Home = () => {
  const [langVersion, setLangVersion] = useOutletContext();
  const [contactMe, setContactMe] = useState(false);
  const openContactForm = () => setContactMe(true);

  let content = {
    English: {
      intro: 'Hello',
    },
    Czech: {
      intro: 'Ahoj',
    },
  };

  console.log(langVersion, 'langVersion pres outlet');
  langVersion === 'Czech'
    ? (content = content.Czech)
    : (content = content.English);

  return (
    <>
      <div className="intro">
        <video className="intro__logo" autoPlay muted>
          <source src="/img/logo-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="intro__info">
          <div className="info__photo">
            <img
              id="profile-photo"
              src="/img/profile-photo.JPG"
              alt="Veronika Sesay"
            />
          </div>
          <div className="info__text">
            <p>{content.intro}</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <button>Kontaktujte mě</button>
        <form action=""></form>
      </div>
    </>
  );
};
