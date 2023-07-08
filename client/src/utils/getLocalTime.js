export function getLocalTime(shiftInSeconds) {
  // Get the current UTC time in milliseconds
  const utcTimeInMillis = Date.now();

  // Calculate the local time in milliseconds
  const localTimeInMillis = utcTimeInMillis + shiftInSeconds * 1000;

  // Create a new Date object using the local time in milliseconds
  const localTime = new Date(localTimeInMillis);

  return localTime.toUTCString();
}
