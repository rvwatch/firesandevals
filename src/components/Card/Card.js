import React from 'react';

export const Card = ({
  name,
  founded,
  seats,
  titles,
  coatOfArms,
  ancestralWeapons,
  words
}) => {
  return (
    <article className='Card'>
      <h2>{name}</h2>
      <h1>{founded}</h1>
      <ul>
        <li>{seats}</li>
        <li>{titles}</li>
        <li>{coatOfArms}</li>
        <li>{ancestralWeapons}</li>
        <li>{words}</li>
      </ul>
    </article>
  );
};


