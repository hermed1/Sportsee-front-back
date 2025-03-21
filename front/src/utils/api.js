import axios from 'axios';
import dataMocked from '../dataMock';
import { userModel } from '../models/userModel';
import { activityModel } from '../models/activityModel';
import { averageSessionsModel } from '../models/averageSessionsModel';
import { performanceDataModel } from '../models/performanceDataModel';

// Vérification de l'utilisation des données mockées
const isMocked = process.env.REACT_APP_IS_MOCKED === 'true';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/user',
  timeout: 5000,
});

export const getUserData = async (userId, endpoint) => {
  if (isMocked) {
    if (!endpoint) {
      // Utilisation des données mockées pour les données principales
      const userData = dataMocked.USER_MAIN_DATA.find(
        (user) => user.id === Number(userId)
      );
      const formattedUserData = userModel(userData);
      return { data: formattedUserData };
    }
    if (endpoint === 'activity') {
      const userData = dataMocked.USER_ACTIVITY.find(
        (user) => user.userId === Number(userId)
      );
      const formattedUserData = activityModel(userData);
      return { data: formattedUserData };
    }
    if (endpoint === 'average-sessions') {
      const userData = dataMocked.USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === Number(userId)
      );
      const formattedUserData = averageSessionsModel(userData);
      return { data: formattedUserData };
    }
    if (endpoint === 'performance') {
      const userData = dataMocked.USER_PERFORMANCE.find(
        (user) => user.userId === Number(userId)
      );
      const formattedUserData = performanceDataModel(userData);
      return { data: formattedUserData };
    }
  } else {
    try {
      // Si on n'utilise pas les données mockées, effectuer un appel HTTP réel
      const url = endpoint ? `/${userId}/${endpoint}` : `/${userId}`;
      const response = await api.get(url);
      if (!endpoint) {
        const userData = userModel(response.data.data);
        return { data: userData };
      }
      if (endpoint === 'activity') {
        const userData = activityModel(response.data.data);
        return { data: userData };
      }

      if (endpoint === 'average-sessions') {
        const userData = averageSessionsModel(response.data.data);
        return { data: userData };
      }

      if (endpoint === 'performance') {
        const userData = performanceDataModel(response.data.data);
        return { data: userData };
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
      throw error; // Propagation de l'erreur pour gestion ultérieure
    }
  }
};
