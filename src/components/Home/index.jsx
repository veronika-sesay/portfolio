import React, { useState } from 'react';
import './style.css';

export const Home = () => {
  const [contactMe, setContactMe] = useState(false);
  const openContactForm = () => setContactMe(true);

  return (
    <>
      <div className="intro">
        <video className="intro__logo" autoPlay="autoplay" muted>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a
              at delectus inventore perspiciatis temporibus obcaecati repellat
              corrupti consequatur magnam sed hic quasi, saepe voluptas ipsa
              placeat. Consequuntur, placeat asperiores. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Quos delectus sed magnam
              voluptas nulla fugit itaque officiis. Vel aliquid incidunt
              delectus hic consequatur possimus voluptates, cum iure eaque dicta
              libero?
            </p>
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
