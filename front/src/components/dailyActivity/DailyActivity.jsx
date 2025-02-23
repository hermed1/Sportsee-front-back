import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './DailyActivity.css';

// const data = [
//   { day: 1, weight: 68, calories: 500 },
//   { day: 2, weight: 69, calories: 450 },
//   { day: 3, weight: 70, calories: 400 },
//   { day: 4, weight: 69.5, calories: 520 },
//   { day: 5, weight: 68.8, calories: 480 },
//   { day: 6, weight: 68.8, calories: 480 },
//   { day: 7, weight: 68.8, calories: 480 },
//   { day: 8, weight: 68.8, calories: 480 },
//   { day: 9, weight: 68.8, calories: 480 },
//   { day: 10, weight: 68.8, calories: 480 },
// ];

// Tooltip personnalisé
// const CustomTooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className='dailyActivity__tooltip'>
//         <p className='dailyActivity__tooltip-item'>{`Poids : ${payload[0].value} kg`}</p>
//         <p className='dailyActivity__tooltip-item'>{`Calories : ${payload[1].value} kCal`}</p>
//       </div>
//     );
//   }
//   return null;
// };
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
  // Fusion de la légende directement dans le composant
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
  console.log('Données reçues pour le graphique :', data);

  return (
    <div className='dailyActivity'>
      <h3 className='dailyActivity__title'>Activité quotidienne</h3>
      <BarChart
        width={550}
        height={280}
        data={data}
        margin={{ top: 60, right: 30, left: 20, bottom: 30 }}
        barGap={6}
      >
        <CartesianGrid strokeDasharray='3 3' vertical={false} />
        {/* <XAxis
          dataKey='day'
          tickLine={false}
          tickFormatter={(_, index) => index + 1}
        /> */}
        <XAxis
          dataKey='day'
          type='category' // On force l'axe en mode "catégorie"
          tickLine={false}
          tickFormatter={(_, index) => index + 1}
          padding={{ left: -30, right: -30 }} // Ajuste éventuellement ces valeurs
        />

        <YAxis
          yAxisId='left'
          orientation='right'
          domain={['dataMin-1', 'dataMax+1']}
          axisLine={false}
          tickFormatter={(value) => Math.round(value)}
          tick={{ dx: 30 }} // Décale le texte de 20px vers la gauche
          tickLine={false} // Désactive les petits traits de graduations
        />
        <YAxis
          yAxisId='right'
          orientation='right'
          domain={['dataMin-50', 'dataMax+50']}
          hide={true}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend content={renderLegend} />
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
    </div>
  );
};

export default DailyActivity;
