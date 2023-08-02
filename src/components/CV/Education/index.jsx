import React from 'react';
import { useOutletContext } from 'react-router-dom';

export const Education = () => {
  const [langVersion, setLangVersion] = useOutletContext();

  let content = {
    English: {
      Mgr: [
        "Master's degree",
        'Economic Policy and International Relations',
        'Masaryk University / Faculty of Economics and Administration / 2009 - 2012',
      ],
      Bc: [
        "Bachelor's degree",
        'Political Science and International Relations',
        'Masaryk University / Faculty of Social Studies / 2005 - 2009',
      ],
      International: [
        'Study programs abroad:',
        'University of Haifa (Israel) – International school / Erasmus Mundus program / 09/2011 – 01/2012',
        'University of Bergen (Norway) – Faculty of Social Sciences / Erasmus program / 01/2007 – 06/2007',
      ],
    },
    Czech: {
      Mgr: [
        'Magisterské studium',
        'Hospodářská politika a mezinárodní vztahy',
        'Masarykova Univerzita / Ekonomicko-správní fakulta / 2009 – 2012',
      ],
      Bc: [
        'Bakalářské studium',
        'Politologie a mezinárodní vztahy',
        'Masarykova Univerzita / Fakulta sociálních studií / 2005 – 2009',
      ],
      International: [
        'Zahraniční stáže:',
        'University of Haifa (Izrael) – International school / Erasmus Mundus program / 09/2011 – 01/2012',
        'University of Bergen (Norsko) – Faculty of Social Sciences / Erasmus program / 01/2007 – 06/2007',
      ],
    },
  };

  langVersion === 'Czech'
    ? (content = content.Czech)
    : (content = content.English);

  return (
    <>
      <div className="cv-item">
        <h3>{content.Mgr[0]}</h3>
        <div className="company">{content.Mgr[1]}</div>
        <ul>
          <li>{content.Mgr[2]}</li>
        </ul>
      </div>
      <div className="cv-item">
        <h3>{content.Bc[0]}</h3>
        <div className="company">{content.Bc[1]}</div>
        <ul>
          <li>{content.Bc[2]}</li>
        </ul>
      </div>
      <div className="cv-item">
        <h3>{content.International[0]}</h3>
        <ul>
          <li>{content.International[1]}</li>
          <li>{content.International[2]}</li>
        </ul>
      </div>
    </>
  );
};
