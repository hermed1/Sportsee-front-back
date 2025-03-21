// src/models/createUserModel.js
export function userModel(data) {
  if (!data) return null;

  return {
    id: data.id,
    firstName: data.userInfos?.firstName ?? '',
    lastName: data.userInfos?.lastName ?? '',
    age: data.userInfos?.age ?? null,
    score: data.todayScore ?? data.score ?? 0,
    keyData: data.keyData ?? {},
  };
}
