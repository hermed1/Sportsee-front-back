import React from 'react';
import './DisplayName.css';

const DisplayName = ({ userName }) => {
  return (
    <div>
      <p className='welcomeMessage'>
        Bonjour <span className='welcomeMessage__firstName'> {userName} </span>
      </p>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default DisplayName;
