const searchBar = () => {
  const form = document.createElement("form");
  // form.setAttribute("method", "post");
  form.setAttribute("action", "submit");

  const searchDiv = document.createElement("div");

  const searchbar = document.createElement("input");
  searchbar.setAttribute("type", "text");
  searchbar.setAttribute("name", "searchbar");
  searchbar.setAttribute("placeholder", "Search for a location");

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");

  /* 
        We need a form
        Form takes an input
        Input has a hidden submit button? (maybe instead something else)
        Form searches and finds cities/countries
  */
  searchDiv.append(searchbar, submit);
  form.appendChild(searchDiv);

  return form;
};

export default searchBar;
