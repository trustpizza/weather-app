import Sunny from "../photos/sunshine.svg";
import Raindrop from "../photos/raindrop.svg";

import Left from "../photos/left-arrow.svg";
import Right from "../photos/right-arrow.svg";
import { weatherForecast } from "./weatherDataDisplay";

import {
  getTimeFromDayInstance,
  kelvinToFahrenheit,
  translateDayIntToString
} from "../helper-functions"

const WeatherForecast = () => {
  const card = document.createElement("div");
  card.className =
    "flex flex-col space-y-6 w-full bg-white p-4 rounded-xl overflow-y-auto max-h-96 md:max-h-none";

  const update = (data) => {
    const navigator = ForecastNavigator();
    card.appendChild(navigator);

    const weatherForecastDays = [];

    for (let i = 0; i < data.list.length; i++) {
      weatherForecastDays.push(data.list[i]);
    }

    for (let i = 0; i < 5; i++) {
      const day = DayForecastFactory(data.list[i]);
      console.log(day, data);
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

const ForecastNavigator = () => {
  const nav = document.createElement("div");
  nav.className = "flex justify-between items-center";

  const leftButton = document.createElement("button");
  leftButton.className = "rounded-lg bg-blue-500 hover:bg-blue-700";

  const leftIcon = new Image();
  leftIcon.className = "h-8 w-8";
  leftIcon.src = Left;

  const leftText = document.createElement("p");
  leftText.classList.add("sr-only");
  leftText.textContent = "See Next";

  leftButton.append(leftIcon, leftText);

  const rightButton = document.createElement("button");
  rightButton.className = "rounded-lg bg-blue-500 hover:bg-blue-700";

  const rightIcon = new Image();
  rightIcon.className = "h-8 w-8";
  rightIcon.src = Right;

  const rightText = document.createElement("p");
  rightText.classList.add("sr-only");
  rightText.textContent = "See Previous";

  rightButton.append(rightIcon, rightText);

  nav.append(leftButton, rightButton);
  return nav;
};

function DayForecastFactory(data) {
  const card = document.createElement("div");
  card.className = "flex justify-between items-center";

  const day = new Date(data.dt * 1000)

  const dateTime = document.createElement("div");
  dateTime.className =
    "flex flex-col justify-center items-center font-normal text-md";

  const time = document.createElement("span");
  time.className = "";
  time.textContent = getTimeFromDayInstance(data.dt * 1000);

  const date = document.createElement("span");
  date.className = "";
  date.textContent = translateDayIntToString(day.getMonth());

  dateTime.append(time, date);

  const chanceOfRain = document.createElement("div");
  chanceOfRain.className = "flex items-center justify-end gap-1";

  const chance = document.createElement("span");
  chance.className = "font-normal";
  chance.textContent = `${data.pop * 100}%`;

  const rainIcon = new Image();
  rainIcon.className = "w-6 h-6 fill-current";
  rainIcon.src = Raindrop;

  chanceOfRain.append(chance, rainIcon);

  const weatherIcon = new Image();
  weatherIcon.className = "h-6 w-6 fill-current";
  weatherIcon.src = Sunny;

  const highLowTemp = document.createElement("div");
  highLowTemp.className = "font-normal text-md";
  highLowTemp.textContent = `${kelvinToFahrenheit(data.main.temp)}`;

  card.append(dateTime, chanceOfRain, weatherIcon, highLowTemp);

  return card;
}
export default WeatherForecast;
