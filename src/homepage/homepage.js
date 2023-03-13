import SearchBar from "./form";
import {WeatherDataDisplay, WeatherOfCity} from "./weatherDataDisplay";
import SearchResults from "./searchResults";

const weatherDisplay = WeatherDataDisplay();
const weatherOfCity = WeatherOfCity();
weatherDisplay.appendChild(weatherOfCity.card)

const searchbar = SearchBar();

const homepage = () => {
  const display = document.createElement("div");
  display.className = "w-full flex flex-col justify-center items-center";

  const title = document.createElement("h1");
  title.textContent = "Weather the Storm";
  title.className =
    "mb-4 md:text-4xl text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white";

  const searchSection = document.createElement("div");
  searchSection.className = "w-full md:px-20 flex justify-center";

  
  searchSection.append(searchbar);

  const citySearchResults = SearchResults.resultsContainer;


  //   const weatherDisplay = document.createElement("div");

  display.append(title, searchSection, citySearchResults, weatherDisplay);
  return display;
};

export { homepage, weatherOfCity, searchbar };
