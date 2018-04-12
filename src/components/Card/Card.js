import React from 'react';

export const Card = ({
  name,
  founded,
  seats,
  titles,
  coatOfArms,
  ancestralWeapons,
  words,
  swornMembers
}) => {
  return (
    <article className='Card'>
      <h2>{name}</h2>
      <h1>Founded: {founded || 'N/A'}</h1>
      <p>Seats: {seats}</p>
        <p>Titles: {titles}</p>
        <p>Coat of Arms: {coatOfArms}</p>
        <p>Ancestral Weapons: {ancestralWeapons}</p>
        <p>{words}</p>
        {swornMembers}
    </article>
  );
};


