const searchBar = () => {
    const form = document.createElement('form');
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit");

    const searchDiv = document.createElement('div');

    const searchbar = document.createElement('input');
    
    /* 
        We need a form
        Form takes an input
        Input has a hidden submit button? (maybe instead something else)
        Form searches and finds cities/countries
    */

    return form
};

export default searchBar