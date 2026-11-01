import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { useOutletContext } from "react-router-dom";
import {
  jobsContent,
  profileContent,
  skillsContent,
  educationContent,
  certificationsContent,
} from "../../content";

const pick = (data, lang) => (lang === "Czech" ? data.Czech : data.English);

export const About = () => {
  const [langVersion] = useOutletContext();
  const profile = pick(profileContent, langVersion);
  const skills = pick(skillsContent, langVersion);
  const experience = pick(jobsContent, langVersion);
  const education = pick(educationContent, langVersion);
  const certifications = pick(certificationsContent, langVersion);
  const [openJob, setOpenJob] = useState([0, 1]);
  const [openSection, setOpenSection] = useState(null);
  const refs = {
    experience: useRef(null),
    skills: useRef(null),
    education: useRef(null),
  };

  useEffect(() => {
    if (openSection) {
      refs[openSection].current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [openSection]);

  const toggle = (name) =>
    setOpenSection((cur) => (cur === name ? null : name));

  const Heading = ({ name, title }) => (
    <button
      className="acc__head"
      aria-expanded={openSection === name}
      onClick={() => toggle(name)}
    >
      <h2>{title}</h2>
      <span
        className={`acc__chevron${openSection === name ? " is-open" : ""}`}
        aria-hidden="true"
      />
    </button>
  );

  return (
    <div className="container about">
      <p className="about__intro">{profile.text}</p>

      <section className="about__section" ref={refs.experience}>
        <Heading name="experience" title={profile.experienceTitle} />
        {openSection === "experience" && (
          <ol className="xp about__content">
            {experience.map((job, i) => {
              const open = openJob.includes(i);
              return (
                <li className={`xp__item${open ? " is-open" : ""}`} key={i}>
                  <button
                    className="xp__head"
                    aria-expanded={open}
                    onClick={() =>
                      setOpenJob((cur) =>
                        open ? cur.filter((n) => n !== i) : [...cur, i],
                      )
                    }
                  >
                    <span className="xp__dates">
                      {job.from} – {job.to}
                    </span>
                    <span className="xp__title">
                      <strong>{job.role}</strong>
                      <span>
                        {job.company}, {job.city}
                      </span>
                    </span>
                    <span className="xp__chevron" aria-hidden="true">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="xp__body">
                      {job.sections?.map((s, k) => (
                        <div key={k}>
                          <h3>{s.title}</h3>
                          <ul>
                            {s.bullets?.map((b, n) => (
                              <li key={n}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        )}
      </section>

      <section className="about__section" ref={refs.skills}>
        <Heading name="skills" title={profile.skillsTitle} />
        {openSection === "skills" && (
          <div className="skills about__content">
            {skills.map((group, i) => (
              <div className="skills__group" key={i}>
                <h3>{group.category}</h3>
                {group.sections?.map((s, k) => (
                  <div key={k} className="skills__block">
                    {group.sections.length > 1 && <h4>{s.title}</h4>}
                    {s.details?.map((d, n) => (
                      <div key={n}>
                        {d.description && <p>{d.description}</p>}
                        {d.bullets?.length > 0 && (
                          <ul className="tags">
                            {d.bullets.map((b, m) => (
                              <li key={m}>{b.split(" – ")[0]}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="about__section" ref={refs.education}>
        <Heading name="education" title={profile.educationTitle} />
        {openSection === "education" && (
          <div className="about__content">
            <ul className="edu">
              {education.map((e, i) => (
                <li key={i}>
                  <span className="xp__dates">
                    {e.from} – {e.to}
                  </span>
                  <span className="xp__title">
                    <strong>
                      {e.degree}, {e.field}
                    </strong>
                    <span>
                      {e.school}, {e.city}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <h3 className="about__subheading">{profile.certificationsTitle}</h3>
            <ul className="edu">
              {certifications.map((c, i) => (
                <li key={i}>
                  <span className="xp__dates">{c.year}</span>
                  <span className="xp__title">
                    <strong>{c.name}</strong>
                    <span>{c.issuer}</span>
                    {c.description && <span>{c.description}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};
