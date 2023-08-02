import React from 'react';
import { Job } from '../Job';
import { useOutletContext } from 'react-router-dom';

export const Experience = () => {
  const [langVersion, setLangVersion] = useOutletContext();

  const jobs = [
    {
      from: '2014',
      to: 'present',
      company: 'Deloitte Global',
      city: 'Prague',
      role: 'Senior Learning Coordinator',
      area1: 'Event management',
      description1: [
        'complete planning and delivery of Global Audit & Assurance learning events across EMEA, Americas a Asia-Pacific regions',
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
        'UX design and management of internal Global Audit & Assurace Learning website',
        'MS Teams communication channel - creating posts, graphic banners, communicaiton calendar',
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
      from: '2014',
      to: 'současnost',
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

  return (
    <>
      <Job
        key={content.key[0]}
        from={content.from[0]}
        to={content.to[0]}
        company={content.company[0]}
        city={content.city[0]}
        role={content.role[0]}
        area1={content.area1[0]}
        description1={content.description1[0]}
        area2={content.area2[0]}
        description2={content.description2[0]}
      />
      <Job
        key={content.key[1]}
        from={content.from[1]}
        to={content.to[1]}
        company={content.company[1]}
        city={content.city[1]}
        role={content.role[1]}
        area1={content.area1[1]}
        description1={content.description1[1]}
        area2={content.area2[1]}
        description2={content.description2[1]}
      />
      <Job
        key={content.key[2]}
        from={content.from[2]}
        to={content.to[2]}
        company={content.company[2]}
        city={content.city[2]}
        role={content.role[2]}
        area1={content.area1[2]}
        description1={content.description1[2]}
        area2={content.area2[2]}
        description2={content.description2[2]}
      />
      <Job
        key={content.key[3]}
        from={content.from[3]}
        to={content.to[3]}
        company={content.company[3]}
        city={content.city[3]}
        role={content.role[3]}
        area3={content.area1[3]}
        description1={content.description1[3]}
        area2={content.area2[3]}
        description2={content.description2[3]}
      />
      <Job
        key={content.key[4]}
        from={content.from[4]}
        to={content.to[4]}
        company={content.company[4]}
        city={content.city[4]}
        role={content.role[4]}
        area1={content.area1[4]}
        description1={content.description1[4]}
        area2={content.area2[4]}
        description2={content.description2[4]}
      />
    </>
  );
};
