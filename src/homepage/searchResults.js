import { weatherOfCity, searchbar } from "./homepage";
import { searchForWeather } from "../api-calls";

const CitySearchResultsDisplay = () => {
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 
      "flex gap-2 flex-col md:flex-row"

    const populateResults = (results) => {
      results.forEach(city => {
            const card = CityLink(city);
            resultsContainer.appendChild(card);
            // console.log(CitySearchResultsDisplay())
      });
    }

    const clear = () => {
      while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild)
      }
    }

    return { resultsContainer, populateResults, clear };
};

const SearchResults = CitySearchResultsDisplay();

function CityLink(city) { 
  const button = document.createElement('button');
  let stateAbbreviation = findStateAbbreviation(city.state)
  stateAbbreviation.then((state) => {
    button.textContent = `${city.name}, ${state}`
  })

  button.className = 
    "bg-blue-500 hover:bg-blue-700 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"

  button.addEventListener('click', () => {
    // Clear Buttons
    // Populate Weather Data
      // Do stuff with response
        // weatherDisplay.update(response);
    

    const weather = searchForWeather(city.lon, city.lat);
    weather.then((response) => {
      weatherOfCity.update(response, button.textContent)
    })

    reset();
      // console.log(response, city)
   
    
  })

  return button
}

function reset() {
  SearchResults.clear()
  searchbar.reset();
}

async function findStateAbbreviation(state) {
  try {
    const response = import(
      "../locations/state-names.json"
    )
    const states = await response;
    const abbreviation = await findStateAbbrByValue(state, states);

    return abbreviation
  } catch(error) {
    return error
  }
}

async function findStateAbbrByValue(state, stateList) {
  const stateName =  await Object.keys(stateList).find(key => stateList[key] === state)
  return stateName
}


export default SearchResults;