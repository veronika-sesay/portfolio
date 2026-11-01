import React, { useState } from 'react';
import './style.css';

export const Project = ({
  project,
  visitWebsiteLabel,
  viewSourceLabel,
  technologiesLabel,
  showAlternateImageLabel,
  imageLoading,
  animationDelay,
}) => {
  const images = [project.image1, project.image2].filter(Boolean);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const alternateImageIndex = activeImageIndex === 0 ? 1 : 0;

  return (
    <article
      className="project-card"
      style={{ '--card-enter-delay': animationDelay }}
    >
      <div className="project-card__image-frame">
        <img
          className="project-card__image"
          src={images[activeImageIndex]}
          alt={
            activeImageIndex === 1 && project.image2Alt
              ? project.image2Alt
              : project.imageAlt
          }
          loading={imageLoading}
          decoding="async"
        />
        {images.length > 1 && (
          <button
            className="project-card__image-switch"
            type="button"
            aria-label={`${showAlternateImageLabel}: ${project.name}`}
            onClick={() => setActiveImageIndex(alternateImageIndex)}
          >
            <img src={images[alternateImageIndex]} alt="" />
          </button>
        )}
      </div>
      <div className="project-card__content">
        <h2>{project.name}</h2>
        <p>
          {project.descriptionParts
            ? project.descriptionParts.map((part, index) =>
                typeof part === 'string' ? (
                  part
                ) : (
                  <a
                    className="project-card__description-link"
                    href={part.url}
                    key={part.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {part.text}
                  </a>
                ),
              )
            : project.description}
        </p>
        <ul
          className="project-card__technologies"
          aria-label={technologiesLabel}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <a
          className="project-card__link"
          href={project.websiteUrl}
          target="_blank"
          rel="noreferrer"
        >
          {visitWebsiteLabel}
        </a>
        {project.sourceUrl && (
          <a
            className="project-card__link"
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            {viewSourceLabel}
          </a>
        )}
      </div>
    </article>
  );
};
