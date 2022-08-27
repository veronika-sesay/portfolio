import React, { useState } from 'react';
import './style.css';
import { Link, useOutletContext } from 'react-router-dom';

export const Home = () => {
  const [langVersion, setLangVersion] = useOutletContext();

  const [contactMe, setContactMe] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);

  let content = {
    English: {
      intro:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At mollitia facere nam dolorum vero natus, aut iusto rerum cumque quos esse illo quas modi aspernatur maxime consequuntur, nihil eum laborum!',
      formName: 'Name',
      email: 'E-mail',
      contactBtn: 'Contact me',
      message: 'Your message',
      submitBtn: 'Send message',
      submitMessage:
        'Thank you for contacting me, I will reply to you shortly. Have a nice day!',
    },
    Czech: {
      intro: 'Ahoj',
      formName: 'Jméno',
      email: 'E-mail',
      contactBtn: 'Kontaktujte mě',
      message: 'Vaše zpráva',
      submitBtn: 'Odeslat',
      submitMessage:
        'Děkuji za Vaši zprávu, ozvu se Vám co nejdříve. Hezký den!',
    },
  };

  langVersion === 'Czech'
    ? (content = content.Czech)
    : (content = content.English);

  return (
    <>
      <div className={contactMe ? 'intro intro--hide' : 'intro'}>
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
      <div className={contactMe ? 'soc-net--hide' : 'soc-net'}>
        <a href="https://github.com/veronika-sesay">
          <img id="github-icon" src="/img/github-icon.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/veronika-sesay-cz/">
          <img src="/img/linkedin-icon.svg" alt="LinkedIn" />
        </a>
      </div>
      <div className="contact-form">
        <button
          onClick={() => setContactMe(!contactMe)}
          className="contact-form__btn"
        >
          {content.contactBtn}
        </button>
        <form
          className={
            contactMe ? 'contact-form' : 'contact-form contact-form--closed'
          }
          action=""
        >
          <label htmlFor="name">
            {content.formName}
            <input type="text" name="name" id="name" size="60" />
          </label>
          <label htmlFor="email">
            {content.email}
            <input type="email" name="email" id="email" size="60" />
          </label>
          <label htmlFor="message">
            {content.message}
            <textarea
              name="message"
              id="message"
              cols="50"
              rows="10"
            ></textarea>
          </label>
          <button onClick type="submit" className="contact-form__btn">
            {content.submitBtn}
          </button>
          <div className="submit-message"></div>
        </form>
      </div>
    </>
  );
};
