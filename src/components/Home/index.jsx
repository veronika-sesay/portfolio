import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import { useOutletContext } from 'react-router-dom';
import { homeContent, mediaPaths } from '../../content';

export const Home = () => {
  const [langVersion] = useOutletContext();
  const content =
    langVersion === 'Czech' ? homeContent.Czech : homeContent.English;
  const [contactMe, setContactMe] = useState(false);
  const contactFormRef = useRef(null);
  let typingDelay = 0;
  const typedRoles = content.roles.map((role) => {
    const typeDuration = role.length * 55;
    const roleTypingDelay = typingDelay;
    typingDelay += typeDuration + 350;

    return (
      <p className="intro__role" key={role}>
        <span
          className="intro__role-characters"
          style={{
            '--typing-steps': role.length + 4,
            '--typing-duration': `${typeDuration}ms`,
            '--typing-delay': `${roleTypingDelay}ms`,
          }}
        >
          <span className="intro__role-bracket" aria-hidden="true">
            &lt;
          </span>
          <span className="intro__role-text">{role}</span>
          <span className="intro__role-bracket" aria-hidden="true">
            {' '}
            /&gt;
          </span>
        </span>
      </p>
    );
  });

  useEffect(() => {
    if (contactMe && contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [contactMe]);

  return (
    <>
      <div className="home container">
        <div className="intro">
          <div className="intro__left">
            <h1>Veronika Sesay</h1>
            <div className="intro__roles">
              {typedRoles}
            </div>
          </div>
          <div className="intro__right">
            <div className="intro__photo">
              <img
                id="profile-photo"
                src={mediaPaths.profilePhoto}
                alt="Veronika Sesay"
              />
            </div>
          </div>
        </div>
        <div className="text">
          <p className="intro__greeting">{content.greeting}</p>
          <p>{content.intro}</p>
        </div>
        <div className="contact">
          <button
            onClick={() => setContactMe(!contactMe)}
            className="contact-form__btn"
          >
            {content.contactBtn}
          </button>
          <a href="https://github.com/veronika-sesay">
            <img id="github-icon" src={mediaPaths.githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/veronika-sesay-cz/">
            <img src={mediaPaths.linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
        {contactMe && (
          <div className="contact-form" ref={contactFormRef}>
            <form name="contact-form" method="POST" data-netlify="true">
              <input
                type="hidden"
                name="form-name"
                value="contact-form"
              ></input>
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
        )}
      </div>
    </>
  );
};
