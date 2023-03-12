const footer = () => {
    const container = document.createElement('footer');
    container.className = "p-4 bg-white absolute bottom-0 w-full shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"

    const linkSection = document.createElement('div');
    linkSection.className = "sm:flex sm:items-center sm:justify-between"
    
    const TOPshoutout = document.createElement('span');
    TOPshoutout.textContent = "© 2023 ";

    const TOPlink = document.createElement('a');
    TOPlink.textContent = "The Odin Project";

    TOPlink.className = "hover:underline";
    TOPlink.href = "https://www.theodinproject.com/lessons/javascript-weather-app"

    TOPshoutout.appendChild(TOPlink);

    linkSection.append(TOPshoutout)

    container.append(linkSection)

    return container;
}

export default footer;