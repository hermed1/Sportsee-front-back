import React from 'react';
import './ActivityType.css';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

const ActivityType = ({ data }) => {
  return (
    <div className='radarChart'>
      <RadarChart
        cx='50%'
        cy='50%'
        outerRadius='50%'
        width={190}
        height={195}
        data={data}
      >
        {/* Grille et axes */}
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey='kind'
          tick={{ fill: 'white', fontSize: 12 }}
          tickLine={true} // afficher la petite barre de graduation
          tickSize={18} // taille de cette barre
        />

        {/* Radar rouge */}
        <Radar
          dataKey='value'
          stroke='#FF0101'
          fill='#FF0101'
          fillOpacity={0.7}
        />
      </RadarChart>
    </div>
  );
};

export default ActivityType;
