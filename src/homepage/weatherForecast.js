import Sunny from "../photos/sunshine.svg";
import Raindrop from "../photos/raindrop.svg";

const WeatherForecast = () => {
  const card = document.createElement("div");
  card.className = "flex flex-col space-y-6 w-full bg-white p-4 rounded-xl";

  const build = () => {
    const navigator = ForecasteNavigator();
    card.appendChild(navigator);
    for (let i = 0; i < 8; i++) {
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

const ForecasteNavigator = () => {
  const nav = document.createElement("div");
  nav.className = "flex justify-between items-center";

  const leftButton = document.createElement("button");
  leftButton.className = "rounded-full bg-blue-500 hover:bg-blue-700";

  const rightButton = document.createElement("button");

  nav.append(leftButton, rightButton);
  return nav;
};

function DayForecastFactory() {
  const card = document.createElement("div");
  card.className = "flex justify-between items-center";

  const date = document.createElement("div");
  date.className = "font-normal text-md";
  date.textContent = "10:00 PM";

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

  card.append(date, chanceOfRain, weatherIcon, highLowTemp);

  return card;
}
export default WeatherForecast;
