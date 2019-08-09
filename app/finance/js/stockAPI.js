


let metalSymbols = ['GOLD,','SLV,','COPX,','PPLT'];
let energySymbols = ['USO,','UBG,','UGA,','UHN'];
let grainSymbols =['JJG,','CORN','DBA','RJA'];
let meatSymbols =['MOO'];
let softSymbols = ['JO,','RJA,','CUT'];
let techSymbols = ['AMZN,', 'AAPL,','GOOG,','MSFT'];
let socialSymbols = ['TwTR,','FB,','EBAY'];
let robotSymbols = ['BSX,','IRBT,','NVDA'];
let carSymbols = ['TSLA','GM','F','TM'];
//health,finacial,idustry,realestate,materials,consumerStaples,comsumerDiscretionary


const stockKey = '&api_token=DG21YPaNS0g0rG5LWjkalVLpJdL4MC6HMvgoSU9tH8BAXrxzOOnpgezeS88L';
const urlStock = 'https://www.worldtradingdata.com/api/v1/stock?symbol='; 
let symbols = [metalSymbols,energySymbols,grainSymbols,meatSymbols,softSymbols,techSymbols,socialSymbols,robotSymbols,carSymbols];

for(i=0;i<symbols.length;i++){

	$.getJSON(urlStock + symbols[i] + stockKey , function(Data) {
	
		var targetStock = Data.data;
		
		console.log(targetStock);
	
		for(j=0;j<targetStock.length; j++){
		
		var symbol = targetStock[j].symbol;
		var name = targetStock[j].name;
		var price = targetStock[j].price;
		var yesterdayPrice = targetStock[j].close_yesterday;
			
			$("#stockContainer").append('<div class="stockSymbol"><p>' + targetStock[j].symbol + ':' + '</br></br>' +
				targetStock[j].price +

			 '</p></div>');
		if(price >= yesterdayPrice){
			$("p").css("color", "green" );
			
		}else{
			$("p").css("color", "red");
			
		}
	}

    






    console.log(Data);
});

}

/*

https://www.tradingview.com/markets/stocks-usa/sectorandindustry-sector/

data[""0""].symbol

data[""0""].price


if price is higher or equal be green else make red 
	close_yesterday  vs   price

*/