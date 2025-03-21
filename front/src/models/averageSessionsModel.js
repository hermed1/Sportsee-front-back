export function averageSessionsModel(data) {
  if (!data) return null;
  return {
    userId: data.userId,
    sessions:
      data.sessions?.map((item) => ({
        day: item.day,
        sessionLength: item.sessionLength,
      })) ?? [],
  };
}
