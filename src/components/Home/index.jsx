import React, { useState } from 'react';
import './style.css';
import { useOutletContext } from 'react-router-dom';
import { homeContent, mediaPaths } from '../../content';

export const Home = () => {
  const [langVersion] = useOutletContext();
  const content =
    langVersion === 'Czech' ? homeContent.Czech : homeContent.English;
  const [contactMe, setContactMe] = useState(false);

  return (
    <>
      <div className={contactMe ? 'hide' : 'intro'}>
        <div className="intro__left">
          <video width="80%" className="intro__logo" autoPlay muted>
            <source src={mediaPaths.logoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="soc-net">
            <a href="https://github.com/veronika-sesay">
              <img id="github-icon" src={mediaPaths.githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/veronika-sesay-cz/">
              <img src={mediaPaths.linkedinIcon} alt="LinkedIn" />
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
              src={mediaPaths.profilePhoto}
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
