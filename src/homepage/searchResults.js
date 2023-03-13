const CitySearchResultsDisplay = () => {
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 
      ""

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

  button.addEventListener('click', () => {
    // Clear Buttons
    // Populate Weather Data
  })

  return button
}

const SearchResults = CitySearchResultsDisplay();

export default SearchResults;