import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer, // <-- à importer
} from 'recharts';
import './DailyActivity.css';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length >= 2) {
    return (
      <div className='dailyActivity__tooltip'>
        <p className='dailyActivity__tooltip-item'>{`${
          payload[0]?.value ?? ''
        } kg`}</p>
        <p className='dailyActivity__tooltip-item'>{`${
          payload[1]?.value ?? ''
        } kCal`}</p>
      </div>
    );
  }
  return null;
};

const DailyActivity = ({ data }) => {
  const renderLegend = () => {
    return (
      <div className='dailyActivity__legend'>
        <span className='dailyActivity__legend-item'>
          <span className='dailyActivity__legend-dot dailyActivity__legend-dot--black'></span>
          Poids (kg)
        </span>
        <span className='dailyActivity__legend-item'>
          <span className='dailyActivity__legend-dot dailyActivity__legend-dot--red'></span>
          Calories brûlées (kCal)
        </span>
      </div>
    );
  };

  return (
    <div className='dailyActivity'>
      <h3 className='dailyActivity__title'>Activité quotidienne</h3>
      {/* On fixe la hauteur pour que le ResponsiveContainer ne soit pas "à 0" */}
      {/* <div

      // style={{ width: '100%', height: 280 }}
      > */}
      <ResponsiveContainer
        className='dailyActivity__container'
        width='100%'
        height={280}
      >
        <Legend content={renderLegend} />
        <BarChart
          data={data}
          margin={{ top: 60, right: 30, left: 20, bottom: 30 }}
          barGap={6}
        >
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis
            dataKey='day'
            type='category'
            tickLine={false}
            tickFormatter={(_, index) => index + 1}
            padding={{ left: -30, right: -30 }}
            stroke='#DEDEDE'
            tick={{ fill: '#9B9EAC' }}
          />
          <YAxis
            yAxisId='left'
            orientation='right'
            domain={['dataMin-1', 'dataMax+1']}
            axisLine={false}
            tickFormatter={(value) => Math.round(value)}
            tick={{ dx: 30 }}
            tickLine={false}
          />
          <YAxis yAxisId='right' orientation='right' hide />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId='left'
            dataKey='kilogram'
            fill='black'
            name='Poids (kg)'
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId='right'
            dataKey='calories'
            fill='red'
            name='Calories brûlées (kCal)'
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
    // </div>
  );
};

export default DailyActivity;
