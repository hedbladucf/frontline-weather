const directions = [
  "North",
  "North-Northeast",
  "Northeast",
  "East-Northeast",
  "East",
  "East-Southeast",
  "Southeast",
  "South-Southeast",
  "South",
  "South-Southwest",
  "Southwest",
  "West-Southwest",
  "West",
  "West-Northwest",
  "Northwest",
  "North-Northwest",
];

export function getWindDirection(degrees) {
  const index = Math.round((degrees % 360) / 22.5);
  return directions[index];
}
