import React, { useEffect, useState } from 'react';
import './Profile.css';
import DisplayName from '../../components/displayName/DisplayName';
import { getUserData, getUserAverageSessions } from '../../utils/api';
import AverageSessionsChart from '../../components/averageSessionsChart/AverageSessionsChart';
import ScoreChart from '../../components/scoreChart/ScoreChart';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  let userName;
  let score;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData(12);

        const sessionsData = await getUserAverageSessions(12);
        setUser(userData?.data);
        setAverageSessions(sessionsData?.data?.sessions);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (user) {
    userName = user?.userInfos.firstName;
    console.log(user);
    score = user?.todayScore ?? user.score ?? 0;
  }

  return (
    user && (
      <div className='profile'>
        <DisplayName userName={userName} />
        <AverageSessionsChart data={averageSessions} />
        <ScoreChart score={score} />
      </div>
    )
  );
};

export default Profile;
