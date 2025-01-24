import React, { useEffect, useRef, useState } from 'react';
import './Profile.css';
import DisplayName from '../../components/displayName/DisplayName';
import {
  getUserData,
  getUserAverageSessions,
  getUserPerfomance,
} from '../../utils/api';
import DailyActivity from '../../components/dailyActivity/DailyActivity';
import AverageSessionsChart from '../../components/averageSessionsChart/AverageSessionsChart';
import ScoreChart from '../../components/scoreChart/ScoreChart';
import ActivityType from '../../components/activityType/ActivityType';
import { useParams } from 'react-router-dom';

const Profile = () => {
  let userId = useParams()?.id;
  const [user, setUser] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  let userName;
  let score;
  const activityKinds = useRef(null);
  const activityValues = useRef(null);
  let formatedPerformanceData = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData(userId);

        const sessionsData = await getUserAverageSessions(userId);
        const userPerformanceData = await getUserPerfomance(
          userId,
          'performance'
        );
        setUser(userData?.data);
        setAverageSessions(sessionsData?.data?.sessions);
        activityKinds.current = userPerformanceData.kind;
        activityValues.current = userPerformanceData.data;
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  //   const data = [
  //     { kind: 'Intensité', value: 120 },
  //     { kind: 'Vitesse', value: 98 },
  //     { kind: 'Force', value: 86 },
  //     { kind: 'Endurance', value: 99 },
  //     { kind: 'Energie', value: 85 },
  //     { kind: 'Cardio', value: 90 },
  //   ];

  const translations = {
    cardio: 'Cardio',
    energy: 'Énergie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  };

  if (activityKinds.current && activityValues.current) {
    // Parcourt chaque élément dans la liste des valeurs
    for (const item of activityValues.current) {
      let englishKind = activityKinds.current[item.kind]; // Récupère le nom en anglais

      let formatedObject = {
        kind: translations[englishKind] || englishKind, // Traduit sinon garde l'anglais
        value: item.value, // Ajoute la valeur correspondante
      };

      formatedPerformanceData.push(formatedObject); // Ajoute l'objet formaté au tableau
    }

    console.log('Données formatées :', formatedPerformanceData); // Affiche le résultat final
  }

  if (user) {
    userName = user?.userInfos.firstName;
    score = user?.todayScore ?? user.score ?? 0;
  }

  return (
    user && (
      <div className='profile'>
        <DisplayName userName={userName} />
        <DailyActivity />
        <AverageSessionsChart data={averageSessions} />
        <ActivityType data={formatedPerformanceData} />
        <ScoreChart score={score} />
      </div>
    )
  );
};

export default Profile;
