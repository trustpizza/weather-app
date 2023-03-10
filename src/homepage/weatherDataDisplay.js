import Cloudy from "../photos/weather-cloudy.svg"

const WeatherDataDisplay = () => {
  const card = document.createElement("div");
  card.className = "flex flex-col bg-white rounded p-4 w-full max-w-xs";

  // Header of Card
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
  weatherIcon.src = Cloudy
  // Add an ALT to image!
  weatherIcon.className = "w-32 h-32";

  weatherIconDiv.appendChild(weatherIcon);
  // End Header of Card

  // Main Temperature Section

  const tempSection = document.createElement('div');
  tempSection.className = "flex flex-row items-center justify-center mt-6"  

  const temp = document.createElement('div');
  temp.className = "font-medium text-6xl"
  temp.textContent = "24°F"

  const rightHalf = document.createElement('div');
  rightHalf.className = "flex flex-col items-center ml-6"

  const cloudCoverage = document.createElement('div');
  cloudCoverage.textContent = "Cloudy";

  const highTemp = document.createElement('div');
  highTemp.className = "mt-1";
  highTemp.ariaHidden = "true";

  const highTempSpan = document.createElement('span');
  highTempSpan.textContent = "28°F";

  highTemp.appendChild(highTempSpan);

  const lowTemp = document.createElement('div');
  lowTemp.className = "mt-1";
  lowTemp.ariaHidden = "true";

  const lowTempSpan = document.createElement('span');
  lowTempSpan.textContent = "22°F";

  lowTemp.appendChild(lowTempSpan);

  rightHalf.append(cloudCoverage, highTemp, lowTemp);

  tempSection.append(temp, rightHalf)

  // End Main Temp Section

  // Misc Weather Information

  const miscWeatherInfoSection = document.createElement('div');
  miscWeatherInfoSection.className = "flex flex-row justify-between mt-6";

  const sunriseSection = document.createElement('div');
  sunriseSection.className = "flex flex-col items-center";
  
  const sunriseTitle = document.createElement('h3');
  sunriseTitle.className = "font-medium text-sm";
  sunriseTitle.textContent = "Sunrise"

  const sunrise = document.createElement('span');
  sunrise.className = "text-sm text-gray-500";
  sunrise.textContent = "6:43 AM";

  sunriseSection.append(sunriseTitle, sunrise)

  const sunsetSection = document.createElement('div');
  sunsetSection.className = "flex flex-col items-center";

  const sunsetTitle = document.createElement('h3');
  sunsetTitle.className = "font-medium text-sm";
  sunsetTitle.textContent = "Sunset"

  const sunset = document.createElement('span');
  sunset.className = "text-sm text-gray-500";
  sunset.textContent = "5:49 PM";

  sunsetSection.append(sunsetTitle, sunset)

  const windSection = document.createElement('div');
  windSection.className = "flex flex-col items-center";
  
  const windTitle = document.createElement('h3');
  windTitle.className = "font-medium text-sm";
  windTitle.textContent = "Wind";

  const wind = document.createElement('span');
  wind.className = "text-sm text-gray-500";
  wind.textContent = "4mp/h SE";

  windSection.append(windTitle, wind);

  const humiditySection = document.createElement('div');
  humiditySection.className = "flex flex-col items-center";

  const humidityTitle = document.createElement('h3');
  humidityTitle.className = "font-medium text-sm";
  humidityTitle.textContent = "humidity"

  const humidity = document.createElement('span');
  humidity.className = "text-sm text-gray-500";
  humidity.textContent = "23%";

  humiditySection.append(humidityTitle, humidity)

  miscWeatherInfoSection.append(sunriseSection, sunsetSection, windSection, humiditySection)

  // End Misc Weather Info

  const update = (data) => {
    const cardObjs = {
      cityName,
      date,
      weatherIcon,
      wind,
      humidity,
      sunrise,
      sunset,
    };
    populateWeatherDisplay(cardObjs);
  };

  card.append(cityName, date, weatherIconDiv, tempSection, miscWeatherInfoSection);

  return { card, update };
};

function populateWeatherDisplay(objs, data) {
  // update the data
  objs.cityName.textContent = "Boston";
}

export { WeatherDataDisplay };
