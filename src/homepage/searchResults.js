import { searchbar, showObj } from "./homepage";
import { searchForWeather, findStateAbbreviation } from "../api-calls";
import { displayContent, weatherDisplay, weatherForecast, weatherOfCity } from "./weatherDataDisplay";
import navbar from "./navbar";

const CitySearchResultsDisplay = () => {
  const resultsContainer = document.createElement("div");
  resultsContainer.className = "flex gap-2 flex-col md:flex-row";

  const populateResults = (results) => {
    results.forEach((city) => {
      const card = CityLink(city);
      resultsContainer.appendChild(card);
      // console.log(CitySearchResultsDisplay())
    });
  };

  const clear = () => {
    while (resultsContainer.firstChild) {
      resultsContainer.removeChild(resultsContainer.firstChild);
    }
  };

  return { resultsContainer, populateResults, clear };
};

const SearchResults = CitySearchResultsDisplay();

function CityLink(city) {
  const button = document.createElement("button");
  let stateAbbreviation = findStateAbbreviation(city.state);
  stateAbbreviation.then((state) => {
    stateAbbreviation = state;
    button.textContent = `${city.name}, ${stateAbbreviation}`;
  });

  button.className =
    "bg-blue-500 hover:bg-blue-700 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";

  button.addEventListener("click", () => {
    const weather = searchForWeather(city.lon, city.lat);
    weather.then((response) => {
      response.state = stateAbbreviation;
      // navbar.populate()
      weatherOfCity.update(response);
      navbar.populate(city);

      displayContent.clear();
      displayContent.addChild(weatherOfCity.card)
    });

    showObj(weatherDisplay);
    reset();
  });

  return button;
}

function reset() {
  SearchResults.clear();
  searchbar.reset();
}

export default SearchResults;
