import { weatherDisplay, WeatherOfCity } from "./weatherDataDisplay";
import { searchForForecast, searchForWeather, searchForRadar } from "../api-calls";

// weatherDisplay.appendChild(weatherOfCity.card);

const Navbar = () => {
  const nav = document.createElement("nav");
  nav.className = "flex gap-2 bg-white rounded w-full p-4";

  const populate = (data) => {
    clear();

    const coord = {
        "lat": data.lat,
        "lon": data.lon
    }

    const weatherButton = RadioButtonFactory(coord, "weather");
    const forecastButton = RadioButtonFactory(coord, "forecast");
    const radarButton = RadioButtonFactory(coord, "radar");

    nav.append(weatherButton, forecastButton, radarButton);
  };

  const clear = () => {
    while (nav.firstChild) {
      nav.removeChild(nav.firstChild);
    }
  };

  return { nav, populate };
};

function RadioButtonFactory(coord, type) {
  const button = document.createElement("button");
  button.className = 
    "flex-grow bg-blue-500 hover:bg-blue-700 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";

  if (type === "weather") {
    button.textContent = "Weather";

    button.addEventListener("click", () => {
      const weatherData = searchForWeather(coord.lat, coord.lon)
      weatherData.then((response) => {
          console.log(response)
      })
    });
    
  } else if (type === "forecast") {
    button.textContent = "Forecast";
    button.addEventListener('click', () => {
        const forecastData = searchForForecast(coord.lat, coord.lon)
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
