import React from 'react';
import { string, array } from 'prop-types';

export const clickedHouse = () => {
  console.log('click!');
  
}

export const Card = ({
  name,
  founded,
  seats,
  titles,
  coatOfArms,
  ancestralWeapons,
  words,
  //swornMembers
}) => {
  return (
    <article className='Card' onClick={this.clickedHouse}>
      <h2>{name}</h2>
      <h1>Founded: {founded || 'N/A'}</h1>
      <p>Seats: {seats}</p>
        <p>Titles: {titles}</p>
        <p>Coat of Arms: {coatOfArms}</p>
        <p>Ancestral Weapons: {ancestralWeapons}</p>
        <p>{words}</p>
        
    </article>
  );
};

Card.propTypes = {
  name: string,
  founded: string,
  seats: array,
  titles: array,
  coatOfArms: string,
  ancestralWeapons: array,
  words: string,
  swornMembers: array
};
