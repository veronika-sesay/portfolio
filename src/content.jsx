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
    intro:
      'Welcome! I am quite new to front-end development, but aleady in love. I am looking for new job opportunities as well as freelance projects. Find out more about me...',
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
    intro:
      'Vítejte! Ve světe front-endového vývoje jsem sice nová, ale již jsem mu propadla. Hledám nové pracovní příležitosti i samostatné projekty. Pojďte se o mně dozvědět více...',
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
    text: 'I am a passionate web developer with a love for creating dynamic and user-friendly applications. My journey in web development began with a curiosity about how websites work, and it has since evolved into a fulfilling career.',
  },
  Czech: {
    mainTitle: 'O mně',
    skillsTitle: 'Dovednosti',
    experienceTitle: 'Zkušenosti',
    educationTitle: 'Vzdělání',
    text: 'Jsem mladá a vášnivá webová vývojářka. Moje cesta do světa webového vývoje začala zájmem o to, jak fungují webové stránky, a od té doby se stala osudným povoláním.',
  },
};

// About page experience content
export const jobsContent = {
  English: [
    {
      from: '01/2024',
      to: 'present',
      company: 'Deloitte Global',
      city: 'Prague',
      role: 'Learning Research & Experiments Specialist',
      sections: [
        {
          title: 'Frontend Development',
          bullets: [,],
        },
        {
          title: 'Learning Design & Development',
          bullets: [,],
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
            'Complete planning and delivery of Global Audit & Assurance learning events across EMEA, Americas, and Asia-Pacific regions.',
            '10 – 15 multi-program events a year, up to 300 participants per event.',
            'Agile project management (Kanban).',
            'venue and other vendor research and contracting',
            'communication with key stakeholders',
            'managing technical support teams',
            'finance management and budget creation',
            'creation and implementation of processes to ensure transparency, cost and time efficiency',
            'project evaluation',
          ],
        },
        {
          title: 'Virtual and IT projects',
          bullets: [
            'Transformation of learning events to virtual environment: virtual conferences, webinars, mobile apps for events, hybrid meetings.',
            'Creation of internal websites on the Zoomforth platform using templates and HTML/CSS.',
            'UX design and management of internal Global Audit & Assurance Learning website',
            'MS Teams communication channel - creating posts, graphic banners, communicaiton calendar',
            'management of educational platform with AI features (Cura)',
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
            'Realization of a new global immigration project - Global Immigration Services Centre',
            'Creation and implementation of new processes, day-to-day communication with key stakeholders - Deloitte offices, vendors and clients',
            'Contract terms compliance check and KPI reporting',
            'RFP preparation, administration and invoicing',
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
            'Preparation of educational courses and materials',
            'Tutoring',
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
            'Creation of the project "How to learn foreign languages"',
            'Teaching of preparatory courses for university entrance exams – economics, EU, modern history, political science',
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
          bullets: ['Teaching English to postgraduate students'],
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
            'Translation of university textbooks into English and proofreading within the project of Innovation of the bachelor study programs in Regional Development and International Territorial Studies',
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
            'Processing orders in English - communication with customers',
            'Updating customer accounts and database',
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
            'Teaching general/business English in companies, translations, interpreting',
          ],
        },
      ],
    },
  ],
  Czech: [
    {
      from: '01/2024',
      to: 'současnost',
      company: 'Deloitte Global',
      city: 'Prague',
      role: 'Learning Research & Experiments Specialist',
      sections: [
        {
          title: 'Frontend vývoj',
          bullets: [],
        },
        {
          title: 'Vzdělávací design a vývoj',
          bullets: [],
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
            'Kompletní plánování a realizace vzdělávacích akcí Global Audit & Assurance v regionech EMEA, Amerika a Asie-Pacifik.',
            '10–15 víceprogramových akcí ročně, až 300 účastníků na akci.',
            'agilní řízení projektů (kanban metoda)',
            'vyhledávání obchodních partnerů a uzavírání smluv',
            'komunikace s klíčovými stakeholdery',
            'řízení týmů technické podpory',
            'správa financí a tvorba rozpočtu',
            'vytváření a úprava procesů s cílem zajistit transparentnost, efektivitu nákladů a času',
            'evaluace projektů',
          ],
        },
        {
          title: 'Virtuální a IT projekty',
          bullets: [
            'Převod vzdělávacích akcí do virtuálního prostředí: virtuální konference, webináře, mobilní aplikace, hybridní schůzky.',
            'Tvorba interních webů na platformě Zoomforth pomocí šablon a HTML/CSS.',
            'UX design a správa obsahu interních webových stránek Global A&A Learning',
            'komunikační kanál na MS Teams – tvorba příspěvků, grafických bannerů, komunikačního kalendáře',
            'management vzdělávací platformy s prvky umělé inteligence (Cura)',
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
            'realizace nového globálního imigračního projektu – Global Immigration Services Centre',
            'vytváření a implementace nových procesů, každodenní komunikace se světovými kancelářemi Deloitte, dodavateli a klienty',
            'kontrola dodržování smluvních podmínek a reportování KPI',
            'příprava cenových nabídek, administrace a fakturace',
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
            'příprava výukových kurzů a materiálů – obecné studijní předpoklady, logika, anglický jazyk',
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
            'tvorba projektu "Jak na jazyky"',
            'výuka přípravných kurzů k přijímacím zkouškám na vysoké školy – obory ekonomie, EU, moderní historie a politologie',
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
          bullets: ['výuka pomaturitních kurzů anglického jazyka'],
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
            'překlad a korektura výukových materiálů pro projekt "Inovace bakalářských studijních programů Regionální rozvoj a Mezinárodní teritoriální studia" do anglického jazyka',
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
            'Processing orders in English - communication with customers',
            'Updating customer accounts and database',
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
            'výuka obecné/business angličtiny ve firmách, překlady, tlumočení',
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
      category: 'IT',
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
              bullets: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Teams'],
            },
          ],
        },
        {
          title: 'Event Management Tools',
          details: [
            {
              subtitle: 'Registration Platforms & Tools',
              description:
                'Hands-on experience using digital tools for event registration, attendee tracking, and communication (e.g. Eventbrite, Google Forms, and in-house systems).',
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
    {
      category: 'Project Management',
      sections: [
        {
          title: 'Project Management Experience',
          details: [
            {
              description:
                'Practical experience managing projects in international and multicultural teams. Skilled in using both traditional and agile methodologies including Scrum basics and Kanban boards.',
              bullets: [
                'PRINCE2 Foundation certificate – structured project management framework',
                'Agile methods – Kanban board organization, basic Scrum roles and events',
              ],
            },
          ],
        },
      ],
    },
  ],
  Czech: [
    {
      category: 'IT',
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
                'VS Code – rozšíření, Live Server, ladění',
                'UX principy – základy přístupnosti a designu zaměřeného na uživatele',
                'WordPress – práce s šablonami, pluginy a widgety (formuláře, mapy)',
              ],
            },
            {
              subtitle: 'Zkušenosti s low-code / no-code',
              description:
                'Základy práce s vizuálními nástroji jako WordPress nebo Wix. Schopnost vytvářet jednoduché weby pomocí přetahování komponent a propojení s doplňky.',
              bullets: [],
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
              bullets: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Teams'],
            },
          ],
        },
        {
          title: 'Nástroje pro správu akcí',
          details: [
            {
              subtitle: 'Registrační systémy a nástroje',
              description:
                'Zkušenosti s používáním nástrojů pro registraci účastníků a organizaci akcí (např. Eventbrite, Google Forms, interní systémy).',
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
    {
      category: 'Projektové řízení',
      sections: [
        {
          title: 'Zkušenosti s projektovým řízením',
          details: [
            {
              description:
                'Praktické zkušenosti s řízením projektů v mezinárodním prostředí. Znalost tradičních i agilních metod řízení včetně základů Scrumu a práce s Kanban tabulemi.',
              bullets: [
                'PRINCE2 Foundation certifikát – metodika projektového řízení',
                'Agilní řízení – organizace práce pomocí Kanban, základní role a události ve Scrumu',
              ],
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
      to: '06/2019',
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
      degree: 'magisterské studium',
      school: 'Masarykova univerzita',
      faculty: 'Ekonomicko-správní fakulta',
      city: 'Brno',
    },
    {
      from: '09/2005',
      to: '06/2009',
      field: 'Politologie a mezinárodní vztahy',
      degree: 'bakalářské studium',
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
