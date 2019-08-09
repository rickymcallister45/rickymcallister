console.log('store running');

var titleText = 'Garlic';
var imageURL = 'http://rickymcallister.com/sales/img/candleJPG.jpg';
var description = 'kosher salt infused with rosted garlic';
var price = '$10.00';
var paypalImage = 'https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif?01AD=3khaWFTTvfWlHZkvjvdAFanRiJWisItbvBRmA7JpzOHa7EyoeeUjRtQ&01RI=BBBA8B7582C1735&01NA=';
var paypalValue = 'https://www.paypal.com/webapps/shoppingcart?mfid=1554181871280_3d339fe3d0014&flowlogging_id=3d339fe3d0014#/checkout/shoppingCart';


function setup() {
	noCanvas();
	var holder1 = createDiv();
	holder1.addClass('row');
	holder1.position(0, 100);
	var picture = createImg(imageURL);
	picture.id('picture');
	picture.parent(holder1);
	var titleID = createElement('h1', titleText);
	titleID.id('title');
	titleID.parent(holder1);
	var descriptionID = createElement('h3', description);
	descriptionID.id('description');
	descriptionID.parent(holder1);
	var priceID = createElement('h1', price);
	priceID.id('price');
	priceID.parent(holder1);
	var button = createImg(paypalImage);
	button.parent(holder1);
	button.mousePressed(payPal);

	
	function payPal(){
		window.open(paypalValue);
	
	}

}

