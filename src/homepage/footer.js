import Github from "../photos/github.svg";
import XML from "../photos/xml.svg";

const footer = () => {
  const container = document.createElement("footer");
  container.className =
    "p-2 bg-white absolute bottom-0 w-screen shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-gray-800";
  container.classList.add('hidden') // Temp hiding

  const linkSection = document.createElement("div");
  linkSection.className = "flex items-center justify-between w-full";

  const TOPshoutout = document.createElement("span");
  TOPshoutout.textContent = "© 2023 ";

  const TOPlink = document.createElement("a");
  TOPlink.textContent = "The Odin Project";
  TOPlink.className = "hover:underline";
  TOPlink.href =
    "https://www.theodinproject.com/lessons/javascript-weather-app";

  TOPshoutout.appendChild(TOPlink);

  // Socials
  const socials = document.createElement("div");
  socials.className = "flex space-x-6 justify-center";

  const githubLink = SocialFactory(
    "https://github.com/trustpizza/weather-app",
    Github,
    "Github Reposity of this project"
  );

  const portfolioLink = SocialFactory(
    "https://trustpizza.github.io/portfolio/",
    XML,
    "Portfolio Website"
  );

  socials.append(githubLink, portfolioLink);
  // Add github
  // Add Portfolio link

  linkSection.append(TOPshoutout, socials);

  container.append(linkSection);

  return container;
};

function SocialFactory(address, icon, info) {
  const social = document.createElement("a");
  social.href = address;
  social.target = "_blank";
  social.className = "text-gray-500 hover:text-gray-900 dark:hover:text-white";

  const socialImg = new Image();
  socialImg.src = icon;
  socialImg.className = "w-10 h-10";

  const socialSpan = document.createElement("span");
  socialSpan.textContent = info;
  socialSpan.className = "sr-only";

  social.append(socialImg, socialSpan);

  return social;
}

export default footer;
