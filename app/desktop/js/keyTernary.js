document.onkeydown = function(e) {
  switch (e.keyCode) {
        case 37:
            randomNumberToSelectSite--;
            if(randomNumberToSelectSite < 0){
              randomNumberToSelectSite = differnetSites.length;
            }
            background();
            break;
        case 38:
            randomPicture++;
            if(randomPicture > 24){
              randomPicture = 2;
            }
            background();
            break;
        case 39:
            randomNumberToSelectSite++;
            if(randomNumberToSelectSite > differnetSites.length - 1){
              randomNumberToSelectSite = 0;
            }
            background();
            break;
        case 40:
            randomPicture--;
            if(randomPicture < 2){
              randomPicture = 24;
            }
            background();
            break;
        case 18:
            searchBar();
            break;
        case 13:
          runSearch();
          break;
        case 16:
          coinFlip();
          break;
    }
};
