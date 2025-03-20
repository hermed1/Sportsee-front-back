import React from 'react';
import './ScoreChart.css';
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

const ScoreChart = ({ score }) => {
  const formattedScore = [{ name: 'Score', value: score * 100 }];

  return (
    <ResponsiveContainer width='30%' height='100%' className={'score-chart'}>
      <h2 className='score'>Score</h2>
      <RadialBarChart
        innerRadius='90%'
        outerRadius='80%'
        data={formattedScore}
        startAngle={180}
        endAngle={-180}
      >
        <RadialBar
          minAngle={15}
          clockWise
          dataKey='value'
          cornerRadius={10}
          fill='#FF0000'
        />
        <PolarAngleAxis
          type='number'
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
      </RadialBarChart>
      <div className='score-text'>
        <p className='score-value'>{formattedScore[0].value}%</p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    </ResponsiveContainer>
  );
};

export default ScoreChart;
