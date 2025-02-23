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

  let formatedPerformanceData = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData(userId);
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
        console.error(error);
      }
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    if (user) {
      setUserName(user?.userInfos.firstName || '');
      setScore(user?.todayScore ?? user?.score ?? 0);
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

  if (activityKinds && activityValues) {
    for (const item of activityValues) {
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

    // Trier les données formatées selon l'ordre souhaité (en dehors de la boucle)
    formatedPerformanceData.sort((a, b) => {
      return desiredOrder.indexOf(a.kind) - desiredOrder.indexOf(b.kind);
    });
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
