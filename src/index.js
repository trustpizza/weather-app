import "./style.css";
import { homepage } from "./homepage/homepage";
import Footer from "./homepage/footer";

const content = document.getElementById("content");
const display = homepage();
const footer = Footer();

content.append(display);
content.appendChild(footer);
