import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { notFoundNote } from '../../content';

export const NotFound = () => {
  const [langVersion] = useOutletContext();
  const content =
    langVersion === 'Czech' ? notFoundNote.Czech : notFoundNote.English;

  return (
    <div>
      <h1>{content.notFoundNote}</h1>
    </div>
  );
};
