// src/services/apiService.js
import axios from 'axios';
import dataMocked from '../dataMock';
const isMocked = process.env.REACT_APP_IS_MOCKED === 'true'; // Configuration de base pour Axios
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/user',
  timeout: 5000, // Temps limite pour une requête en millisecondes
});

export const getUserData = async (userId, endpoint) => {
  if (isMocked) {
    if (!endpoint) {
      const userData = dataMocked.USER_MAIN_DATA.find(
        (user) => user.id === userId
      );
      return userData;
    }
    if (endpoint === 'activity') {
      const userData = dataMocked.USER_ACTIVITY.find(
        (user) => user.userId === userId
      );
      return userData;
    }
    if (endpoint === 'average-sessions') {
      const userData = dataMocked.USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === userId
      );
      return userData.sessions;
    }
    if (endpoint === 'performance') {
      const userData = dataMocked.USER_PERFORMANCE.find(
        (user) => user.userId === userId
      );
      return userData;
    }
  }
  try {
    const url = endpoint ? `/${userId}/${endpoint}` : `/${userId}`;
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    throw error; // Propager l'erreur pour la gestion côté composant
  }
};
