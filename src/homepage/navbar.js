import { weatherDisplay, WeatherOfCity } from "./weatherDataDisplay";

console.log(weatherDisplay)
const weatherOfCity = WeatherOfCity();
console.log(weatherOfCity)
// weatherDisplay.appendChild(weatherOfCity.card);

const Navbar = () => {
    const nav = document.createElement('nav');
    nav.className =
        "flex gap-2 bg-white rounded w-full p-4"

    const populate = () => {
        clear();
        
        const weatherButton = RadioButtonFactory();
        const forecastButton = RadioButtonFactory();
        const radarButton = RadioButtonFactory();

        nav.append(weatherButton,forecastButton,radarButton)
    }

    const clear = () => {
        while (nav.firstChild) {
            nav.removeChild(nav.firstChild);
          }
    }

    return { nav, populate };
}

function RadioButtonFactory(action) {
    const button = document.createElement('button');
    button.className = 
        "flex-grow h-10 bg-blue-500 rounded";

    button.addEventListener('click', () => {
        // Clear display
    })

    return button;
};

const navbar = Navbar();

export {navbar, weatherOfCity };