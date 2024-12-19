// dataMock.js

export const USER_MAIN_DATA = [
  {
    id: 1,
    userInfos: { firstName: 'Alice', lastName: 'Lemoine', age: 28 },
    todayScore: 0.72,
    keyData: {
      calorieCount: 2100,
      proteinCount: 150,
      carbohydrateCount: 320,
      lipidCount: 60,
    },
  },
  {
    id: 2,
    userInfos: { firstName: 'Bob', lastName: 'Durand', age: 35 },
    todayScore: 0.65,
    keyData: {
      calorieCount: 2300,
      proteinCount: 120,
      carbohydrateCount: 340,
      lipidCount: 80,
    },
  },
  {
    id: 3,
    userInfos: { firstName: 'Charlie', lastName: 'Martinez', age: 27 },
    todayScore: 0.58,
    keyData: {
      calorieCount: 1800,
      proteinCount: 100,
      carbohydrateCount: 300,
      lipidCount: 70,
    },
  },
  {
    id: 4,
    userInfos: { firstName: 'David', lastName: 'Petit', age: 41 },
    todayScore: 0.8,
    keyData: {
      calorieCount: 2500,
      proteinCount: 160,
      carbohydrateCount: 350,
      lipidCount: 90,
    },
  },
  {
    id: 5,
    userInfos: { firstName: 'Emma', lastName: 'Lefevre', age: 29 },
    todayScore: 0.68,
    keyData: {
      calorieCount: 2200,
      proteinCount: 140,
      carbohydrateCount: 330,
      lipidCount: 85,
    },
  },
  {
    id: 6,
    userInfos: { firstName: 'Frank', lastName: 'Bernard', age: 32 },
    todayScore: 0.52,
    keyData: {
      calorieCount: 2400,
      proteinCount: 130,
      carbohydrateCount: 310,
      lipidCount: 75,
    },
  },
  {
    id: 7,
    userInfos: { firstName: 'Grace', lastName: 'Morel', age: 24 },
    todayScore: 0.77,
    keyData: {
      calorieCount: 2000,
      proteinCount: 150,
      carbohydrateCount: 340,
      lipidCount: 65,
    },
  },
  {
    id: 8,
    userInfos: { firstName: 'Henry', lastName: 'Garcia', age: 30 },
    todayScore: 0.6,
    keyData: {
      calorieCount: 2100,
      proteinCount: 125,
      carbohydrateCount: 320,
      lipidCount: 55,
    },
  },
  {
    id: 9,
    userInfos: { firstName: 'Isabella', lastName: 'Martel', age: 37 },
    todayScore: 0.7,
    keyData: {
      calorieCount: 2300,
      proteinCount: 145,
      carbohydrateCount: 330,
      lipidCount: 80,
    },
  },
  {
    id: 10,
    userInfos: { firstName: 'Jack', lastName: 'Robert', age: 26 },
    todayScore: 0.62,
    keyData: {
      calorieCount: 1900,
      proteinCount: 110,
      carbohydrateCount: 310,
      lipidCount: 60,
    },
  },
];

export const USER_ACTIVITY = [
  {
    userId: 1,
    sessions: [
      { day: '2020-07-01', kilogram: 70, calories: 240 },
      { day: '2020-07-02', kilogram: 71, calories: 220 },
      { day: '2020-07-03', kilogram: 71, calories: 280 },
      { day: '2020-07-04', kilogram: 70, calories: 290 },
      { day: '2020-07-05', kilogram: 69, calories: 160 },
      { day: '2020-07-06', kilogram: 68, calories: 162 },
      { day: '2020-07-07', kilogram: 68, calories: 390 },
    ],
  },
  {
    userId: 2,
    sessions: [
      { day: '2020-07-01', kilogram: 72, calories: 260 },
      { day: '2020-07-02', kilogram: 73, calories: 240 },
      { day: '2020-07-03', kilogram: 74, calories: 300 },
      { day: '2020-07-04', kilogram: 74, calories: 310 },
      { day: '2020-07-05', kilogram: 73, calories: 180 },
      { day: '2020-07-06', kilogram: 72, calories: 190 },
      { day: '2020-07-07', kilogram: 72, calories: 420 },
    ],
  },
  {
    userId: 3,
    sessions: [
      { day: '2020-07-01', kilogram: 75, calories: 250 },
      { day: '2020-07-02', kilogram: 75, calories: 260 },
      { day: '2020-07-03', kilogram: 76, calories: 300 },
      { day: '2020-07-04', kilogram: 76, calories: 310 },
      { day: '2020-07-05', kilogram: 76, calories: 180 },
      { day: '2020-07-06', kilogram: 75, calories: 190 },
      { day: '2020-07-07', kilogram: 74, calories: 420 },
    ],
  },
  {
    userId: 4,
    sessions: [
      { day: '2020-07-01', kilogram: 70, calories: 240 },
      { day: '2020-07-02', kilogram: 70, calories: 220 },
      { day: '2020-07-03', kilogram: 71, calories: 280 },
      { day: '2020-07-04', kilogram: 71, calories: 290 },
      { day: '2020-07-05', kilogram: 70, calories: 160 },
      { day: '2020-07-06', kilogram: 69, calories: 162 },
      { day: '2020-07-07', kilogram: 68, calories: 390 },
    ],
  },
  {
    userId: 5,
    sessions: [
      { day: '2020-07-01', kilogram: 68, calories: 230 },
      { day: '2020-07-02', kilogram: 69, calories: 220 },
      { day: '2020-07-03', kilogram: 70, calories: 210 },
      { day: '2020-07-04', kilogram: 71, calories: 280 },
      { day: '2020-07-05', kilogram: 70, calories: 260 },
      { day: '2020-07-06', kilogram: 69, calories: 290 },
      { day: '2020-07-07', kilogram: 68, calories: 300 },
    ],
  },
  {
    userId: 6,
    sessions: [
      { day: '2020-07-01', kilogram: 77, calories: 280 },
      { day: '2020-07-02', kilogram: 78, calories: 270 },
      { day: '2020-07-03', kilogram: 78, calories: 290 },
      { day: '2020-07-04', kilogram: 77, calories: 300 },
      { day: '2020-07-05', kilogram: 76, calories: 250 },
      { day: '2020-07-06', kilogram: 76, calories: 260 },
      { day: '2020-07-07', kilogram: 75, calories: 400 },
    ],
  },
  {
    userId: 7,
    sessions: [
      { day: '2020-07-01', kilogram: 66, calories: 230 },
      { day: '2020-07-02', kilogram: 66, calories: 220 },
      { day: '2020-07-03', kilogram: 67, calories: 210 },
      { day: '2020-07-04', kilogram: 67, calories: 280 },
      { day: '2020-07-05', kilogram: 66, calories: 260 },
      { day: '2020-07-06', kilogram: 65, calories: 290 },
      { day: '2020-07-07', kilogram: 65, calories: 320 },
    ],
  },
  {
    userId: 8,
    sessions: [
      { day: '2020-07-01', kilogram: 79, calories: 260 },
      { day: '2020-07-02', kilogram: 79, calories: 250 },
      { day: '2020-07-03', kilogram: 80, calories: 300 },
      { day: '2020-07-04', kilogram: 80, calories: 310 },
      { day: '2020-07-05', kilogram: 79, calories: 270 },
      { day: '2020-07-06', kilogram: 78, calories: 280 },
      { day: '2020-07-07', kilogram: 78, calories: 330 },
    ],
  },
  {
    userId: 9,
    sessions: [
      { day: '2020-07-01', kilogram: 67, calories: 220 },
      { day: '2020-07-02', kilogram: 67, calories: 230 },
      { day: '2020-07-03', kilogram: 68, calories: 240 },
      { day: '2020-07-04', kilogram: 68, calories: 250 },
      { day: '2020-07-05', kilogram: 67, calories: 210 },
      { day: '2020-07-06', kilogram: 66, calories: 200 },
      { day: '2020-07-07', kilogram: 66, calories: 300 },
    ],
  },
  {
    userId: 10,
    sessions: [
      { day: '2020-07-01', kilogram: 70, calories: 260 },
      { day: '2020-07-02', kilogram: 70, calories: 240 },
      { day: '2020-07-03', kilogram: 71, calories: 300 },
      { day: '2020-07-04', kilogram: 71, calories: 320 },
      { day: '2020-07-05', kilogram: 70, calories: 280 },
      { day: '2020-07-06', kilogram: 69, calories: 270 },
      { day: '2020-07-07', kilogram: 69, calories: 390 },
    ],
  },
];

export const USER_AVERAGE_SESSIONS = [
  {
    userId: 1,
    sessions: [
      { day: 1, sessionLength: 30 },
      { day: 2, sessionLength: 23 },
      { day: 3, sessionLength: 45 },
      { day: 4, sessionLength: 50 },
      { day: 5, sessionLength: 0 },
      { day: 6, sessionLength: 0 },
      { day: 7, sessionLength: 60 },
    ],
  },
  {
    userId: 2,
    sessions: [
      { day: 1, sessionLength: 32 },
      { day: 2, sessionLength: 24 },
      { day: 3, sessionLength: 46 },
      { day: 4, sessionLength: 51 },
      { day: 5, sessionLength: 5 },
      { day: 6, sessionLength: 2 },
      { day: 7, sessionLength: 55 },
    ],
  },
  {
    userId: 3,
    sessions: [
      { day: 1, sessionLength: 35 },
      { day: 2, sessionLength: 26 },
      { day: 3, sessionLength: 50 },
      { day: 4, sessionLength: 52 },
      { day: 5, sessionLength: 10 },
      { day: 6, sessionLength: 3 },
      { day: 7, sessionLength: 58 },
    ],
  },
  {
    userId: 4,
    sessions: [
      { day: 1, sessionLength: 28 },
      { day: 2, sessionLength: 20 },
      { day: 3, sessionLength: 40 },
      { day: 4, sessionLength: 45 },
      { day: 5, sessionLength: 0 },
      { day: 6, sessionLength: 5 },
      { day: 7, sessionLength: 62 },
    ],
  },
  {
    userId: 5,
    sessions: [
      { day: 1, sessionLength: 33 },
      { day: 2, sessionLength: 27 },
      { day: 3, sessionLength: 47 },
      { day: 4, sessionLength: 53 },
      { day: 5, sessionLength: 0 },
      { day: 6, sessionLength: 0 },
      { day: 7, sessionLength: 61 },
    ],
  },
  {
    userId: 6,
    sessions: [
      { day: 1, sessionLength: 31 },
      { day: 2, sessionLength: 22 },
      { day: 3, sessionLength: 44 },
      { day: 4, sessionLength: 49 },
      { day: 5, sessionLength: 6 },
      { day: 6, sessionLength: 3 },
      { day: 7, sessionLength: 59 },
    ],
  },
  {
    userId: 7,
    sessions: [
      { day: 1, sessionLength: 29 },
      { day: 2, sessionLength: 25 },
      { day: 3, sessionLength: 42 },
      { day: 4, sessionLength: 47 },
      { day: 5, sessionLength: 2 },
      { day: 6, sessionLength: 1 },
      { day: 7, sessionLength: 56 },
    ],
  },
  {
    userId: 8,
    sessions: [
      { day: 1, sessionLength: 34 },
      { day: 2, sessionLength: 28 },
      { day: 3, sessionLength: 48 },
      { day: 4, sessionLength: 54 },
      { day: 5, sessionLength: 3 },
      { day: 6, sessionLength: 4 },
      { day: 7, sessionLength: 60 },
    ],
  },
  {
    userId: 9,
    sessions: [
      { day: 1, sessionLength: 36 },
      { day: 2, sessionLength: 30 },
      { day: 3, sessionLength: 52 },
      { day: 4, sessionLength: 55 },
      { day: 5, sessionLength: 7 },
      { day: 6, sessionLength: 2 },
      { day: 7, sessionLength: 63 },
    ],
  },
  {
    userId: 10,
    sessions: [
      { day: 1, sessionLength: 32 },
      { day: 2, sessionLength: 27 },
      { day: 3, sessionLength: 50 },
      { day: 4, sessionLength: 52 },
      { day: 5, sessionLength: 9 },
      { day: 6, sessionLength: 4 },
      { day: 7, sessionLength: 57 },
    ],
  },
];

export const USER_PERFORMANCE = [
  {
    userId: 1,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 80, kind: 1 },
      { value: 120, kind: 2 },
      { value: 140, kind: 3 },
      { value: 50, kind: 4 },
      { value: 200, kind: 5 },
      { value: 90, kind: 6 },
    ],
  },
  {
    userId: 2,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 85, kind: 1 },
      { value: 110, kind: 2 },
      { value: 135, kind: 3 },
      { value: 55, kind: 4 },
      { value: 180, kind: 5 },
      { value: 100, kind: 6 },
    ],
  },
  {
    userId: 3,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 90, kind: 1 },
      { value: 115, kind: 2 },
      { value: 130, kind: 3 },
      { value: 60, kind: 4 },
      { value: 190, kind: 5 },
      { value: 95, kind: 6 },
    ],
  },
  {
    userId: 4,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 88, kind: 1 },
      { value: 122, kind: 2 },
      { value: 136, kind: 3 },
      { value: 58, kind: 4 },
      { value: 185, kind: 5 },
      { value: 99, kind: 6 },
    ],
  },
  {
    userId: 5,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 92, kind: 1 },
      { value: 118, kind: 2 },
      { value: 133, kind: 3 },
      { value: 63, kind: 4 },
      { value: 170, kind: 5 },
      { value: 102, kind: 6 },
    ],
  },
  {
    userId: 6,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 95, kind: 1 },
      { value: 125, kind: 2 },
      { value: 145, kind: 3 },
      { value: 65, kind: 4 },
      { value: 175, kind: 5 },
      { value: 105, kind: 6 },
    ],
  },
  {
    userId: 7,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 85, kind: 1 },
      { value: 120, kind: 2 },
      { value: 150, kind: 3 },
      { value: 60, kind: 4 },
      { value: 180, kind: 5 },
      { value: 108, kind: 6 },
    ],
  },
  {
    userId: 8,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 90, kind: 1 },
      { value: 130, kind: 2 },
      { value: 140, kind: 3 },
      { value: 55, kind: 4 },
      { value: 185, kind: 5 },
      { value: 95, kind: 6 },
    ],
  },
  {
    userId: 9,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 78, kind: 1 },
      { value: 110, kind: 2 },
      { value: 125, kind: 3 },
      { value: 70, kind: 4 },
      { value: 180, kind: 5 },
      { value: 88, kind: 6 },
    ],
  },
  {
    userId: 10,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 80, kind: 1 },
      { value: 115, kind: 2 },
      { value: 130, kind: 3 },
      { value: 75, kind: 4 },
      { value: 170, kind: 5 },
      { value: 92, kind: 6 },
    ],
  },
];

const dataMock = {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
};

export default dataMock;
