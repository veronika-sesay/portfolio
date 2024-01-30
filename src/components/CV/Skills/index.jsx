import React from 'react';
import { useOutletContext } from 'react-router-dom';

export const Skills = () => {
  const [langVersion, setLangVersion] = useOutletContext();

  let content = {
    English: {
      IT: [
        'IT',
        'advanced beginner in creation of responsive and interactive websites - skills acquired in a 300-hour certified course completed by an exam and a final project:',
        'HTML5/CSS3',
        'JavaScript (ES6)',
        'ReactJS (v18)',
        'Git & GitHub',
        'VS Code',
        'UX',
        'Wordpress – work with templates and widgets (forms, maps)',
        'advanced user knowledge of MS Office tools (Word, Excel, Power Point, Outlook, Teams)',
        'use of registration tools and apps for event management',
        'advanced experience with Zoom for virtual conferences/webinars',
      ],
      Languages: [
        'Languages',
        'English - fluent spoken and writen, use on daily basis',
        'French - basic spoken and written',
        'Czech - mother tongue',
      ],
      Other: [
        'Other',
        'project management:',
        'Prince 2 certificate',
        'agile methods (kanban)',
        'communication skills',
        'teaching',
        'specialized translations',
      ],
    },
    Czech: {
      IT: [
        'IT',
        'mírně pokročilá znalost nástrojů pro tvorbu responzivního a interaktivního webu v rozsahu rekvalifikačního kurzu (300 hod) zakončeného certifikátem a závěrečným projektem:',
        'HTML5/CSS3',
        'JavaScript (ES6)',
        'ReactJS (v18)',
        'Git & GitHub',
        'VS Code',
        'UX',
        'Wordpress – práce se šablonami a widgety (formuláře, mapy)',
        'pokročilá znalost MS Office (Word, Excel, Power Point, Outlook, Teams)',
        'použití registračních nástrojů a aplikací pro event management',
        'pokročilá znalost Zoom pro virtuální konference/webináře',
      ],
      Languages: [
        'Jazyky',
        'Angličtina – plynně slovem i písmem, použití na denní bázi',
        'Francouzština – základy slovem i písmem',
        'Čeština – rodný jazyk',
      ],
      Other: [
        'Další dovednosti',
        'projektový management:',
        'certifikace Prince 2',
        'agilní metody (kanban)',
        'komunikační dovednosti',
        'lektorství',
        'odborné překlady',
      ],
    },
  };

  langVersion === 'Czech'
    ? (content = content.Czech)
    : (content = content.English);

  return (
    <div className="skills">
      <div className="cv-item">
        <h3>{content.IT[0]}</h3>
        <ul>
          <li>{content.IT[1]}</li>
          <ul>
            <li>{content.IT[2]}</li>
            <li>{content.IT[3]}</li>
            <li>{content.IT[4]}</li>
            <li>{content.IT[5]}</li>
            <li>{content.IT[6]}</li>
            <li>{content.IT[7]}</li>
            <li>{content.IT[8]}</li>
          </ul>
          <li>{content.IT[9]}</li>
          <li>{content.IT[10]}</li>
          <li>{content.IT[11]}</li>
        </ul>
      </div>
      <div className="cv-item">
        <h3>{content.Languages[0]}</h3>
        <ul>
          <li>{content.Languages[1]}</li>
          <li>{content.Languages[2]}</li>
          <li>{content.Languages[3]}</li>
        </ul>
      </div>
      <div className="cv-item">
        <h3>{content.Other[0]}</h3>
        <ul>
          <li>{content.Other[1]}</li>
          <ul>
            <li>{content.Other[2]}</li>
            <li>{content.Other[3]}</li>
          </ul>
          <li>{content.Other[4]}</li>
          <li>{content.Other[5]}</li>
          <li>{content.Other[6]}</li>
        </ul>
      </div>
    </div>
  );
};
