import SearchBar from "./form";

const content = document.getElementById("content");

const App = () => {
  const api_key = "81b221d07baad085936c6ec899f5fa86";

  const search = SearchBar();

  search.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTarget = searchbar.value;

    if (searchTarget) {
      const result = searchForWeather(searchTarget);
      const searchbar = document.getElementById("searchbar");

      result.then((response) => {
        console.log(response);
      });

      searchbar.value = "";
    }

    async function searchForWeather(search) {
      console.log(search);
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
  });

  content.append(search);
};

export default App;
