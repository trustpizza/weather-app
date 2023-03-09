const SearchBar = () => {
  const api_key = "81b221d07baad085936c6ec899f5fa86";

  const form = document.createElement("form");
  form.setAttribute("action", "submit");
  form.id = "searchbar"

  const searchDiv = document.createElement("div");

  const searchbar = document.createElement("input");
  searchbar.setAttribute("type", "text");
  searchbar.setAttribute("name", "searchbar");
  searchbar.setAttribute("placeholder", "Search for a location");
  searchbar.id = "searchbarInput";

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTarget = searchbar.value;

    if (searchTarget) {
      const result = searchForWeather(searchTarget);

      result.then((response) => {
        console.log(response)
      });

      searchbar.value = "";
    }
  })

  searchDiv.append(searchbar, submit);
  form.appendChild(searchDiv);

  return form;
};

async function searchForWeather(search) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=81b221d07baad085936c6ec899f5fa86`,
      { mode: "cors" }
    );

    const weatherData = await response.json();

    return weatherData;
  } catch (error) {
    console.log(error);
  }
}

export default SearchBar;
