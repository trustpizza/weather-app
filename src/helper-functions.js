import { searchForCity, findStateAbbreviation } from "./api-calls";
import weatherIcons from "./photos/weather-icons";

import Cloudy from "./photos/weather-cloudy.svg";
import Sunrise from "./photos/sunrise.svg";
import Wind from "./photos/wind.svg";

function kelvinToFahrenheit(k) {
  const f = 1.8 * (k - 273) + 32;

  return `${parseInt(f)}°F`;
}

function getTimeFromDayInstance(int) {
  const date = new Date(int);
  const time = date.toLocaleTimeString();
  const amOrPm = time.split(":")[time.split(":").length -1]
  const returnValue = `${time.split(":")[0]} ${amOrPm.split(" ")[1]}`;

  console.log(returnValue, time.split(":"))
  return returnValue;
}
function translateDayIntToString(int) {
  const daysArray = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
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
  const searchSplit = search.split(",");
  const city = searchSplit[0];

  if (searchSplit.length == 2) {
    let stateUnclean = searchSplit[1].split(" ").join("");

    if (stateUnclean.split("").length > 2) {
      stateUnclean = capitalizeFirstLetter(stateUnclean);
      const state = findStateAbbreviation(capitalizeFirstLetter(stateUnclean));
      return searchForCity(city, state);
    } 
      const state = stateUnclean.toUpperCase();
      return searchForCity(city, state);
    
  } if (searchSplit.length == 1) {
    return searchForCity(city);
  } 
    const error = new Error(
      "Improperly formatted search.  Must be in City,State format"
    );
    console.log(error);
  
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function determineWeatherIcon(weatherCode) {
  return weatherIcons[weatherCode];
}

export {
  kelvinToFahrenheit,
  getTimeFromDayInstance,
  translateDayIntToString,
  translateMonthIntToString,
  prepareSearch,
  determineWeatherIcon,
};
