import React from 'react';
import { Job } from '../Job';
import { useOutletContext } from 'react-router-dom';

export const Experience = () => {
  const [langVersion, setLangVersion] = useOutletContext();

  const jobs = [
    {
      from: 'Jan 2024',
      to: 'present',
      company: 'Deloitte Global',
      city: 'Prague',
      role: 'Learning Research & Experiments Specialist',
      area1: 'Project coordination & experiments',
      description1: [
        'coordinated an internal GenAI experimentation programme focused on practical applications for learning processes and content development',
        'worked with an organising team and up to 40 participants, coordinating experiments, milestones, documentation, communications, and progress tracking',
        'coordinated expert and stakeholder involvement and adapted scope and schedules as experiments evolved',
      ],
      area2: 'Digital content & development',
      description2: [
        'created and maintained internal digital resources and microsites with low-code/no-code tools, taking design concepts through implementation and iteration',
        'tested technologies and evaluated practical applications for internal users',
        'used Articulate Storyline to support the transformation of e-learning materials',
      ],
    },
    {
      from: 'Sep 2014',
      to: 'Dec 2023',
      company: 'Deloitte Global',
      city: 'Prague',
      role: 'Senior Learning Coordinator',
      area1: 'Event management',
      description1: [
        'complete planning and delivery of Global Audit & Assurance learning events across EMEA, the Americas, and Asia-Pacific regions',
        '10 – 15 multi-program events a year, up to 300 participants per event',
        'agile project management (kanban)',
        'venue and other vendor research and contracting',
        'communication with key stakeholders',
        'managing technical support teams',
        'finance management and budget creation',
        'creation and implementation of processes to ensure transparency, cost and time efficiency',
        'project evaluation',
      ],
      area2: 'Virtual and IT projects',
      description2: [
        'transformation of learning events to virtual environment: virtual conferences, webinars, mobile apps for events, hybrid meetings',
        'creation of internal websites on the Zoomforth platform - using templates and coding in HTML and CSS',
        'UX design and management of internal Global Audit & Assurance Learning website',
        'MS Teams communication channel - creating posts, graphic banners, communication calendar',
        'management of educational platform with AI features (Cura)',
      ],
    },
    {
      from: '2013',
      to: '2014',
      company: 'Deloitte',
      city: 'Brno',
      role: 'Senior process specialist',
      area1: '',
      description1: [
        'realization of a new global immigration project - Global Immigration Services Centre',
        'creation and implementation of new processes, day-to-day communication with key stakeholders - Deloitte offices, vendors and clients',
        'contract terms compliance check and KPI reporting',
        'RFP preparation, administration and invoicing',
      ],
      area2: '',
      description2: [],
    },
    {
      from: '2012',
      to: '2015',
      company: 'Tutor',
      city: 'Prague',
      role: 'English language and SATs teacher (part time)',
      area1: '',
      description1: [
        'preparation of educational courses and materials',
        'tutoring',
      ],
      area2: '',
      description2: [],
    },
    {
      from: '2013',
      to: '2014',
      company: 'Scio.cz',
      city: 'Brno / Prague',
      role: 'Project worker and social sciences teacher',
      area1: '',
      description1: [
        'creation of project "How to learn foreign languages"',
        'teaching of preparatory courses for university entrance exams – economics, EU, modern history, political science',
      ],
      area2: '',
      description2: [],
    },
    {
      from: '2013',
      to: '2013',
      company: 'Mendel University in Brno',
      city: 'Brno',
      role: 'Translator',
      area1: '',
      description1: [
        'English translation and proof reading of educational materials for the project of "Innovation of Regional Development and International Territorial Studies bachelor degree programs"',
      ],
      area2: '',
      description2: [],
    },
    {
      from: '2007',
      to: '2012',
      company: 'James Cook Languages',
      city: 'Brno',
      role: 'English language teacher',
      area1: '',
      description1: [
        'teaching of general/business English in companies, translations, interpretaioton',
      ],
      area2: '',
      description2: [],
    },
  ];

  const jobsCz = [
    {
      from: '01/2024',
      to: 'současnost',
      company: 'Deloitte Global',
      city: 'Praha',
      role: 'Learning Research & Experiments Specialist',
      area1: 'Koordinace projektů a experimentů',
      description1: [
        'koordinace interního programu experimentů s generativní AI a hledání praktického využití pro vzdělávací procesy a tvorbu obsahu',
        'spolupráce s organizačním týmem a až 40 účastníky; koordinace experimentů, milníků, dokumentace, komunikace a sledování průběhu',
        'koordinace zapojení odborníků a zainteresovaných stran a průběžná úprava rozsahu a harmonogramu podle vývoje experimentů',
      ],
      area2: 'Digitální obsah a vývoj',
      description2: [
        'tvorba a správa interních digitálních zdrojů a microsites pomocí low-code/no-code nástrojů, od návrhu po realizaci a další úpravy',
        'testování technologií a vyhodnocování jejich praktického využití pro interní uživatele',
        'využití nástroje Articulate Storyline při transformaci e-learningových materiálů',
      ],
    },
    {
      from: '09/2014',
      to: '12/2023',
      company: 'Deloitte Global',
      city: 'Praha',
      role: 'Senior Learning Coordinator',
      area1: 'Event management',
      description1: [
        'kompletní plánování a řízení vzdělávacích akcí pro Global Audit & Assurance v regionech EMEA, Amerika a Asie-Pacifik',
        '10 – 15 multi-programových eventů ročně, do 300 účastníků na event',
        'agilní řízení projektů (kanban metoda)',
        'vyhledávání obchodních partnerů a uzavírání smluv',
        'komunikace s klíčovými stakeholdery',
        'řízení týmů technické podpory',
        'správa financí a tvorba rozpočtu',
        'vytváření a úprava procesů s cílem zajistit transparentnost, efektivitu nákladů a času',
        'evaluace projektů',
      ],
      area2: 'Virtuální a IT projekty',
      description2: [
        'transformace vzdělávacích akcí do virtuálního prostředí: virtuální konference, webináře, mobilní aplikace pro eventy, hybridní meetingy',
        'tvorba interních webových stránek na platformě Zoomforth - práce se šablonami, vytváření kódu v HTML a CSS',
        'UX design a správa obsahu interních webových stránek Global A&A Learning',
        'komunikační kanál na MS Teams – tvorba příspěvků, grafických bannerů, komunikačního kalendáře',
        'management vzdělávací platformy s prvky umělé inteligence (Cura)',
      ],
    },
    {
      from: '2013',
      to: '2014',
      company: 'Deloitte',
      city: 'Brno',
      role: 'Senior process specialist',
      area1: '',
      description1: [
        'realizace nového globálního imigračního projektu – Global Immigration Services Centre',
        'vytváření a implementace nových procesů, každodenní komunikace se světovými kancelářemi Deloitte, dodavateli a klienty',
        'kontrola dodržování smluvních podmínek a reportování KPI',
        'příprava cenových nabídek, administrace a fakturace',
      ],
      area2: '',
      description2: [],
    },
    {
      from: '2012',
      to: '2015',
      company: 'Tutor',
      city: 'Praha',
      role: 'Lektorka AJ a přípravných kurzů na VŠ (částečný úvazek)',
      area1: '',
      description1: [
        'příprava výukových kurzů a materiálů – obecné studijní předpoklady, logika, anglický jazyk',
      ],
      area2: '',
      description2: [],
    },
    {
      from: '2013',
      to: '2014',
      company: 'Scio.cz',
      city: 'Brno / Praha',
      role: 'Projektová pracovnice & lektorka sociálních věd',
      area1: '',
      description1: [
        'tvorba projektu "Jak na jazyky"',
        'výuka přípravných kurzů k přijímacím zkouškám na vysoké školy – obory ekonomie, EU, moderní historie a politologie',
      ],
      area2: '',
      description2: [],
    },
    {
      from: '2013',
      to: '2013',
      company: 'Mendelova Univerzita v Brně',
      city: 'Brno',
      role: 'Překladatelka',
      area1: '',
      description1: [
        'překlad a korektura výukových materiálů pro projekt "Inovace bakalářských studijních programů Regionální rozvoj a Mezinárodní teritoriální studia" do anglického jazyka',
      ],
      area2: '',
      description2: [],
    },
    {
      from: '2007',
      to: '2012',
      company: 'James Cook Languages',
      city: 'Brno',
      role: 'Lektorka anglického jazyka',
      area1: '',
      description1: [
        'výuka obecné/business angličtiny ve firmách, překlady, tlumočení',
      ],
      area2: '',
      description2: [],
    },
  ];

  let content = {
    English: {
      key: jobs.map((job) => `${job.role}`),
      from: jobs.map((job) => `${job.from}`),
      to: jobs.map((job) => `${job.to}`),
      company: jobs.map((job) => `${job.company}`),
      city: jobs.map((job) => `${job.city}`),
      role: jobs.map((job) => `${job.role}`),
      area1: jobs.map((job) => `${job.area1}`),
      description1: jobs.map((job) => {
        return job.description1.map((item) => <li key={item}>{item}</li>);
      }),
      area2: jobs.map((job) => `${job.area2}`),
      description2: jobs.map((job) => {
        return job.description2.map((item) => <li key={item}>{item}</li>);
      }),
    },
    Czech: {
      key: jobsCz.map((job) => `${job.role}`),
      from: jobsCz.map((job) => `${job.from}`),
      to: jobsCz.map((job) => `${job.to}`),
      company: jobsCz.map((job) => `${job.company}`),
      city: jobsCz.map((job) => `${job.city}`),
      role: jobsCz.map((job) => `${job.role}`),
      area1: jobsCz.map((job) => `${job.area1}`),
      description1: jobsCz.map((job) => {
        return job.description1.map((item) => <li key={item}>{item}</li>);
      }),
      area2: jobsCz.map((job) => `${job.area2}`),
      description2: jobsCz.map((job) => {
        return job.description2.map((item) => <li key={item}>{item}</li>);
      }),
    },
  };

  langVersion === 'Czech'
    ? (content = content.Czech)
    : (content = content.English);

  return content.key.map((key, index) => (
    <Job
      key={key}
      from={content.from[index]}
      to={content.to[index]}
      company={content.company[index]}
      city={content.city[index]}
      role={content.role[index]}
      area1={content.area1[index]}
      description1={content.description1[index]}
      area2={content.area2[index]}
      description2={content.description2[index]}
    />
  ));
};
