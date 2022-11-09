export const formatTimerInfo = (lastSeen: number, nowTimestamp: number) => {
  if (lastSeen > nowTimestamp) {
    return "This is not a time from past";
  }
  if (Math.round(nowTimestamp - lastSeen) / 1000 > 60) {
    return "1 .. n minutes ago";
  }
  return "0 ... 60 seconds ago";
};
