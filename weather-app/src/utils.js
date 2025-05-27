export function camelCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
export function dayOrNight(hour) {
  const date = new Date(hour * 1000);
  const hours = date.getHours();
  return hours >= 6 && hours < 18 ? "day" : "night";
}

export function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
}
export function formatTime(date) {
  const options = { hour: "2-digit", minute: "2-digit" };
  return new Date(date).toLocaleTimeString(undefined, options);
}
export function formatTemperature(temp) {
  return `${Math.round(temp)}°C`;
}
export function formatWindSpeed(speed) {
  return `${Math.round(speed)} m/s`;
}
export function formatHumidity(humidity) {
  return `${humidity}%`;
}
export function formatPressure(pressure) {
  return `${pressure} hPa`;
}
export function formatVisibility(visibility) {
  return `${Math.round(visibility / 1000)} km`;
}
