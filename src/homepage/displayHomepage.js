import SearchBar from "./form";

const homepage = () => {
  const display = document.createElement("div");

  const searchSection = document.createElement('div');
  searchSection.className = "flex justify-center";
  searchSection.append(SearchBar());

//   const weatherDisplay = document.createElement("div");

  display.append(searchSection)
  return display;
};

export default homepage;
