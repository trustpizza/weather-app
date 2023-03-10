import SearchBar from "./form";
import { WeatherDataDisplay } from "./weatherDataDisplay";

const weatherDisplay = WeatherDataDisplay();

const homepage = () => {
  const display = document.createElement("div");
  display.className = "w-full flex flex-col justify-center items-center";

  const searchSection = document.createElement("div");
  searchSection.className = "w-full md:px-20 flex justify-center";

  const searchbar = SearchBar();

  searchSection.append(searchbar);

  //   const weatherDisplay = document.createElement("div");
  display.append(searchSection, weatherDisplay.card);
  return display;
};

export { homepage, weatherDisplay };
