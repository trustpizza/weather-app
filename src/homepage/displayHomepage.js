import SearchBar from "./form";

const homepage = () => {    
    const display = document.createElement('div')
    
    display.appendChild(SearchBar())

    const weatherDisplay = document.createElement('div');
    
    return display;
}

export default homepage;