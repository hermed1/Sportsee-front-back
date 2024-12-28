import React from 'react';
import './ScoreChart.css';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

const ScoreChart = ({ score }) => {
  const formattedScore = [{ name: 'Score', value: score * 100 }];

  return (
    <div className='score-chart'>
      <h2>Score</h2>
      <RadialBarChart
        width={258}
        height={263}
        innerRadius='90%'
        outerRadius='80%'
        data={formattedScore}
        startAngle={180}
        endAngle={-180}
      >
        {/* Barre du score */}
        <RadialBar
          minAngle={15}
          clockWise
          dataKey='value'
          cornerRadius={10}
          fill='#FF0000'
        />
        {/* Axe invisible pour centrer */}
        <PolarAngleAxis
          type='number'
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
      </RadialBarChart>
      {/* Texte centré */}
      <div className='score-text'>
        <p className='score-value'>{formattedScore[0].value}%</p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    </div>
  );
};

export default ScoreChart;
