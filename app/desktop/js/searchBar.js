function searchBar() {
  var search = prompt("Please enter your query", "");
  if (search !== null) {
    window.open('http://www.google.com/search?q=' + search + '&btnI');
  }}
