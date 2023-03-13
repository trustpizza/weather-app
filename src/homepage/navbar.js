const Navbar = () => {
    const nav = document.createElement('nav');
    nav.className =
        "flex gap-2"

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
        ""

    return button;
};

export default Navbar;