import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import './DailyActivity.css';

const DailyActivity = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    // "active" et "payload" sont des propriétés passées par le composant Tooltip de Recharts.
    // "active" est true si la souris survole un point du graphique
    // "payload" contient les données associées au point survolé
    if (active && payload && payload.length === 2) {
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

  // Fonction de rendu de la légende personnalisée du graphique
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
      <ResponsiveContainer
        className='dailyActivity__container'
        width='100%'
        height='100%'
      >
        <Legend content={renderLegend} />
        {/* BarChart est le conteneur principal du graphique en barres */}
        <BarChart
          data={data}
          margin={{ top: 60, right: 30, left: 20, bottom: 30 }}
          barGap={6}
        >
          {/* CartesianGrid ajoute une grille de fond pour faciliter la lecture des valeurs */}
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis
            // dataKey='day':Indique que pour cet axe, on utilisera la valeur de la propriété "day" de chaque élément du tableau de données.
            dataKey='day'
            // Précise que l'axe représente des catégories (texte) plutôt que des valeurs numériques.
            type='category'
            // Ne dessine pas les petites lignes (ticks) sur l'axe.
            tickLine={false}
            tickFormatter={(_, index) => index + 1}
            padding={{ left: -30, right: -30 }}
            // Définit la couleur de la ligne de l'axe.
            stroke='#DEDEDE'
            //Définit la couleur du texte des ticks
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
          {/* Barre pour afficher les valeurs de poids */}
          <Bar
            yAxisId='left'
            dataKey='kilogram'
            fill='black'
            name='Poids (kg)'
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
          {/* Barre pour afficher les calories brûlées */}
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
