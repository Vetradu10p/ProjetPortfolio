import React from 'react';


const Card = ({ element }) => (
  <div className="Card">
    <a href={element.url} target="_blank" rel="noopener noreferrer">
      <img className='imgCard' src={element.cover} alt={element.title} />
    </a>
    <h3 className='H3Card'>{element.title}</h3>
    <p className='PCard'>{element.description}</p>
    <a className='ButtonCard' href={element.url} target="_blank" rel="noopener noreferrer">Voir le projet</a>
  </div>
);

export default Card;
