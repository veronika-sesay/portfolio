import React from 'react';
import { useOutletContext } from 'react-router-dom';

export const Courses = () => {
  const [langVersion, setLangVersion] = useOutletContext();

  let content = {
    English: {
      DA: [
        'Digital academy: Web',
        'Czechitas / 2022',
        '300 learning-hour certified requalification course completed by a project and final exam ',
        'HTML/CSS, JavaScript, React, Git, UX/UI',
        'the final project "Freaks and Comrads" was awarded the best community contribution prize',
      ],
      Prince: [
        'Prince 2 Foundation',
        'Tayllorcox (Axelos) / 2017',
        'three-day certified course completed by a final exam',
        'foundations of the Prince 2 method - phases of projects, team roles responsibility delegation, identification and elimination of risks',
      ],
    },
    Czech: {
      DA: [
        'Digitální akademie: Web',
        'Czechitas / 2022',
        'rekvalifikační kurz v rozsahu 300 hodin zakončený zkouškou, projektem a certifikátem',
        'HTML/CSS, JavaScript, React, Git, UX/UI',
        'závěrečný projekt Máničky a soudruzi oceněn za největší společenský přesah',
      ],
      Prince: [
        'Prince 2 Foundation',
        'Tayllorcox (Axelos) / 2017',
        'třídenní kurz zakončený zkouškou a certifikátem',
        'základy metodiky Prince 2 – fáze projektu, role v týmu, delegování odpovědnosti, identifikace a eliminace rizik',
      ],
    },
  };

  langVersion === 'Czech'
    ? (content = content.Czech)
    : (content = content.English);

  return (
    <>
      <div className="cv-item">
        <h3>{content.DA[0]}</h3>
        <div className="company">{content.DA[1]}</div>
        <ul>
          <li>{content.DA[2]}</li>
          <li>{content.DA[3]}</li>
          <li>{content.DA[4]}</li>
        </ul>
      </div>
      <div className="cv-item">
        <h3>{content.Prince[0]}</h3>
        <div className="company">{content.Prince[1]}</div>
        <ul>
          <li>{content.Prince[2]}</li>
          <li>{content.Prince[3]}</li>
        </ul>
      </div>
    </>
  );
};
