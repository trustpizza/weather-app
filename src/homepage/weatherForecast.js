import Sunny from "../photos/sunshine.svg";
import Raindrop from "../photos/raindrop.svg";

import Left from "../photos/left-arrow.svg";
import Right from "../photos/right-arrow.svg"

const WeatherForecast = () => {
  const card = document.createElement("div");
  card.className = "flex flex-col space-y-6 w-full bg-white p-4 rounded-xl overflow-y-auto max-h-96 md:max-h-none";

  const build = () => {
    const navigator = ForecastNavigator();
    card.appendChild(navigator);
    for (let i = 0; i < 5; i++) {
      const day = DayForecastFactory();
      card.appendChild(day);
    }
  };

  const reset = () => {
    while (card.firstChild) {
      card.removeChild(card.firstChild);
    }
  };

  return { card, build, reset };
};

const ForecastNavigator = () => {
  const nav = document.createElement("div");
  nav.className = "flex justify-between items-center";

  const leftButton = document.createElement("button");
  leftButton.className = "rounded-lg bg-blue-500 hover:bg-blue-700";
  const leftIcon =  new Image();
  leftIcon.className = 'h-8 w-8'
  leftIcon.src = Left;

  leftButton.append(leftIcon)

  const rightButton = document.createElement("button");
  rightButton.className = "rounded-lg bg-blue-500 hover:bg-blue-700";
  const rightIcon = new Image();
  rightIcon.className = "h-8 w-8";
  rightIcon.src = Right;

  rightButton.append(rightIcon)

  nav.append(leftButton, rightButton);
  return nav;
};

function DayForecastFactory() {
  const card = document.createElement("div");
  card.className = "flex justify-between items-center";

  const dateTime = document.createElement("div");
  dateTime.className = "flex flex-col justify-center items-center font-normal text-md";

  const time = document.createElement('span');
  time.className = "";
  time.textContent = "10:00 PM"

  const date = document.createElement("span");
  date.className = "";
  date.textContent = "Friday";

  dateTime.append(time, date)

  const chanceOfRain = document.createElement("div");
  chanceOfRain.className = "flex items-center justify-end gap-1";

  const chance = document.createElement("span");
  chance.className = "font-normal";
  chance.textContent = "100%";

  const rainIcon = new Image();
  rainIcon.className = "w-6 h-6 fill-current";
  rainIcon.src = Raindrop;

  chanceOfRain.append(chance, rainIcon);

  const weatherIcon = new Image();
  weatherIcon.className = "h-6 w-6 fill-current";
  weatherIcon.src = Sunny;

  const highLowTemp = document.createElement("div");
  highLowTemp.className = "font-normal text-md";
  highLowTemp.textContent = "39° / 52°";

  card.append(dateTime, chanceOfRain, weatherIcon, highLowTemp);

  return card;
}
export default WeatherForecast;
