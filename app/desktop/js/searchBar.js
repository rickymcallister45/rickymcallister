function searchBar(){
  
  var searchbar = document.createElement("INPUT");
  searchbar.setAttribute("type", "text");
  searchbar.setAttribute("id", "searchbar");
  searchbar.setAttribute("autofocus", '');
  searchbar.style.width = "800px";
  searchbar.style.height = "400px";
  searchbar.style.position = "absolute";
  searchbar.style.top = "25vh";
  searchbar.style.left = "25vw";
  searchbar.style.fontSize = "100px";
  searchbar.style.textAlign = "center";
  
  document.body.appendChild(searchbar);
  
}


function hideSearchBar() {
    var hideSearchBar = document.getElementById("searchbar").remove();
  }
  
  function runSearch(){
    var inputVal = document.getElementById("searchbar").value;
    window.open('http://www.google.com/search?q=' + inputVal + '&btnI');
    setTimeout(hideSearchBar, 1000);
    
  }
