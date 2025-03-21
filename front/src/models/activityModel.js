export function activityModel(data) {
  if (!data) return null;
  return {
    userId: data.userId,
    sessions:
      data.sessions?.map((session) => ({
        day: session.day,
        kilogram: session.kilogram,
        calories: session.calories,
      })) ?? [],
  };
}
