import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const SessionsChart = ({ data }) => {
  const formattedData = data.sessions.map((session, index) => ({
    name: index + 1,
    value: session.sessionLength,
  }));

  // Ajout des jours de la semaine
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  // Style personnalisé pour le tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: 'white',
            padding: '5px 10px',
            border: 'none',
          }}
        >
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      style={{
        width: '100%',
        height: 300,
        background: 'linear-gradient(to right, #FF0000, #E60000)', // Dégradé de rouge
        borderRadius: '10px',
        padding: '15px',
        position: 'relative', // Pour positionner le titre
      }}
    >
      <h3 style={{
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '15px',
        margin: '15px',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '60%',
      }}>
        Durée moyenne des sessions
      </h3>
      <ResponsiveContainer>
        <LineChart
          data={formattedData}
          margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="name"
            stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => days[value-1]}
          />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              fill: 'white',
              stroke: 'rgba(255, 255, 255, 0.6)',
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionsChart;
