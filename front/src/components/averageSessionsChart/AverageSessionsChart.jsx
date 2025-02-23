import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Rectangle,
} from 'recharts';
import './AverageSessionsChart.css';

const AverageSessionsChart = ({ data }) => {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  // Parcourt chaque élément du tableau `data`
  // Pour chaque élément, crée un nouvel objet en copiant toutes les propriétés existantes (`...session`)
  // Et remplace la valeur de `day` (numéro) par la lettre correspondante grâce au tableau `days`
  const transformedData = data.map((session) => ({
    ...session, // Copie toutes les propriétés existantes de l'objet `session`
    day: days[session.day - 1], // Remplace `day` (ex : 1) par la valeur correspondante de `days` (ex : 'L')
  }));

  const CustomTooltip = ({ active, payload }) => {
    // Vérifie si la souris est actuellement sur un point du graphique
    // active : Booléen (true/false) fourni par Recharts
    // payload : Tableau contenant les données du point survolé (exemple : [{ value: 45 }])

    if (active && payload && payload.length) {
      // Si la souris est sur un point ET qu'on a des données dans payload

      return (
        <div>
          {/* Affiche la valeur du point sous forme de texte, par exemple "45 min" */}
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }

    // Si la souris n'est pas sur un point ou si payload est vide,
    // ne retourne rien (pas de tooltip affiché).
    return null;
  };

  const CustomCursor = ({ points, width }) => {
    // Vérifie si `points` est valide
    if (!points || points.length === 0) return null;

    // Récupère la position horizontale (X) du point survolé
    const x = points[0]?.x;

    return (
      <Rectangle
        fill='hsla(0, 0%, 0%, 9.75%)' // Couleur semi-transparente
        x={x} // Position horizontale
        y={0} // Commence tout en haut (y fixe à 0)
        width={width} // Largeur donnée par Recharts
        height={263} // Hauteur fixe correspondant à ton LineChart
      />
    );
  };

  return (
    <div className='averageSessionsChart__container'>
      <div className='averageSessionsChart__title'>
        Durée moyenne des sessions
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          //   width={258}
          //   height={263}
          data={transformedData}
          margin={{ top: 30, right: 0, left: 0, bottom: 40 }}
        >
          <Line
            type='natural'
            dataKey='sessionLength'
            stroke='#FFFFFF'
            strokeWidth={2}
            dot={false}
          />
          <XAxis
            dataKey='day'
            stroke='#FFFFFF'
            axisLine={false}
            tickLine={false}
            tick={{
              fill: '#FFFFFF',
              fontWeight: 500,
              fontSize: 12,
              opacity: 0.5,
            }}
            // padding={{ left: 20, right: 20 }}
            interval={'preserveStartEnd'}
            padding={{ left: 20, right: 20 }}
            dy={35}
          />
          <YAxis hide={true} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
            wrapperStyle={{ outline: 'none' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionsChart;
