import {searchForCity, findStateAbbreviation} from "./api-calls"

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

function prepareSearch(search) {

  const searchSplit = search.split(',');
  const city = searchSplit[0];

  if (searchSplit.length == 2) {
    // let stateUnclean = searchSplit[1].split(" ").join('')
    // stateUnclean = capitalizeFirstLetter(stateUnclean);

    // const state = findStateAbbreviation(capitalizeFirstLetter(stateUnclean));

    // response = searchForCity(city, state)
  } else if (searchSplit.length == 1) {
    console.log(city)
    return searchForCity(city)
  } else {
    const error = new Error("Improperly formatted search.  Must be in City,State format")
    console.log('Error')
  }
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export {
  kelvinToFahrenheit,
  getTimeFromDayInstance,
  translateDayIntToString,
  translateMonthIntToString,
  prepareSearch
};