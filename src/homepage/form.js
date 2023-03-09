const searchBar = () => {
  const form = document.createElement("form");
  // form.setAttribute("method", "post");
  form.setAttribute("action", "submit");

  const searchDiv = document.createElement("div");

  const searchbar = document.createElement("input");
  searchbar.setAttribute("type", "text");
  searchbar.setAttribute("name", "searchbar");
  searchbar.setAttribute("placeholder", "Search for a location");

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");

  /* 
        We need a form
        Form takes an input
        Input has a hidden submit button? (maybe instead something else)
        Form searches and finds cities/countries
  */
  searchDiv.append(searchbar, submit);
  form.appendChild(searchDiv);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTarget = searchbar.value;

    if (searchTarget) {
      const result = searchForWeather(searchTarget);

      result.then(function(response) {
        console.log(response)
      })

      searchbar.value = ""
    }
  })

  return form;
};

async function searchForWeather(search) {
  console.log(search)
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=81b221d07baad085936c6ec899f5fa86`, {mode: "cors"})
  
    const weatherData = await response.json();

    return weatherData;
  } catch(error) {
    console.log(error)
  }
}

export default searchBar;
