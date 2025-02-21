import React from 'react';
import './LeftBar.css';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className='leftBar__icons'>
        <div className='leftBar__icon__container'>
          <img src={icon1} alt='icon1' className='leftBar__icon' />
        </div>
        <div className='leftBar__icon__container'>
          <img src={icon2} alt='icon2' className='leftBar__icon' />
        </div>
        <div className='leftBar__icon__container'>
          <img src={icon3} alt='icon3' className='leftBar__icon' />
        </div>
        <div className='leftBar__icon__container'>
          <img src={icon4} alt='icon4' className='leftBar__icon' />
        </div>
      </div>
      <small className='leftBar__copyright'>Copyright SportSee 2025</small>
    </div>
  );
};

export default LeftBar;
