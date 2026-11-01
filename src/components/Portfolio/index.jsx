import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Project } from './Project';
import { portfolioContent } from '../../content';
import './style.css';

export const Portfolio = () => {
  const [langVersion] = useOutletContext();
  const content =
    langVersion === 'Czech'
      ? portfolioContent.Czech
      : portfolioContent.English;

  return (
    <section className="portfolio container" aria-labelledby="portfolio-title">
      <h1 id="portfolio-title">{content.title}</h1>
      <div className="portfolio__grid">
        {content.projects.map((project, index) => (
          <Project
            key={project.id}
            project={project}
            visitWebsiteLabel={content.visitWebsite}
            viewSourceLabel={content.viewSource}
            technologiesLabel={content.technologies}
            showAlternateImageLabel={content.showAlternateImage}
            imageLoading={index === 0 ? 'eager' : 'lazy'}
            animationDelay={`${index * 70}ms`}
          />
        ))}
      </div>
    </section>
  );
};
