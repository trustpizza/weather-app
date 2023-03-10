const WeatherDataDisplay = (weatherData) => {
  const card = document.createElement("div");
  card.className = "flex flex-col bg-white rounded p-4 w-full max-w-xs";

  const cityName = document.createElement("div");
  cityName.textContent = "Boston, MA";
  cityName.className = "font-bold text-xl";

  const date = document.createElement("div");
  date.textContent = "Friday 10 March 2023";
  date.className = "text-sm text-gray-500";

  const weatherIconDiv = document.createElement("div");
  weatherIconDiv.className =
    "mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24";
  weatherIconDiv.ariaHidden = "true";

  const weatherIcon = new Image();
  weatherIcon.className = "w-32 h-32";

  weatherIconDiv.appendChild(weatherIcon);

  card.append(cityName, date, weatherIconDiv);

  const update = () => {
    const cardObjs = {
      city: cityName,
      date,
      weatherIcon,
    };
    populateWeatherDisplay(cardObjs);
  };

  return { card, update };
};

function populateWeatherDisplay(objs, data) {
  // update the data
  objs.city.textContent = "Boston";
}

export { WeatherDataDisplay };
