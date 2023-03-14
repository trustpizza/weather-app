import Raindrop from "../photos/raindrop.svg";

import Left from "../photos/left-arrow.svg";
import Right from "../photos/right-arrow.svg";
import { weatherForecast } from "./weatherDataDisplay";

import {
  determineWeatherIcon,
  getTimeFromDayInstance,
  kelvinToFahrenheit,
  translateDayIntToString,
} from "../helper-functions";

const WeatherForecast = () => {
  const card = document.createElement("div");
  card.className =
    "flex flex-col space-y-6 w-full bg-inherit p-4 rounded-xl overflow-y-auto max-h-96 md:max-h-none";

  const update = (data, start = 0) => {
    const navigator = ForecastNavigator(data, start);
    card.appendChild(navigator);

    for (let i = start; i < start + 5; i++) {
      const day = DayForecastFactory(data[i]);
      card.appendChild(day);
    }
  };

  const clear = () => {
    while (card.firstChild) {
      card.removeChild(card.firstChild);
    }
  };

  return { card, update, clear };
};

const ForecastNavigator = (data, start) => {
  const nav = document.createElement("div");
  nav.className = "flex";

  const leftButton = document.createElement("button");
  leftButton.className = "rounded-lg bg-blue-500 hover:bg-blue-700";
  if (start !== 0) {
    leftButton.addEventListener("click", () => {
      weatherForecast.clear();
      weatherForecast.update(data, start - 5);
    });
  } else {
    leftButton.classList.add("hidden");
  }

  const leftIcon = new Image();
  leftIcon.className = "h-8 w-8";
  leftIcon.src = Left;

  const leftText = document.createElement("p");
  leftText.classList.add("sr-only");
  leftText.textContent = "See Next";

  leftButton.append(leftIcon, leftText);

  const rightButton = document.createElement("button");
  rightButton.className = "self-end rounded-lg bg-blue-500 hover:bg-blue-700";

  if (start + 5 !== 40) {
    rightButton.addEventListener("click", () => {
      weatherForecast.clear();
      weatherForecast.update(data, start + 5);
    });
  } else {
    rightButton.classList.add("hidden");
  }

  const rightIcon = new Image();
  rightIcon.className = "h-8 w-8";
  rightIcon.src = Right;

  const rightText = document.createElement("p");
  rightText.classList.add("sr-only");
  rightText.textContent = "See Previous";

  rightButton.append(rightIcon, rightText);

  const blockerDiv = document.createElement("div");
  blockerDiv.className = "flex-grow";

  nav.append(leftButton, blockerDiv, rightButton);
  return nav;
};

function DayForecastFactory(data) {
  const card = document.createElement("div");
  card.className = "grid grid-cols-4 items-center justify-items-center";

  const day = new Date(data.dt * 1000);

  const dateTime = document.createElement("div");
  dateTime.className =
    "flex flex-col justify-start justify-self-start font-normal text-md";

  const time = document.createElement("span");
  time.className = "";
  time.textContent = getTimeFromDayInstance(data.dt * 1000);

  const date = document.createElement("span");
  date.className = "";
  date.textContent = translateDayIntToString(day.getMonth());

  dateTime.append(time, date);

  const chanceOfRain = document.createElement("div");
  chanceOfRain.className = "flex justify-self-end items-center";

  const chance = document.createElement("span");
  chance.className = "font-normal";
  chance.textContent = `${Math.round(data.pop * 100)}%`;

  const rainIcon = new Image();
  rainIcon.className = "w-7 h-7 fill-current";
  rainIcon.src = Raindrop;

  chanceOfRain.append(chance, rainIcon);

  const weatherIcon = new Image();
  weatherIcon.className = "h-7 w-7 fill-current ml-2";
  weatherIcon.src = determineWeatherIcon(data.weather[0].icon);

  const highLowTemp = document.createElement("div");
  highLowTemp.className = "font-normal text-md";
  highLowTemp.textContent = `${kelvinToFahrenheit(data.main.temp)}`;

  card.append(dateTime, chanceOfRain, weatherIcon, highLowTemp);

  return card;
}

export default WeatherForecast;
