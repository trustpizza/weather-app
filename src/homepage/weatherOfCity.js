import Cloudy from "../photos/weather-cloudy.svg";
import Sunrise from "../photos/sunrise.svg";
import Sunset from "../photos/sunset.svg";
import Wind from "../photos/wind.svg";
import Humidity from "../photos/humidity.svg";
import {
  kelvinToFahrenheit,
  getTimeFromDayInstance,
  translateDayIntToString,
  translateMonthIntToString,
  determineWeatherIcon,
} from "../helper-functions";

const WeatherOfCity = () => {
  const card = document.createElement("div");
  card.className = "flex flex-col rounded w-full p-4";

  // Header of Card
  const cityName = document.createElement("div");
  cityName.textContent = "Boston, MA";
  cityName.className = "font-bold text-xl";

  const date = document.createElement("div");
  date.textContent = "Friday 10 March 2023";
  date.className = "text-sm text-gray-500";

  const weatherIconDiv = document.createElement("div");
  weatherIconDiv.className =
    "mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24";
  weatherIconDiv.ariaHidden = "true";

  const weatherIcon = new Image();
  weatherIcon.src = Cloudy;
  // Add an ALT to image!
  weatherIcon.className = "w-32 h-32";

  weatherIconDiv.appendChild(weatherIcon);
  // End Header of Card

  // Main Temperature Section

  const tempSection = document.createElement("div");
  tempSection.className = "flex flex-row items-center justify-center mt-6";

  const temp = document.createElement("div");
  temp.className = "font-medium text-6xl";
  temp.textContent = "24°F";

  const rightHalf = document.createElement("div");
  rightHalf.className = "flex flex-col items-center ml-6";

  const cloudCoverage = document.createElement("div");
  cloudCoverage.textContent = "Cloudy";

  const highTemp = document.createElement("div");
  highTemp.className = "mt-1";
  highTemp.ariaHidden = "true";

  const highTempSpan = document.createElement("span");
  highTempSpan.textContent = "28°F";

  highTemp.appendChild(highTempSpan);

  const lowTemp = document.createElement("div");
  lowTemp.className = "mt-1";
  lowTemp.ariaHidden = "true";

  const lowTempSpan = document.createElement("span");
  lowTempSpan.textContent = "22°F";

  lowTemp.appendChild(lowTempSpan);

  rightHalf.append(cloudCoverage, highTemp, lowTemp);

  tempSection.append(temp, rightHalf);

  // End Main Temp Section

  // Misc Weather Information

  const miscWeatherInfoSection = document.createElement("div");
  miscWeatherInfoSection.className = "flex flex-row justify-between mt-6";

  const sunriseSection = MiscWeatherSectionFactory(Sunrise, "sunrise");
  const sunrise = MiscWeatherItemFactory("6:43 AM");

  sunriseSection.appendChild(sunrise);

  const sunsetSection = MiscWeatherSectionFactory(Sunset, "sunset");
  const sunset = MiscWeatherItemFactory("5:49 PM");

  sunsetSection.appendChild(sunset);

  const windSection = MiscWeatherSectionFactory(Wind, "wind");
  const wind = MiscWeatherItemFactory("4mp/h SE");

  windSection.appendChild(wind);

  const humiditySection = MiscWeatherSectionFactory(Humidity, "humidity");
  const humidity = MiscWeatherItemFactory("23%");

  humiditySection.appendChild(humidity);

  miscWeatherInfoSection.append(
    sunriseSection,
    sunsetSection,
    windSection,
    humiditySection
  );

  // End Misc Weather Info

  const update = (data) => {
    const cardObjs = {
      cityName,
      date,
      weatherIcon,
      cloudCoverage,
      highTemp,
      lowTemp,
      temp,
      sunrise,
      sunset,
      wind,
      humidity,
    };
    // unhide
    // hideOrShowObj(weatherDisplay)
    populateWeatherDisplay(cardObjs, data);
  };

  card.append(
    cityName,
    date,
    weatherIconDiv,
    tempSection,
    miscWeatherInfoSection
  );

  return { card, update };
};

function populateWeatherDisplay(objs, data) {
  // update the data
  objs.cityName.textContent = `${data.name}, ${data.state}`;
  objs.date.textContent = determineTime(data.dt * 1000);
  objs.weatherIcon.src = determineWeatherIcon(data.weather[0].icon);
  objs.cloudCoverage.textContent = determineCloudiness(data.clouds.all);
  objs.highTemp.textContent = kelvinToFahrenheit(data.main.temp_max);
  objs.lowTemp.textContent = kelvinToFahrenheit(data.main.temp_min);
  objs.temp.textContent = kelvinToFahrenheit(data.main.temp);
  objs.sunrise.textContent = getTimeFromDayInstance(data.sys.sunrise * 1000);
  objs.sunset.textContent = getTimeFromDayInstance(data.sys.sunset * 1000);
  objs.wind.textContent = determineWindSpeedAndDirection(data.wind);
  objs.humidity.textContent = `${data.main.humidity}%`;
}

function determineWindSpeedAndDirection(wind) {
  const speed = Math.round(wind.speed);
  const direction = degToCompass(wind.deg);

  return `${speed}mp/h ${direction}`;
}

function degToCompass(num) {
  const val = Math.floor(num / 22.5 + 0.5);
  const arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
}

function determineCloudiness(percent) {
  if (percent >= 0 && percent < 5) {
    return "Sunny";
  }
  if (percent >= 5 && percent < 25) {
    return "Mostly Sunny";
  }
  if (percent >= 25 && percent < 50) {
    return "Scattered Clouds";
  }
  if (percent >= 50 && percent < 69) {
    return "Partly Sunny";
  }
  if (percent >= 69 && percent < 87) {
    return "Mostly Cloudy";
  }
  if (percent >= 87 && percent <= 100) {
    return "Overcast";
  }
}

function determineTime(num) {
  const date = new Date(num);
  const dayOfWeek = translateDayIntToString(date.getDay());
  const month = translateMonthIntToString(date.getMonth());
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  const time = `${dayOfWeek} ${month} ${dayOfMonth} ${year}`;

  return time;
}

function MiscWeatherSectionFactory(iconSrc, altText) {
  const section = document.createElement("div");
  section.className = "flex flex-col items-center";

  const sectionIcon = new Image();
  sectionIcon.className = "h-8 w-8";
  sectionIcon.alt = altText;
  sectionIcon.src = iconSrc;

  section.appendChild(sectionIcon);
  return section;
}

function MiscWeatherItemFactory(text) {
  const item = document.createElement("span");
  item.className = "text-sm text-gray-500";
  item.textContent = text;

  return item;
}

export default WeatherOfCity;
