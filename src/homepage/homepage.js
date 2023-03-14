import SearchBar from "./form";
import {
  weatherDisplay,
  displayContent,
  weatherOfCity,
  weatherForecast,
} from "./weatherDataDisplay";
import SearchResults from "./searchResults";
import navbar from "./navbar";

const searchbar = SearchBar();
weatherForecast.build();
displayContent.addChild(weatherForecast.card);

// weatherDisplay.append(navbar.nav, displayContent)

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

  // const weatherDisplay = document.createElement("div");

  display.append(title, searchSection, citySearchResults, weatherDisplay);
  return display;
};

function hideObj(obj) {
  if (!obj.classList.contains("hidden")) {
    obj.classList.add("hidden");
  }
}

function showObj(obj) {
  if (obj.classList.contains("hidden")) {
    obj.classList.remove("hidden");
  }
}

export { homepage, searchbar, hideObj, showObj };
