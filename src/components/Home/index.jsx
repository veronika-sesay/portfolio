import React, { useState } from 'react';
import './style.css';
import { useOutletContext } from 'react-router-dom';

export const Home = () => {
  const [langVersion, setLangVersion] = useOutletContext();
  const [contactMe, setContactMe] = useState(false);

  let content = {
    English: {
      intro:
        'Welcome! I am quite new to front-end development, but aleady in love. I am looking for new job opportunities as well as freelance projects. Find out more about me...',
      formName: 'Name',
      email: 'E-mail',
      contactBtn: 'Contact me',
      backBtn: 'Go back',
      message: 'Your message',
      submitBtn: 'Send message',
      submitMessage:
        'Thank you for contacting me, I will reply to you shortly. Have a nice day!',
    },
    Czech: {
      intro:
        'Vítejte! Ve světe front-endového vývoje jsem sice nová, ale již jsem mu propadla. Hledám nové pracovní příležitosti i samostatné projekty. Pojďte se o mně dozvědět více...',
      formName: 'Jméno',
      email: 'E-mail',
      contactBtn: 'Kontaktujte mě',
      backBtn: 'Jdi zpět',
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
      <div className={contactMe ? 'hide' : 'intro'}>
        <div className="intro__left">
          <video width="80%" className="intro__logo" autoPlay muted>
            <source src="/img/logo-video-resized.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="soc-net">
            <a href="https://github.com/veronika-sesay">
              <img id="github-icon" src="/img/github-icon.svg" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/veronika-sesay-cz/">
              <img src="/img/linkedin-icon.svg" alt="LinkedIn" />
            </a>
          </div>
          <button
            onClick={() => setContactMe(!contactMe)}
            className="contact-form__btn"
          >
            {content.contactBtn}
          </button>
        </div>
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
        <button
          onClick={() => setContactMe(!contactMe)}
          className={
            contactMe ? 'contact-form__btn contact-form__btn--back' : 'hide'
          }
        >
          {content.backBtn}
        </button>
        <form
          name="contact-form"
          method="POST"
          data-netlify="true"
          className={
            contactMe ? 'contact-form' : 'contact-form contact-form--closed'
          }
        >
          <input type="hidden" name="form-name" value="contact-form"></input>
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
          <button type="submit" className="contact-form__btn">
            {content.submitBtn}
          </button>
        </form>
      </div>
    </>
  );
};
