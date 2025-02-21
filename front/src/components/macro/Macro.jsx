import React from 'react';
import './Macro.css';

const Macro = ({ imgPath, macroType, macroCount }) => {
  return (
    <div className='macro'>
      <img src={imgPath} alt='icône Macro' className='macro__image' />
      <div className='macro__infos'>
        <p className='macro__value'>
          {' '}
          {`${macroCount}${macroType === 'calories' ? 'kCal' : 'g'}`}
        </p>
        <p className='macro__type'>{macroType}</p>
      </div>
    </div>
  );
};

export default Macro;
