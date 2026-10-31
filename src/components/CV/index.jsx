import React, { useState } from 'react';
import './style.css';
import { Parallax } from 'react-parallax';
import { Experience } from './Experience';
import { useOutletContext } from 'react-router-dom';
import { Skills } from './Skills';
import { Courses } from './Courses';
import { Education } from './Education';

export const CV = () => {
  const [langVersion, setLangVersion] = useOutletContext();
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);
  const closeContent = () => {
    setExperienceOpen(false);
    setSkillsOpen(false);
    setCoursesOpen(false);
    setEducationOpen(false);
    setContentOpen(false);
  };

  let content = {
    English: {
      heading: 'About me',
      experience: 'Work experience',
      skills: 'Skills',
      courses: 'Courses',
      education: 'Education',
      backButton: 'Back to top',
      profile:
        'Project professional with 10+ years of experience coordinating international projects and technology-enabled initiatives, alongside hands-on front-end development. Experienced in planning, stakeholder coordination, Agile/Kanban delivery, implementation, testing, and iterative improvement.',
    },
    Czech: {
      heading: 'O mně',
      experience: 'Pracovní zkušenosti',
      skills: 'Dovednosti',
      courses: 'Kurzy',
      education: 'Vzdělání',
      backButton: 'Zpět nahoru',
      profile:
        'Projektová specialistka s více než desetiletou zkušeností s koordinací mezinárodních projektů a technologických iniciativ, kterou doplňuje praktický front-endový vývoj. Zkušenosti zahrnují plánování, spolupráci se zainteresovanými stranami, agilní řízení pomocí Kanbanu, realizaci, testování a průběžné zlepšování.',
    },
  };

  langVersion === 'Czech'
    ? (content = content.Czech)
    : (content = content.English);

  return (
    <>
      <div className="cv-intro container">
        <h2>{content.heading}</h2>
        <p>{content.profile}</p>
      </div>
      <div className="cv-title-section container">
        <button
          onClick={() => {
            setExperienceOpen(!experienceOpen);
            setSkillsOpen(false);
            setCoursesOpen(false);
            setEducationOpen(false);
            setContentOpen(!contentOpen);
          }}
          className="cv-button"
        >
          <h2>{content.experience}</h2>
        </button>
        <button
          onClick={() => {
            setSkillsOpen(!skillsOpen);
            setExperienceOpen(false);
            setCoursesOpen(false);
            setEducationOpen(false);
            setContentOpen(!contentOpen);
          }}
          className="cv-button"
        >
          <h2>{content.skills}</h2>
        </button>
        <button
          onClick={() => {
            setCoursesOpen(!coursesOpen);
            setExperienceOpen(false);
            setSkillsOpen(false);
            setEducationOpen(false);
            setContentOpen(!contentOpen);
          }}
          className="cv-button"
        >
          <h2>{content.courses}</h2>
        </button>
        <button
          onClick={() => {
            setEducationOpen(!educationOpen);
            setExperienceOpen(false);
            setSkillsOpen(false);
            setCoursesOpen(false);
            setContentOpen(!contentOpen);
          }}
          className="cv-button"
        >
          <h2>{content.education}</h2>
        </button>
      </div>
      <div>
        <Parallax
          className="parallax"
          bgImage="/img/teal-yellow-smoke.jpg"
          bgImageAlt=""
          strength={800}
        >
          <div className={experienceOpen ? 'cv-content container' : 'hide'}>
            <Experience />
          </div>
          <div className={skillsOpen ? 'cv-content container' : 'hide'}>
            <Skills />
          </div>
          <div className={coursesOpen ? 'cv-content container' : 'hide'}>
            <Courses />
          </div>
          <div className={educationOpen ? 'cv-content container' : 'hide'}>
            <Education />
          </div>
          <button
            onClick={closeContent}
            className={contentOpen ? 'cv-button--back' : 'hide'}
          >
            {content.backButton}
          </button>
        </Parallax>
      </div>
    </>
  );
};
