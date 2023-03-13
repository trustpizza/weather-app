const Navbar = () => {
    const nav = document.createElement('nav');
    nav.className =
        "flex gap-2 bg-white rounded w-full p-4"

    const populate = () => {
        const weatherButton = RadioButtonFactory();
        const forecastButton = RadioButtonFactory();
        const radarButton = RadioButtonFactory();

        nav.append(weatherButton,forecastButton,radarButton)
    }

    return { nav, populate };
}

function RadioButtonFactory(action) {
    const button = document.createElement('button');
    button.className = 
        "flex-grow h-10 bg-blue-500 rounded"

    return button;
};

export default Navbar;