const CitySearchResultsDisplay = () => {
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 
      "flex gap-2 flex-col md:flex-row"

    function populateResults(results) {
      results.forEach(city => {
            const card = CityLink(city);
            resultsContainer.appendChild(card);
      });
    }

    return { resultsContainer, populateResults };
};

function CityLink(city) { 
  const button = document.createElement('button');
  button.textContent = `${city.name}, ${city.state}`;
  button.className = 
    "bg-blue-500 hover:bg-blue-700 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"

  button.addEventListener('click', () => {
    // Clear Buttons
    // Populate Weather Data
    const x = findCityAbbreviation(city.state)
  })

  return button
}

async function findCityAbbreviation(state) {
  try {
    const response = import(
      "../locations/state-names.json"
    )
    const states = await response;
    const abbreviation = await findCityAbbrByValue(state, states);

    console.log(abbreviation)
    return abbreviation
  } catch(error) {
    return error
  }
}

async function findCityAbbrByValue(state, stateList) {
  const stateName =  await Object.keys(stateList).find(key => stateList[key] === state)
  return stateName
}

const SearchResults = CitySearchResultsDisplay();

export default SearchResults;