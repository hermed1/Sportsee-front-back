import React from 'react';
import './Macro.css';

const Macro = ({ imgPath, macroType, macroCount, lastMacroClass }) => {
  return (
    <div className={`macro ${lastMacroClass ? lastMacroClass : ''}`}>
      <img src={imgPath} alt='icône Macro' className='macro__image' />
      <div className='macro__infos'>
        {/* <p className='macro__value'>
          {' '}
          {`${macroCount}${macroType === 'calories' ? 'kCal' : 'g'}`}
        </p> */}
        {/* <p className='macro__value'>
          {macroType === 'calories'
            ? `${macroCount?.toString()[0] ?? '…'},${
                macroCount?.toString().slice(1) ?? '…'
              }kCal`
            : `${macroCount}g`}
        </p> */}
        <p className='macro__value'>
          {
            // Si le type est "calories", on formate la valeur avec une virgule
            macroType === 'calories'
              ? `${
                  // Prend le premier chiffre de macroCount, ou affiche "…" si indéfini
                  macroCount?.toString()[0] ?? '…'
                },${
                  // Prend le reste de la chaîne, ou affiche "…" si indéfini
                  macroCount?.toString().slice(1) ?? '…'
                }kCal`
              : // Sinon, affiche macroCount suivi de "g"
                `${macroCount}g`
          }
        </p>

        <p className='macro__type'>{macroType}</p>
      </div>
    </div>
  );
};

export default Macro;
