import SearchBar from "./form";

const homepage = () => {
  const display = document.createElement("div");
  display.className =
    "w-full flex"

  const searchSection = document.createElement('div');
  searchSection.className = "w-full md:px-20 flex justify-center";
  searchSection.append(SearchBar());

//   const weatherDisplay = document.createElement("div");
  display.append(searchSection)
  return display;
};

export default homepage;
