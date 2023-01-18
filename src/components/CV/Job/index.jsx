import React from 'react';
import './style.css';

export const Job = ({
  from,
  to,
  company,
  city,
  role,
  area1,
  area2,
  description1,
  description2,
}) => {
  return (
    <div className="cv-item">
      <div className="cv-item__details">
        <h3>{role}</h3>
        <p className="company">
          {company}, {city}
        </p>
        <p>
          {from} - {to}
        </p>
      </div>
      <div className="cv-item__role">
        <h4>{area1}</h4>
        <ul>{description1}</ul>
        <h4>{area2}</h4>
        <ul>{description2}</ul>
      </div>
    </div>
  );
};
