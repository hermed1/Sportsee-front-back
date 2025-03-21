export function performanceDataModel(data) {
  if (!data) return null;
  return {
    userId: data.userId,
    kind: data.kind ?? {},
    data: data.data ?? [],
  };
}
