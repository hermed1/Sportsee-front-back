import React, { useEffect, useState } from 'react';
import './Profile.css';
import DisplayName from '../../components/displayName/DisplayName';
import { getUserData } from '../../utils/api';
import DailyActivity from '../../components/dailyActivity/DailyActivity';
import AverageSessionsChart from '../../components/averageSessionsChart/AverageSessionsChart';
import ScoreChart from '../../components/scoreChart/ScoreChart';
import ActivityType from '../../components/activityType/ActivityType';
import { useParams } from 'react-router-dom';
import Macros from '../../components/macros/Macros';

const Profile = () => {
  let userId = useParams()?.id;
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');
  const [score, setScore] = useState(0);
  const [averageSessions, setAverageSessions] = useState(null);
  const [dailyActivityData, setDailyActivityData] = useState(null);
  const [activityKinds, setActivityKinds] = useState(null);
  const [activityValues, setActivityValues] = useState(null);
  const [macros, setMacros] = useState(null);
  const [error, setError] = useState(null);

  let formatedPerformanceData = [];

  useEffect(() => {
    // Récupération asynchrone des données utilisateur
    const fetchData = async () => {
      try {
        const userData = await getUserData(userId);
        console.log('userdata', userData);
        if (!userData || !userData.data) {
          throw new Error('Utilisateur introuvable');
        }
        const sessionsData = await getUserData(userId, 'average-sessions');
        const userPerformanceData = await getUserData(userId, 'performance');
        const userActivityData = await getUserData(userId, 'activity');
        const userActivitySessions = userActivityData?.data?.sessions;
        setUser(userData?.data);
        setAverageSessions(sessionsData?.data?.sessions);
        setDailyActivityData(userActivitySessions);
        setActivityKinds(userPerformanceData?.data.kind);
        setActivityValues(userPerformanceData?.data.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError('Utilisateur introuvable (404)');
        } else {
          setError('Impossible de joindre le serveur (500)');
        }
      }
    };
    fetchData();
  }, [userId]);
  // Mise à jour de l'état avec les données utilisateur récupérées
  useEffect(() => {
    if (user) {
      setUserName(user?.firstName);
      setScore(user?.score);
      setMacros(user?.keyData);
    }
  }, [user]);

  const translations = {
    cardio: 'Cardio',
    energy: 'Énergie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  };

  // Transformation des données de performance pour le RadarChart
  if (activityKinds && activityValues) {
    // Pour chaque entrée dans activityValues, on crée un objet contenant :
    // - "kind" : le type d'activité traduit en français si disponible (sinon, on garde l'anglais).
    // - "value" : la valeur associée à l'activité.
    for (const item of activityValues) {
      //activityKinds = objet contenant des paires chiffre : nom de l'activité
      //on cherche dans l'objet activityKinds la valeur associée à la clé item.kind.
      let englishKind = activityKinds[item.kind];

      let formatedObject = {
        kind: translations[englishKind] || englishKind,
        value: item.value,
      };

      formatedPerformanceData.push(formatedObject);
    }

    // Définir l'ordre souhaité pour les labels
    const desiredOrder = [
      'Intensité',
      'Vitesse',
      'Force',
      'Endurance',
      'Énergie',
      'Cardio',
    ];

    // Trier les données formatées selon l'ordre souhaité
    // On compare les index des éléments dans le tableau desiredOrder
    formatedPerformanceData.sort((a, b) => {
      return desiredOrder.indexOf(a.kind) - desiredOrder.indexOf(b.kind);
    });
  }

  if (error) {
    return (
      <div
        style={{
          textAlign: 'center',
          paddingTop: '200px',
          fontSize: '36px',
          fontWeight: 'bold',
          color: 'red',
        }}
      >
        {error}
      </div>
    );
  }

  console.log('formatedPerformanceData', formatedPerformanceData);
  return (
    user && (
      <div className='profile'>
        <DisplayName userName={userName} />
        <div className='charts__macros__container'>
          <div className='charts__container'>
            <DailyActivity data={dailyActivityData} />
            <div className='charts__container__bottom'>
              <AverageSessionsChart data={averageSessions} />
              <ActivityType data={formatedPerformanceData} />
              <ScoreChart score={score} />
            </div>
          </div>
          <Macros macros={macros} />
        </div>
      </div>
    )
  );
};

export default Profile;
