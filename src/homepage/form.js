const api_key = "81b221d07baad085936c6ec899f5fa86";

const SearchBar = () => {
  const form = document.createElement("form");
  form.setAttribute("action", "submit");
  form.id = "searchbar";
  form.className = "relative mb-3 xl:w-96"

  const searchDiv = document.createElement("div");
  searchDiv.className = "relative"

  const searchImgDiv = document.createElement("div");
  searchImgDiv.className =
    "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"

  const searchbar = document.createElement("input");
  searchbar.setAttribute("type", "text");
  searchbar.setAttribute("name", "searchbar");
  searchbar.setAttribute("placeholder", "Search for a location");
  searchbar.id = "searchbarInput";
  searchbar.className = 
    "block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");
  submit.className =
    "text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTarget = searchbar.value;

    if (searchTarget) {
      const result = searchForWeather(searchTarget);

      result.then((response) => {
        console.log(response);
      });

      searchbar.value = "";
    }
  });

  searchDiv.append(searchbar, submit);
  form.appendChild(searchDiv);

  return form;
};

async function searchForWeather(search) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${api_key}`,
      { mode: "cors" }
    );

    const weatherData = await response.json();

    return weatherData;
  } catch (error) {
    console.log(error);
  }
}

export default SearchBar;
