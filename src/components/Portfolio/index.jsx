import React from 'react';
import './style.css';
import { useOutletContext } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Project } from './Project';
import { Link } from 'react-router-dom';

export const Portfolio = () => {
  const [langVersion, setLangVersion] = useOutletContext();

  const projects = [
    {
      img: '/img/gyntum.jpg',
      link: 'www.gyntum.cz',
      name: 'Gyntum',
      features: ['Wordpress template', 'contact forms', 'Google maps API'],
      description:
        'Simple presentation web with contact forms for a medical practitioner. This was my first project and though it is simple, I learned a lot of things on it - from buying a domain and hosting, to creating the actual website including different widgets up to indexing the site. It is still work in progress and will probably be replaced soon with a better version, but still it is the first project that brought me into front end.',
    },
  ];

  const projectsCz = [
    {
      img: '/img/gyntum.jpg',
      link: 'www.gyntum.cz',
      name: 'Gyntum',
      features: ['Wordpress template', 'contact forms', 'Google maps API'],
      description:
        'Simple presentation web with contact forms for a medical practitioner. This was my first project and though it is simple, I learned a lot of things on it - from buying a domain and hosting, to creating the actual website including different widgets up to indexing the site. It is still work in progress and will probably be replaced soon with a better version, but still it is the first project that brought me into front end.',
    },
  ];

  let content = {
    English: {
      link: projects.map((project) => `${project.link}`),
      name: projects.map((project) => `${project.name}`),
      features: projects.map((project) => {
        return project.features.map((item) => <li key={item}>{item}</li>);
      }),
    },
    Czech: {
      link: projectsCz.map((project) => `${project.link}`),
      name: projectsCz.map((project) => `${project.name}`),
      features: projectsCz.map((project) => {
        return project.features.map((item) => <li key={item}>{item}</li>);
      }),
    },
  };

  langVersion === 'Czech'
    ? (content = content.Czech)
    : (content = content.English);

  return (
    <Carousel>
      <div className="project-container">
        <img src="/img/gyntum.jpg" alt="www.gyntum.cz" />
        <div className="project-text">
          <Link to={content.link}>{content.name}</Link>
          <ul>{content.features}</ul>
          <p>{content.description}</p>
        </div>
    
      </div>
    </Carousel>
  );
};
