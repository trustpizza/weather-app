import navbar from "./navbar";
import WeatherOfCity from "./weatherOfCity";
import WeatherForecast from "./weatherForecast";

const WeatherDataDisplay = () => {
  const container = document.createElement("div");
  container.className = "flex flex-col gap-2 rounded w-full max-w-sm hidden";

  return container;
};

const weatherDisplay = WeatherDataDisplay();

const DisplayContent = () => {
  const container = document.createElement("div");
  container.className = "bg-white bg-white rounded w-full";

  const clear = () => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };

  const addChild = (child) => {
    container.appendChild(child);
  };

  return { container, clear, addChild };
};

const weatherOfCity = WeatherOfCity();
const weatherForecast = WeatherForecast();

const displayContent = DisplayContent();
weatherDisplay.append(navbar.nav, displayContent.container);

export { weatherDisplay, displayContent, weatherOfCity, weatherForecast };
