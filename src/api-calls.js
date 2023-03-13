const api_key = "81b221d07baad085936c6ec899f5fa86"; // This can be public since it's already a public API key

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

async function searchForForecast() {
  const lon = 42.3584;
  const lat = -71.0598;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`,
      { mode: "cors" }
    );

    const forecast = await response.json();

    return forecast;
  } catch (error) {
    console.log(error);
  }
}

async function searchForCity(city, state = "MA") {
  const cityName = city;
  const stateCode = state;
  const countryCode = "US";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=5&appid=${api_key}`
    );

    const city = await response.json();

    return city;
  } catch (error) {
    console.log(error);
  }
}

export { searchForWeather, searchForForecast, searchForCity };
