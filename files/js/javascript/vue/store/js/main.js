console.log('running');

var app = new Vue({
	el: '#app',
	data: {
		product: 'Bathroom Bombs',
		image: "http://rickymcallister.com/sales/img/bathBombs/showerBombs.jpg",
		inStock: true,
		variants: [
		{
			variantId: 1,
			variantColor: "#e8e84c",
			variantImage: "http://rickymcallister.com/sales/img/bathBombs/morningEnergy.jpg",
			variantButton: 'https://www.paypal.com/webapps/shoppingcart?mfid=1555566059327_374fc113e0fb6'
		},
		{
			variantId: 2,
			variantColor: "#9de881",
			variantImage: "http://rickymcallister.com/sales/img/bathBombs/spaDay.jpg",
			variantButton: "https://www.paypal.com/webapps/shoppingcart?mfid=1555566173949_d90631ba9046c"
		},
		{
			variantId: 3,
			variantColor: "#819fe8",
			variantImage: "http://rickymcallister.com/sales/img/bathBombs/sweetRain.jpg",
			variantButton: "https://www.paypal.com/webapps/shoppingcart?mfid=1555566255399_a00f408112aab"
		},
		{
			variantId: 4,
			variantColor: "#9872e5",
			variantImage: "http://rickymcallister.com/sales/img/bathBombs/sweetSlumber.jpg",
			variantButton: "https://www.paypal.com/webapps/shoppingcart?mfid=1555566290825_827145f877511"
		}],
		cart: 0
					},
	methods: {
		addToCart() {
			this.cart +=1
		},
		updateProduct(variantImage){
			this.image = variantImage
		}
	}					
})
// left off @ number 6