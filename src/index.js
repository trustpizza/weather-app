import "./style.css";
import { homepage } from "./homepage/homepage";
import Footer from "./homepage/footer";
/*
    Planning:

    The weather app needs a homepage where people can search
    After searching, the page will display results of cities by similar names
    If you click on one of the names, the weather app will load and display the city's weather

    Creation Process:
    1) Create homepage with search bar (No functionality)
    2) Create display page for city
        - After UI is created, populate the areas with information
    3) Implement search functionality
*/
// import("./locations/state-names").then((data) => {
//     console.log(data)
// })
const content = document.getElementById("content");
const display = homepage();
const footer = Footer();

content.append(display);
// content.appendChild(footer);
