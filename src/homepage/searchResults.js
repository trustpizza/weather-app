const CitySearchResultsDisplay = (results) => {
    const resultsContainer = document.createElement('div');

    results.forEach(city => {
        console.log(cityLink(city))
    });

    return resultsContainer;
};

function cityLink(city) {
  const card = document.createElement("div");

  const link = document.createElement('a');
  link.textContent = `${city.name}, ${city.state}`

  card.append(link);

  return card
}


export default CitySearchResultsDisplay;