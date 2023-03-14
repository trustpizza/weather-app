import "./style.css";
import { homepage } from "./homepage/homepage";
import Footer from "./homepage/footer";
import Clouds from "./photos/weather-cloudy.svg"

function setFavicon(image) {
    const headTitle = document.querySelector('head');
    const setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', image);
    headTitle.appendChild(setFavicon);
}

setFavicon(Clouds)


const content = document.getElementById("content");
const display = homepage();
const footer = Footer();

content.append(display);
content.appendChild(footer);
