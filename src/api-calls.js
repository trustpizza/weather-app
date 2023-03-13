const apiKey = "81b221d07baad085936c6ec899f5fa86"; // This can be public since it's already a public API key

async function searchForWeather(lon, lat) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
      // `https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${apiKey}`,
      { mode: "cors" }
    );

    const weatherData = await response.json();

    return weatherData;
  } catch (error) {
    console.log(error);
  }
}

async function searchForRadar(lon, lat) {
  const z = 25;
  const x = 20;
  const y = 20;
  console.log(x, y)
  try {
    const response = await fetch(
      `https://tile.openweathermap.org/map/precipitation_new/${z}/${x}/${y}.png?appid=${apiKey}`,
      // `https://tile.openweathermap.org/map/precipitation/${z}/${x}/${y}.png?appid=${apiKey}`,
      { mode: "cors" }
    )

    const radar = await response.json();
    console.log(response, radar)
    return radar;
  } catch(error) {
    console.log(error);
  }
}

async function searchForForecast(lon, lat) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`,
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
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=5&appid=${apiKey}`
    );

    const city = await response.json();

    return city;
  } catch (error) {
    console.log(error);
  }
}

export { searchForWeather, searchForForecast, searchForCity, searchForRadar };
