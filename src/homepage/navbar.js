import { weatherDisplay, displayContent, WeatherOfCity, weatherOfCity } from "./weatherDataDisplay";
import { searchForForecast, searchForWeather, searchForRadar } from "../api-calls";
import { findStateAbbreviation } from "../api-calls";

// weatherDisplay.appendChild(weatherOfCity.card);

const Navbar = () => {
  const nav = document.createElement("nav");
  nav.className = "flex gap-2 bg-white rounded w-full p-4";
  
  const populate = (city) => {
    console.log(city)
    clear();

    const weatherButton = RadioButtonFactory(city, "weather");
    const forecastButton = RadioButtonFactory(city, "forecast");
    const radarButton = RadioButtonFactory(city, "radar");

    nav.append(weatherButton, forecastButton, radarButton);
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
    "flex-grow bg-blue-500 hover:bg-blue-700 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";
  let stateAbbreviation = findStateAbbreviation(city.state);
  stateAbbreviation.then((state) => {
    stateAbbreviation = state;
  });

  if (type === "weather") {
    button.textContent = "Weather";
    console.log(city)
    button.addEventListener("click", () => {
      displayContent.clear()
      const weatherData = searchForWeather(city.lon, city.lat)
      console.log(weatherData)
      weatherData.then((response) => {
        response.state = stateAbbreviation
        weatherOfCity.update(response, city);
        displayContent.addChild(weatherOfCity.card);
      })
    });
    
  } else if (type === "forecast") {
    button.textContent = "Forecast";
    button.addEventListener('click', () => {
        const forecastData = searchForForecast(city.lon, city.lat)
        forecastData.then((response) => {
            console.log(response)
            // Load Forecast
        })
    })
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
