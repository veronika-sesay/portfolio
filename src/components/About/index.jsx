import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { useOutletContext } from 'react-router-dom';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  jobsContent,
  profileContent,
  skillsContent,
  educationContent,
} from '../../content';

export const About = () => {
  const [langVersion] = useOutletContext();
  const profile =
    langVersion === 'Czech' ? profileContent.Czech : profileContent.English;
  const skills =
    langVersion === 'Czech' ? skillsContent.Czech : skillsContent.English;
  const experience =
    langVersion === 'Czech' ? jobsContent.Czech : jobsContent.English;
  const education =
    langVersion === 'Czech' ? educationContent.Czech : educationContent.English;
  const [openExperience, setOpenExperience] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const openExperienceRef = useRef(null);
  const openSkillsRef = useRef(null);
  const openEducationRef = useRef(null);

  useEffect(() => {
    if (openEducation && openEducationRef.current) {
      openEducationRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (openExperience && openExperienceRef.current) {
      openExperienceRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (openSkills && openSkillsRef.current) {
      openSkillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [openExperience, openSkills, openEducation]);

  // Helper to handle opening only one section at a time
  const handleSectionToggle = (section) => {
    if (section === 'skills') {
      setOpenSkills((prev) => {
        if (!prev) {
          setOpenExperience(false);
          setOpenEducation(false);
        }
        return !prev;
      });
    } else if (section === 'experience') {
      setOpenExperience((prev) => {
        if (!prev) {
          setOpenSkills(false);
          setOpenEducation(false);
        }
        return !prev;
      });
    } else if (section === 'education') {
      setOpenEducation((prev) => {
        if (!prev) {
          setOpenSkills(false);
          setOpenExperience(false);
        }
        return !prev;
      });
    }
  };

  useEffect(() => {
    if (openEducation && openEducationRef.current) {
      openEducationRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (openExperience && openExperienceRef.current) {
      openExperienceRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (openSkills && openSkillsRef.current) {
      openSkillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [openExperience, openSkills, openEducation]);

  return (
    <>
      <div className="container">
        <div className="section">
          <h2>{profile.mainTitle}</h2>
          <p>{profile.text}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            nobis enim perferendis doloremque dolores corporis dicta optio, odit
            animi et atque laborum deleniti iste cumque assumenda voluptatum ut
            cupiditate. Quisquam, cumque! Quod, voluptatibus? Quisquam, cumque!
            Quod, voluptatibus? Quisquam, cumque! Quod, voluptatibus? Quisquam,
            cumque! Quod, voluptatibus? Quisquam, cumque! Quod, voluptatibus?
            Quisquam, cumque! Quod, voluptatibus? Quisquam, cumque! Quod,
            voluptatibus? Quisquam, cumque! Quod, voluptatibus? Quisquam,
            cumque! Quod, Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Recusandae eos quod vitae ullam perferendis excepturi
            praesentium cupiditate? Ea ratione dolorem, obcaecati maiores natus
            placeat totam animi illo, illum pariatur cum.
          </p>
        </div>
        <div className="section underline">
          <div className="section__flex">
            <h2>{profile.skillsTitle}</h2>
            <img
              src="../../img/arrow-down.png"
              alt="open icon"
              className={openSkills ? 'hide' : 'display'}
              onClick={() => handleSectionToggle('skills')}
            />
            <img
              src="../../img/arrow-up.png"
              alt="open icon"
              className={openSkills ? 'display' : 'hide'}
              onClick={() => handleSectionToggle('skills')}
            />
          </div>
        </div>
        {openSkills && (
          <div className={openSkills ? 'display' : 'hide'} ref={openSkillsRef}>
            <VerticalTimeline lineColor="var(--teal)">
              {Array.isArray(skills) && skills.length > 0 ? (
                skills.map((skill, index) => (
                  <VerticalTimelineElement
                    key={index}
                    date={`${skill.category}`}
                    iconStyle={{
                      background: 'var(--thulian-pink)',
                      color: 'black',
                    }}
                    icon={<i className="fas fa-briefcase" />}
                    contentStyle={{
                      background: 'var(--azure)',
                      color: 'black',
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid var(--teal)',
                    }}
                  >
                    {Array.isArray(skill.sections) &&
                      skill.sections.length > 0 &&
                      skill.sections.map((section, idx) => (
                        <div key={idx}>
                          <h3 className="vertical-timeline-element-title">
                            {section.title}
                          </h3>
                          {Array.isArray(section.details) &&
                            section.details.length > 0 &&
                            section.details.map((detail, idx) => (
                              <div key={idx}>
                                <h4 className="vertical-timeline-element-subtitle">
                                  {detail.subtitle}
                                </h4>
                                <ul>
                                  <li>{detail.description}</li>
                                  <ul>
                                    {Array.isArray(detail.bullets) &&
                                      detail.bullets.length > 0 &&
                                      detail.bullets.map((point, i) => (
                                        <li key={i}>{point}</li>
                                      ))}
                                  </ul>
                                </ul>
                              </div>
                            ))}
                        </div>
                      ))}
                  </VerticalTimelineElement>
                ))
              ) : (
                <></>
              )}
            </VerticalTimeline>
          </div>
        )}
        <div className="section underline">
          <div className="section__flex">
            <h2>{profile.experienceTitle}</h2>
            <img
              src="../../img/arrow-down.png"
              alt="open icon"
              className={openExperience ? 'hide' : 'display'}
              onClick={() => handleSectionToggle('experience')}
            />
            <img
              src="../../img/arrow-up.png"
              alt="open icon"
              className={openExperience ? 'display' : 'hide'}
              onClick={() => handleSectionToggle('experience')}
            />
          </div>
        </div>
        {openExperience && (
          <div
            className={openExperience ? 'display' : 'hide'}
            ref={openExperienceRef}
          >
            <VerticalTimeline lineColor="var(--teal)">
              {Array.isArray(experience) && experience.length > 0 ? (
                experience.map((job, index) => (
                  <VerticalTimelineElement
                    key={index}
                    date={`${job.from} - ${job.to}`}
                    iconStyle={{
                      background: 'var(--thulian-pink)',
                      color: 'black',
                    }}
                    icon={<i className="fas fa-briefcase" />}
                    contentStyle={{
                      background: 'var(--azure)',
                      color: 'black',
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid var(--teal)',
                    }}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {job.role}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {job.company}, {job.city}
                    </h4>
                    <div className="date-inside-mobile">
                      {job.from} - {job.to}
                    </div>
                    {Array.isArray(job.sections) &&
                      job.sections.length > 0 &&
                      job.sections.map((section, idx) => (
                        <div key={idx}>
                          <strong>{section.title}</strong>
                          <ul>
                            {Array.isArray(section.bullets) &&
                              section.bullets.length > 0 &&
                              section.bullets.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                          </ul>
                        </div>
                      ))}
                  </VerticalTimelineElement>
                ))
              ) : (
                <></>
              )}
            </VerticalTimeline>
          </div>
        )}
        <div className="section underline">
          <div className="section__flex">
            <h2>{profile.educationTitle}</h2>
            <img
              src="../../img/arrow-down.png"
              alt="open icon"
              className={openEducation ? 'hide' : 'display'}
              onClick={() => handleSectionToggle('education')}
            />
            <img
              src="../../img/arrow-up.png"
              alt="open icon"
              className={openEducation ? 'display' : 'hide'}
              onClick={() => handleSectionToggle('education')}
            />
          </div>
        </div>
        {openEducation && (
          <div
            className={openEducation ? 'display' : 'hide'}
            ref={openEducationRef}
          >
            <VerticalTimeline lineColor="var(--teal)">
              {Array.isArray(education) && education.length > 0 ? (
                education.map((school, index) => (
                  <VerticalTimelineElement
                    key={index}
                    date={`${school.from} - ${school.to}`}
                    iconStyle={{
                      background: 'var(--thulian-pink)',
                      color: 'black',
                    }}
                    icon={<i className="fas fa-briefcase" />}
                    contentStyle={{
                      background: 'var(--azure)',
                      color: 'black',
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid var(--teal)',
                    }}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {school.field}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {school.school}, {school.faculty}, {school.city}
                    </h4>
                    <strong>{school.degree}</strong>
                  </VerticalTimelineElement>
                ))
              ) : (
                <></>
              )}
            </VerticalTimeline>
          </div>
        )}
        {/* Add extra space at the bottom */}
        <div style={{ height: '100px' }}></div>
      </div>
    </>
  );
};
