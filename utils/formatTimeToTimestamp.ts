const DELIMITER = ":";
export const TIME_REGEX =
  /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;

export const formatTimeToTimeStamp = (value: string) => {
  if (!TIME_REGEX.test(value)) return -1;

  const time = value.split(DELIMITER);
  const hours = Number(time[0]);
  const minutes = Number(time[1]);
  const seconds = Number(time[2]);
  const date = new Date();
  date.setHours(hours, minutes, seconds);
  return date.getTime();
};
