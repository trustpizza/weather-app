function kelvinToFahrenheit(k) {
  const f = 1.8 * (k - 273) + 32;

  return `${parseInt(f)}°F`;
}

function getTimeFromDayInstance(int) {
  const date = new Date(int);
  const time = date.toLocaleTimeString();
  const removeSecondsArr = time.split("");

  if (removeSecondsArr.length > 10) {
    removeSecondsArr.splice(5, 3);
    return removeSecondsArr.join("");
  }
  removeSecondsArr.splice(4, 3);
  return removeSecondsArr.join("");
}
function translateDayIntToString(int) {
  const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return daysArray[int];
}

function translateMonthIntToString(int) {
  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthsArray[int];
}

export {
  kelvinToFahrenheit,
  getTimeFromDayInstance,
  translateDayIntToString,
  translateMonthIntToString,
};
