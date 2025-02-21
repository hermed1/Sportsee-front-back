import React from 'react';
import './Macros.css';
import Macro from '../macro/Macro';
import calories from '../../assets/calories.png';
import proteines from '../../assets/proteines.png';
import glucides from '../../assets/glucides.png';
import lipides from '../../assets/lipides.png';
const Macros = ({ macros }) => {
  const caloriesCount = macros?.calorieCount;
  const proteinCount = macros?.proteinCount;
  const carbohydrateCount = macros?.carbohydrateCount;
  const lipidCount = macros?.lipidCount;

  console.log(caloriesCount, proteinCount, carbohydrateCount, lipidCount);
  return (
    <div>
      <Macro
        imgPath={calories}
        macroType='calories'
        macroCount={caloriesCount}
      />
      <Macro
        imgPath={proteines}
        macroType='protéines'
        macroCount={proteinCount}
      />
      <Macro
        imgPath={glucides}
        macroType='glucides'
        macroCount={carbohydrateCount}
      />
      <Macro imgPath={lipides} macroType='lipides' macroCount={lipidCount} />
    </div>
  );
};

export default Macros;
