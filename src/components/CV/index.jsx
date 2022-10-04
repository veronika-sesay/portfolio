import React, { useState } from 'react';
import './style.css';
import { Parallax } from 'react-parallax';
import { Experience } from './Experience';
import { useOutletContext } from 'react-router-dom';

export const CV = () => {
  const [langVersion, setLangVersion] = useOutletContext();
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);

  let content = {
    English: {
      heading: 'About me',
      experience: 'Work experience',
      skills: 'Skills',
      courses: 'Courses',
      education: 'Education',
      backButton: 'Back to top',
    },
    Czech: {
      heading: 'O mně',
      experience: 'Pracovní zkušenosti',
      skills: 'Dovednosti',
      courses: 'Kurzy',
      education: 'Vzdělání',
      backButton: 'Zpět nahoru',
    },
  };

  langVersion === 'Czech'
    ? (content = content.Czech)
    : (content = content.English);

  return (
    <>
      <div className="cv-intro">
        <h2>{content.heading}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          maiores ad architecto ut harum aliquid rem veniam, doloribus itaque
          quibusdam! Quasi nostrum at dolorem perferendis, officia velit quod
          repellat similique! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Non ipsam vitae veritatis cumque sunt expedita architecto ut
          libero! Velit perferendis praesentium officiis facere commodi fugiat
          delectus qui ab ad deserunt?
        </p>
      </div>
      <div className="cv-title-section">
        <button
          onClick={() => {
            setExperienceOpen(!experienceOpen);
          }}
          className="cv-button"
        >
          <h2>{content.experience}</h2>
        </button>
        <button
          onClick={() => {
            setSkillsOpen(!skillsOpen);
          }}
          className="cv-button"
        >
          <h2>{content.skills}</h2>
        </button>
        <button
          onClick={() => {
            setCoursesOpen(!coursesOpen);
          }}
          className="cv-button"
        >
          <h2>{content.courses}</h2>
        </button>
        <button
          onClick={() => {
            setEducationOpen(!educationOpen);
          }}
          className="cv-button"
        >
          <h2>{content.education}</h2>
        </button>
      </div>
      <div className="cv-content">
        <div className={experienceOpen ? 'cv-content-experience' : 'hide'}>
          <Parallax
            className="parallax"
            bgImage="/img/teal-yellow-smoke.jpg"
            bgImageAlt=""
            strength={800}
            blur={{ min: -5, max: 5 }}
          >
            <Experience />
            <button
              onClick={() => {
                setExperienceOpen(!experienceOpen);
                setSkillsOpen(!skillsOpen);
                setCoursesOpen(!coursesOpen);
                setEducationOpen(!educationOpen);
              }}
              className="cv-button--back"
            >
              {content.backButton}
            </button>
          </Parallax>
        </div>
      </div>
    </>
  );
};
