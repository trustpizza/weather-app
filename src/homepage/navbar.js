import {
  displayContent,
  weatherOfCity,
  weatherForecast,
} from "./weatherDataDisplay";
import {
  searchForForecast,
  searchForWeather,
  searchForRadar,
  findStateAbbreviation,
} from "../api-calls";

// weatherDisplay.appendChild(weatherOfCity.card);

const Navbar = () => {
  const nav = document.createElement("nav");
  nav.className = "flex gap-2 bg-white rounded w-full p-2";

  const populate = (city) => {
    console.log(city);
    clear();

    const weatherButton = RadioButtonFactory(city, "weather");
    const forecastButton = RadioButtonFactory(city, "forecast");
    // const radarButton = RadioButtonFactory(city, "radar");

    nav.append(weatherButton, forecastButton);
  };

  const clear = () => {
    while (nav.firstChild) {
      nav.removeChild(nav.firstChild);
    }
  };

  return { nav, populate };
};

function RadioButtonFactory(city, type) {
  const button = document.createElement("button");
  button.className =
    "flex-grow bg-blue-500 hover:bg-blue-700 font-medium text-white p-1 border border-blue-500 hover:border-transparent rounded";
  let stateAbbreviation = findStateAbbreviation(city.state);
  stateAbbreviation.then((state) => {
    stateAbbreviation = state;
  });

  if (type === "weather") {
    button.textContent = "Weather";
    console.log(city);
    button.addEventListener("click", () => {
      displayContent.clear();
      const weatherData = searchForWeather(city.lon, city.lat);

      weatherData.then((response) => {
        response.state = stateAbbreviation;
        weatherOfCity.update(response, city);

        displayContent.clear();
        displayContent.addChild(weatherOfCity.card);
      });
    });
  } else if (type === "forecast") {
    button.textContent = "Forecast";
    button.addEventListener("click", () => {
      displayContent.clear();
      weatherForecast.clear();
      const forecastData = searchForForecast(city.lon, city.lat);

      forecastData.then((response) => {
        weatherForecast.update(response);

        displayContent.clear();
        displayContent.addChild(weatherForecast.card);
      });
    });
  } else if (type === "radar") {
    button.textContent = "Radar";

    // button.addEventListener('click', () => {
    //     // const radarData = searchForRadar(coord.lat, coord.lon)
    //     // radarData.then((response) => {
    //     //     console.log(response)
    //     // })
    //     // Disabled temporarily
    // })
  }
  return button;
}

const navbar = Navbar();

export default navbar;
