import { title } from 'process';

// media paths
export const mediaPaths = {
  logoVideo: '/img/logo-video-resized.mp4',
  githubIcon: '/img/github-icon.svg',
  linkedinIcon: '/img/linkedin-icon.svg',
  profilePhoto: '/img/profile-photo.JPG',
  hamburgerIcon: '/img/hamburger-icon.svg',
};

// Not Found page content
export const notFoundNote = {
  English: {
    notFoundNote: 'There is nothing here!',
  },
  Czech: {
    notFoundNote: 'Tady není vůbec nic!',
  },
};

// Home page content
export const homeContent = {
  English: {
    greeting: 'Hello, world!',
    roles: ['project manager', 'technology & creativity'],
    intro:
      'I work across project management and digital development, with 10+ years of experience coordinating international projects and hands-on experience building websites with HTML, CSS, JavaScript and React. I like taking an idea, figuring out what needs to happen to make it work, and getting it there — whether that involves people, processes, technology, or all three. Have a look at some of my work.',
    formName: 'Name',
    email: 'E-mail',
    contactBtn: 'Contact me',
    backBtn: 'Go back',
    message: 'Your message',
    submitBtn: 'Send message',
    submitMessage:
      'Thank you for contacting me, I will reply to you shortly. Have a nice day!',
  },
  Czech: {
    greeting: 'Hello, world!',
    roles: ['projektová manažerka', 'technologie & kreativita'],
    intro:
      'Pohybuji se na pomezí projektového řízení a digitálního vývoje. Mám více než deset let zkušeností s koordinací mezinárodních projektů a praktické zkušenosti s tvorbou webů v HTML, CSS, JavaScriptu a Reactu. Baví mě vzít nápad, zjistit, co je potřeba k jeho uskutečnění, a dotáhnout ho do cíle — ať už to zahrnuje lidi, procesy, technologie, nebo všechno dohromady. Podívejte se na některé z mých projektů.',
    formName: 'Jméno',
    email: 'E-mail',
    contactBtn: 'Kontaktujte mě',
    backBtn: 'Jdi zpět',
    message: 'Vaše zpráva',
    submitBtn: 'Odeslat',
    submitMessage: 'Děkuji za Vaši zprávu, ozvu se Vám co nejdříve. Hezký den!',
  },
};

// About page profile content
export const profileContent = {
  English: {
    mainTitle: 'About me',
    skillsTitle: 'Skills',
    experienceTitle: 'Experience',
    educationTitle: 'Education',
    certificationsTitle: 'Certifications & Professional Development',
    text: 'I combine 10+ years of international project coordination and technology-enabled delivery with hands-on front-end development. I enjoy translating needs into practical digital experiences, working across planning, stakeholder coordination, implementation and iteration.',
  },
  Czech: {
    mainTitle: 'O mně',
    skillsTitle: 'Dovednosti',
    experienceTitle: 'Zkušenosti',
    educationTitle: 'Vzdělání',
    certificationsTitle: 'Certifikace a profesní rozvoj',
    text: 'Mám více než deset let zkušeností s koordinací mezinárodních projektů a technologických iniciativ, které kombinuji s praktickým front-endovým vývojem. Baví mě vytvářet funkční digitální řešení, propojovat plánování, spolupráci se zainteresovanými stranami, realizaci i další vylepšování daného projektu.',
  },
};

// About page experience content
export const jobsContent = {
  English: [
    {
      from: '01/2024',
      to: '06/2026',
      company: 'Deloitte Global',
      city: 'Prague',
      role: 'Learning Research & Experiments Specialist',
      sections: [
        {
          title: 'Project Coordination & Experiments',
          bullets: [
            'Coordinated an internal GenAI experimentation programme exploring practical applications for learning processes and content development.',
            'Worked with an organising team and up to 40 participants in each sprint, coordinating experiments, milestones, documentation, communications, and progress tracking.',
            'Coordinated expert and stakeholder involvement, adapting scope and schedules as experiments evolved.',
          ],
        },
        {
          title: 'Digital Content & Development',
          bullets: [
            'Created and maintained internal digital resources and microsites with low-code/no-code tools, taking design concepts through implementation and iteration.',
            'Tested technologies and evaluated practical applications for internal users.',
            'Used Articulate Storyline to support the transformation of e-learning materials.',
          ],
        },
      ],
    },
    {
      from: '09/2014',
      to: '12/2023',
      company: 'Deloitte Global',
      city: 'Prague',
      role: 'Senior Learning Coordinator',
      sections: [
        {
          title: 'Event management',
          bullets: [
            'Managed end-to-end delivery of 10–15 multi-program learning events annually across EMEA, the Americas and Asia-Pacific, with up to 300 participants per event.',
            'Coordinated delivery from requirements and planning through supplier selection, contracting, budgeting, registration, communications, presenter coordination, technology, onsite delivery and post-event financial reconciliation.',
            'Managed multiple concurrent projects, typically working across different event planning and delivery stages at the same time.',
            'Planned project tasks, timelines and dependencies and used Kanban-based ways of working to track delivery and progress.',
            'Coordinated internal stakeholders, presenter/developer teams, technical support teams and external suppliers without direct line-management responsibility.',
            'Managed event budgets and financial controls, ensuring costs and member-firm recharges remained within agreed parameters.',
            'Identified and managed delivery risks and unexpected issues, adapting plans to accommodate changing requirements and last-minute operational needs.',
            'Selected and coordinated external suppliers and supported contract negotiations within internal policies and requirements.',
            'Collected and coordinated post-event evaluation data and supported financial reconciliation and invoicing processes.',
          ],
        },
        {
          title: 'Virtual and IT projects',
          bullets: [
            'Coordinated the transition of learning events into virtual and hybrid environments, including virtual conferences, webinars, mobile event applications and hybrid meetings.',
            'Defined business and operational requirements for technology solutions and coordinated pilots with technical support teams and IT.',
            'Organised and tested technology pilots, supported users and coordinated implementation and rollout across multiple events.',
            'Created and managed internal microsites using Zoomforth and later supported digital content and UX improvements for Global A&A Learning resources.',
            'Managed communication activities through Microsoft Teams, including communication planning and content coordination.',
            'Supported management of Cura, an AI-enabled learning platform.',
            'Used Microsoft Planner for project/task management and Power Automate to automate repetitive task creation for recurring sprint activities.',
            'Participated in and supported sprint planning, refinement, stand-ups and retrospectives.',
          ],
        },
      ],
    },
    {
      from: '02/2013',
      to: '12/2014',
      company: 'Deloitte',
      city: 'Brno',
      role: 'Senior process specialist',
      sections: [
        {
          bullets: [
            'Supported implementation of a new global immigration services project and development of processes for coordination across Deloitte offices worldwide.',
            'Worked with IT to adapt systems and tools to operational requirements and supported the technical side of the new service model.',
            'Collaborated with global offices, suppliers and clients to implement and refine processes.',
            'Supported contract compliance, KPI reporting, quotations, administration and invoicing.',
            'Worked within a global project environment involving different local requirements and regulatory constraints.',
          ],
        },
      ],
    },
    {
      from: '01/2012',
      to: '12/2015',
      company: 'Tutor',
      city: 'Prague',
      role: 'English language and SATs teacher (part time)',
      sections: [
        {
          bullets: [
            'Preparation of educational courses and materials.',
            'Tutoring.',
          ],
        },
      ],
    },
    {
      from: '01/2009',
      to: '12/2015',
      company: 'Scio.cz',
      city: 'Brno / Prague',
      role: 'Project worker & social sciences teacher (part time)',
      sections: [
        {
          bullets: [
            'Creation of the project "How to learn foreign languages".',
            'Teaching of preparatory courses for university entrance exams – economics, EU, modern history, political science.',
          ],
        },
      ],
    },
    {
      from: '11/2013',
      to: '01/2014',
      company: 'Miramare Language School s.r.o.',
      city: 'Brno',
      role: 'English language teacher (part time)',
      sections: [
        {
          bullets: ['Teaching English to postgraduate students.'],
        },
      ],
    },
    {
      from: '05/2013',
      to: '10/2013',
      company: 'Mendel University in Brno',
      city: 'Brno',
      role: 'Translator',
      sections: [
        {
          bullets: [
            'Translation of university textbooks into English and proofreading within the project of Innovation of the bachelor study programs in Regional Development and International Territorial Studies.',
          ],
        },
      ],
    },
    {
      from: '08/2012',
      to: '09/2012',
      company: 'Motorola Solutions',
      city: 'Brno',
      role: 'Customer Service Representative',
      sections: [
        {
          bullets: [
            'Processing orders in English - communication with customers.',
            'Updating customer accounts and database.',
          ],
        },
      ],
    },
    {
      from: '10/2007',
      to: '07/2012',
      company: 'James Cook Languages',
      city: 'Brno',
      role: 'English language teacher',
      sections: [
        {
          bullets: [
            'Teaching general/business English in companies, translations, interpreting.',
          ],
        },
      ],
    },
  ],
  Czech: [
    {
      from: '01/2024',
      to: '06/2026',
      company: 'Deloitte Global',
      city: 'Prague',
      role: 'Learning Research & Experiments Specialist',
      sections: [
        {
          title: 'Koordinace projektů a experimentů',
          bullets: [
            'Koordinace interního programu experimentování s GenAI zkoumajícího praktické aplikace pro vzdělávací procesy a tvorbu obsahu.',
            'Spolupráce s organizačním týmem a až 40 účastníky v každém sprintu, koordinace experimentů, milníků, dokumentace, komunikace a sledování pokroku.',
            'Koordinace zapojení odborníků a stakeholderů, přizpůsobování rozsahu a harmonogramů podle vývoje experimentů.',
          ],
        },
        {
          title: 'Digitální obsah a vývoj',
          bullets: [
            'Tvorba a správa interních digitálních zdrojů a microsites pomocí low-code/no-code nástrojů, od návrhu po realizaci a další úpravy.',
            'Testování technologií a vyhodnocování jejich praktického využití pro interní uživatele.',
            'Využití nástroje Articulate Storyline při transformaci e-learningových materiálů.',
          ],
        },
      ],
    },
    {
      from: '09/2014',
      to: '12/2023',
      company: 'Deloitte Global',
      city: 'Praha',
      role: 'Senior Learning Coordinator',
      sections: [
        {
          title: 'Organizace vzdělávacích akcí',
          bullets: [
            'Kompletní plánování a realizace 10–15 víceprogramových vzdělávacích akcí ročně v regionech EMEA, Amerika a Asie-Pacifik, s až 300 účastníky na akci.',
            'Koordinace realizace od požadavků a plánování přes výběr dodavatelů, tvorbu rozpočtu, uzavírání smluv, registraci, komunikaci, koordinaci prezentujících, výběr a správu technologií, realizaci na místě až po finanční vyúčtování po akci.',
            'Řízení několika současně probíhajících projektů v různých fázích plánování a realizace.',
            'Plánování úkolů projektu, časových harmonogramů a závislostí a využívání Kanban metody pro sledování realizace a pokroku.',
            'Koordinace interních stakeholderů, týmů prezentujících, týmů technické podpory a externích dodavatelů.',
            'Řízení rozpočtů akcí a finanční kontroly, přefakturace dle dohodnutých parametrů.',
            'Řízení rizik, přizpůsobování plánů měnícím se požadavkům a operativním potřebám.',
            'Výběr a koordinace externích dodavatelů, uzavírání smluv v souladu s interními pravidly a požadavky.',
            'Sběr a koordinace dat z evaluace po akcích.',
          ],
        },
        {
          title: 'Virtuální a IT projekty',
          bullets: [
            'Koordinace přechodu vzdělávacích akcí do virtuálního a hybridního prostředí: virtuální konference, webináře, mobilní aplikace a hybridní schůzky.',
            'Definování obchodních a provozních požadavků na technologická řešení a koordinace pilotních projektů s týmy technické podpory a IT.',
            'Organizace a testování pilotních projektů technologických řešení, podpora uživatelů a koordinace implementace.',
            'Tvorba a správa interních webů na platformě Zoomforth, podpora digitálního obsahu a UX zlepšení pro interní weby Global A&A Learning.',
            'Řízení komunikace týmu prostřednictvím Microsoft Teams, včetně plánování komunikace a koordinace obsahu.',
            'Podpora řízení vzdělávací platformy s prvky umělé inteligence (Cura).',
            'Řízení projektů/úkolů pomocí Microsoft Planner a automatizace pravidelných úkolů pomocí Power Automate.',
            'Plánování sprintů, koordinace průběhu stand-up a retrospektiv.',
          ],
        },
      ],
    },
    {
      from: '02/2013',
      to: '12/2014',
      company: 'Deloitte',
      city: 'Brno',
      role: 'Senior process specialist',
      sections: [
        {
          bullets: [
            'Podpora implementace nového globálního imigračního projektu a stanovení nových procesů pro koordinaci napříč kancelářemi Deloitte po celém světě.',
            'Spolupráce s IT na přizpůsobení systémů a nástrojů provozním požadavkům a podpora technické stránky nového servisního modelu.',
            'Spolupráce se světovými kancelářemi, dodavateli a klienty při implementaci a zdokonalování procesů.',
            'Podpora dodržování smluvních podmínek, reportování KPI, příprava cenových nabídek, administrace a fakturace.',
            'Práce v globálním projektovém prostředí s různými místními požadavky a regulatorními omezeními.',
          ],
        },
      ],
    },
    {
      from: '01/2012',
      to: '12/2015',
      company: 'Tutor',
      city: 'Praha',
      role: 'Lektorka AJ a přípravných kurzů na VŠ (částečný úvazek)',
      sections: [
        {
          bullets: [
            'Příprava výukových kurzů a materiálů – obecné studijní předpoklady, logika, anglický jazyk.',
          ],
        },
      ],
    },
    {
      from: '01/2009',
      to: '12/2015',
      company: 'Scio.cz',
      city: 'Brno / Praha',
      role: 'Projektová pracovnice & lektorka sociálních věd (částečný úvazek)',
      sections: [
        {
          bullets: [
            'Tvorba projektu "Jak na jazyky".',
            'Výuka přípravných kurzů k přijímacím zkouškám na vysoké školy – obory ekonomie, EU, moderní historie a politologie.',
          ],
        },
      ],
    },
    {
      from: '11/2013',
      to: '01/2014',
      company: 'Miramare Language School s.r.o.',
      city: 'Brno',
      role: 'Lektor anglického jazyka (částečný úvazek)',
      sections: [
        {
          bullets: ['Výuka pomaturitních kurzů anglického jazyka.'],
        },
      ],
    },
    {
      from: '05/2013',
      to: '10/2013',
      company: 'Mendelova Univerzita v Brně',
      city: 'Brno',
      role: 'Překladatelka',
      sections: [
        {
          bullets: [
            'Překlad a korektura výukových materiálů pro projekt "Inovace bakalářských studijních programů Regionální rozvoj a Mezinárodní teritoriální studia" do anglického jazyka.',
          ],
        },
      ],
    },
    {
      from: '08/2012',
      to: '09/2012',
      company: 'Motorola Solutions',
      city: 'Brno',
      role: 'Customer Service Representative',
      sections: [
        {
          bullets: [
            'Zpracování objednávek, komunikace se zákazníky.',
            'Aktualizace zákaznických účtů a databáze.',
          ],
        },
      ],
    },
    {
      from: '2007',
      to: '2012',
      company: 'James Cook Languages',
      city: 'Brno',
      role: 'Lektorka anglického jazyka',
      sections: [
        {
          bullets: [
            'Výuka obecné/business angličtiny ve firmách, překlady, tlumočení.',
          ],
        },
      ],
    },
  ],
};

// About page skills content
export const skillsContent = {
  English: [
    {
      category: 'Project Management',
      sections: [
        {
          title: 'Project Management Experience',
          details: [
            {
              description:
                '10+ years of experience coordinating international projects, including Kanban-based delivery, stakeholder and supplier coordination, budgets, timelines, and risks. Experience supporting sprint planning, refinement, stand-ups, and retrospectives.',
              bullets: [
                'PRINCE2 Foundation',
                'Agile methodologies (Scrum, Kanban)',
                'CAPM (certification in progress)',
                'Microsoft Planner and Power Automate',
              ],
            },
          ],
        },
      ],
    },
    {
      category: 'Information Technology',
      sections: [
        {
          title: 'Frontend Development',
          details: [
            {
              subtitle: 'Coding Experience',
              description:
                'Solid intermediate-level skills in building responsive, interactive websites, gained through a 300-hour certified retraining program. Final project included a fully functional single-page application.',
              bullets: [
                'HTML5 & CSS3 – semantic markup, Flexbox, Grid',
                'JavaScript (ES6) – functions, DOM manipulation, events, fetch API',
                'ReactJS (v18) – components, hooks, state management',
                'Git & GitHub – version control, collaborative workflows',
                'VS Code – extensions, live server, debugging tools',
                'UX principles – accessibility, user-centered design basics',
              ],
            },
            {
              subtitle: 'Low-code / No-code Experience',
              description:
                'Familiar with building simple sites and workflows using platforms such as WordPress, Wix, or similar visual builders. Comfortable using drag-and-drop tools and integrating basic plugins.',
              bullets: [
                'WordPress – use of themes, templates, and plugins (forms, maps, widgets)',
                'SharePoint – creating and managing sites, lists, and libraries, JSON formatting and SPFx components',
                'Wix – building websites using drag-and-drop interface',
                'Webflow – building responsive websites visually',
              ],
            },
          ],
        },
        {
          title: 'Office Tools',
          details: [
            {
              subtitle: 'Microsoft Office',
              description:
                'Advanced proficiency in Microsoft Office suite, including creating structured documents, dynamic spreadsheets, and professional presentations. Extensive experience with communication and collaboration tools.',
              bullets: [
                'Word',
                'Excel',
                'PowerPoint',
                'Outlook',
                'Teams',
                'OneNote',
                'Power Automate',
              ],
            },
          ],
        },
        {
          title: 'Event Management Tools',
          details: [
            {
              subtitle: 'Registration Platforms & Tools',
              description:
                'Hands-on experience using digital tools for event registration, attendee tracking, and communication (e.g. Cvent, Google Forms, and in-house systems).',
              bullets: [],
            },
            {
              subtitle: 'Zoom',
              description:
                'Advanced user of Zoom for virtual events, including scheduling, moderating webinars, managing breakout rooms, screen sharing, and live polling.',
              bullets: [],
            },
          ],
        },
      ],
    },
    {
      category: 'Languages',
      sections: [
        {
          title: 'English',
          details: [
            {
              description:
                'Fluent in both spoken and written English. Used professionally on a daily basis in meetings, documentation, and correspondence.',
              bullets: [],
            },
          ],
        },
        {
          title: 'Czech',
          details: [
            {
              description: 'Native speaker with full professional proficiency.',
              bullets: [],
            },
          ],
        },
        {
          title: 'French',
          details: [
            {
              description:
                'Basic communication skills in spoken and written French.',
              bullets: [],
            },
          ],
        },
      ],
    },
  ],
  Czech: [
    {
      category: 'Projektové řízení',
      sections: [
        {
          title: 'Zkušenosti s projektovým řízením',
          details: [
            {
              description:
                'Více než deset let zkušeností s koordinací mezinárodních projektů, agilním řízením pomocí Kanbanu, spoluprací se zainteresovanými stranami a dodavateli, rozpočty, harmonogramy a riziky. Zkušenosti s podporou plánování sprintů, upřesňování úkolů, stand-upů a retrospektiv.',
              bullets: [
                'Certifikace PRINCE2 Foundation',
                'Agilní metodiky (Scrum, Kanban)',
                'CAPM (certifikace probíhá)',
                'MS Planner',
                'MS Power Automate',
              ],
            },
          ],
        },
      ],
    },
    {
      category: 'Informační technologie',
      sections: [
        {
          title: 'Frontend vývoj',
          details: [
            {
              subtitle: 'Zkušenosti s programováním',
              description:
                'Středně pokročilé dovednosti při tvorbě responzivních a interaktivních webů, získané během rekvalifikačního kurzu v rozsahu 300 hodin, zakončeného certifikátem a závěrečným projektem – jednostránkovou aplikací.',
              bullets: [
                'HTML5 & CSS3 – sémantické značkování, Flexbox, Grid',
                'JavaScript (ES6) – funkce, práce s DOM, události, fetch API',
                'ReactJS (v18) – komponenty, hooky, správa stavu',
                'Git & GitHub – verzování, týmová spolupráce',
                'VS Code',
                'UX principy – základy přístupnosti a designu zaměřeného na uživatele',
                'AI nástroje',
              ],
            },
            {
              subtitle: 'Zkušenosti s low-code / no-code',
              description:
                'Základy práce s vizuálními nástroji jako WordPress nebo Wix. Schopnost vytvářet jednoduché weby pomocí přetahování komponent a propojení s doplňky.',
              bullets: [
                'WordPress – využití šablon a doplňků (formuláře, mapy, widgety)',
                'SharePoint – vytváření a správa webů, seznamů a knihoven, formátování JSON a komponenty SPFx',
                'Wix – tvorba webů pomocí komponent',
                'Webflow – tvorba responzivních webů',
              ],
            },
          ],
        },
        {
          title: 'Kancelářské nástroje',
          details: [
            {
              subtitle: 'Microsoft Office',
              description:
                'Pokročilá znalost aplikací MS Office – tvorba dokumentů, tabulek s funkcemi, prezentací i práce s nástroji pro komunikaci a spolupráci.',
              bullets: [
                'Word',
                'Excel',
                'PowerPoint',
                'Outlook',
                'Teams',
                'OneNote',
                'Power Automate',
              ],
            },
          ],
        },
        {
          title: 'Nástroje pro správu eventů',
          details: [
            {
              subtitle: 'Registrační systémy a nástroje',
              description:
                'Zkušenosti s používáním nástrojů pro registraci účastníků a organizaci akcí (např. Cvent, Google Forms, interní systémy).',
              bullets: [],
            },
            {
              subtitle: 'Zoom',
              description:
                'Pokročilá uživatelská úroveň – plánování a moderování virtuálních konferencí, správa místností, sdílení obrazovky, průzkumy.',
              bullets: [],
            },
          ],
        },
      ],
    },
    {
      category: 'Jazyky',
      sections: [
        {
          title: 'Angličtina',
          details: [
            {
              description:
                'Plynulá znalost mluvené i psané angličtiny. Aktivně používána v práci – komunikace, e-maily, dokumentace.',
              bullets: [],
            },
          ],
        },
        {
          title: 'Čeština',
          details: [
            {
              description: 'Rodilý mluvčí, plná profesní znalost.',
              bullets: [],
            },
          ],
        },
        {
          title: 'Francouzština',
          details: [
            {
              description: 'Základní znalost mluvené i psané francouzštiny.',
              bullets: [],
            },
          ],
        },
      ],
    },
  ],
};

//About page education content
export const educationContent = {
  English: [
    {
      from: '09/2009',
      to: '06/2012',
      field: 'Economic Policy and International Relations',
      degree: "Master's degree",
      school: 'Masaryk University',
      faculty: 'Faculty of Economics and Administration',
      city: 'Brno',
    },
    {
      from: '09/2005',
      to: '06/2009',
      field: 'Political Science and International Relations',
      degree: "Bachelor's degree",
      school: 'Masaryk University',
      faculty: 'Faculty of Social Studies',
      city: 'Brno',
    },
    {
      from: '09/2011',
      to: '01/2012',
      field: 'Political Science, International Relations and Security Studies',
      degree: 'Erasmus Mundus Programme',
      school: 'University of Haifa',
      faculty: 'International School',
      city: 'Haifa, Israel',
    },
    {
      from: '01/2007',
      to: '06/2007',
      field: 'Political Science',
      degree: 'Erasmus Programme',
      school: 'University of Bergen',
      faculty: 'Faculty of Social Sciences',
      city: 'Bergen, Norway',
    },
  ],
  Czech: [
    {
      from: '09/2009',
      to: '06/2012',
      field: 'Hospodářská politika a mezinárodní vztahy',
      degree: 'Magisterské studium',
      school: 'Masarykova univerzita',
      faculty: 'Ekonomicko-správní fakulta',
      city: 'Brno',
    },
    {
      from: '09/2005',
      to: '06/2009',
      field: 'Politologie a mezinárodní vztahy',
      degree: 'Bakalářské studium',
      school: 'Masarykova univerzita',
      faculty: 'Fakulta sociálních studií',
      city: 'Brno',
    },
    {
      from: '09/2011',
      to: '01/2012',
      field: 'Politologie, mezinárodní vztahy a bezpečnostní studia',
      degree: 'Erasmus Mundus Programme',
      school: 'University of Haifa',
      faculty: 'International School',
      city: 'Haifa, Izrael',
    },
    {
      from: '01/2007',
      to: '06/2007',
      field: 'Politologie',
      degree: 'Erasmus Programme',
      school: 'University of Bergen',
      faculty: 'Faculty of Social Sciences',
      city: 'Bergen, Norsko',
    },
  ],
};

// About page certifications content
export const certificationsContent = {
  English: [
    {
      year: '2026 (expected)',
      name: 'CAPM certification',
      issuer: 'Exam preparation in progress; audit/exam expected in 2026',
    },
    {
      year: '2022',
      name: 'Digital Academy: Web',
      issuer: 'Czechitas',
      description:
        '300-hour programme covering HTML/CSS, JavaScript, React, Git and UX/UI',
    },
    {
      year: '2017',
      name: 'PRINCE2 Foundation',
      issuer: 'Tayllorcox / Axelos',
    },
  ],
  Czech: [
    {
      year: '2026 (předpoklad)',
      name: 'Certifikace CAPM',
      issuer:
        'Probíhá příprava na zkoušku; audit/zkouška se očekává v roce 2026',
    },
    {
      year: '2022',
      name: 'Digitální akademie: Web',
      issuer: 'Czechitas',
      description:
        '300hodinový program zahrnující HTML/CSS, JavaScript, React, Git a UX/UI',
    },
    {
      year: '2017',
      name: 'PRINCE2 Foundation',
      issuer: 'Tayllorcox / Axelos',
    },
  ],
};
