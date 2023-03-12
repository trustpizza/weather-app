import SearchBar from "./form";
import { WeatherDataDisplay } from "./weatherDataDisplay";

const weatherDisplay = WeatherDataDisplay();

const homepage = () => {
  const display = document.createElement("div");
  display.className = "w-full flex flex-col justify-center items-center";

  const title = document.createElement("h1");
  title.textContent = "Weather the Storm"
  title.className = "mb-4 md:text-4xl text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"

  const searchSection = document.createElement("div");
  searchSection.className = "w-full md:px-20 flex justify-center";

  const searchbar = SearchBar();

  searchSection.append(searchbar);

  //   const weatherDisplay = document.createElement("div");

  display.append(title, searchSection, weatherDisplay.card);
  return display;
};

export { homepage, weatherDisplay };
