import React from 'react';
import './style.css';

export const Project = (key, name, features, description, link) => {
  return (
    <>
      <div className="project-text">
        <a href={link}>{name}</a>
        <ul>{features}</ul>
        <p>{description}</p>
      </div>
    </>
  );
};
