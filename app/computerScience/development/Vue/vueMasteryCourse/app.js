Vue.component('product', {
  template: `
  <div class='product'>
        
        <div class='product-image'>
          <img :src='image'>
        </div>
      
        <div class='product-info'>
          <h1>{{ product }}</h1>
          <p v-if='inventory > 2'>In Stock</p>
          <p v-else>Out of Stock</p>
          <ul>
            <li v-for='ingrediants in details'
                 :key='ingrediants.ingrediantId'>
              <p>{{ ingrediants }} </p>
            </li>
          </ul>
          <div v-for='variant in variants'
                :key='variant.variantId'
                class='color-box'
                :style='{backgroundColor: variant.variantColor}'
                >
            <p class='colorBoxText' @mouseover ='updateProduct(variant.variantImage)'>{{ variant.variantTitle}}</p>
          </div>
      
      <button @click='addToCart()'>Add to Cart</button>
      
      <div class='cart'>
        <p>Cart ({{cart}})</p>
      </div>
      
      </div>
    </div>
  `,
   data() {
     return {
    product: 'Soap',
    image: './poppySeedSoap.jpg',
    inventory: 6,
    details: ['Olive Oil Based', 'Hand Poured in the USA'],
    variants: [
      {
      variantId: 100,
      variantTitle: 'moisturizing',
      variantIngrediant: 'Poppy Seeds',
      variantImage: './poppySeedSoap.jpg',
      variantColor: '#dcdeed',
      },
      {
      variantId: 101,
      variantTitle: 'crystal',
      variantIngrediant: 'quartz',
      variantImage: './crystalSoap.jpg',
      variantColor: '#816caf',
      },
      {
      variantId: 102,
      variantTitle: 'exfoliating',
      variantIngrediant: 'coffee',
      variantImage: 'coffeeSoap.jpg',
      variantColor: '#72583d',
      }
      ],
    cart: 0,
   }
  },
  methods: {
    addToCart: function() {
    this.cart += 1;
    },
    updateProduct: function(variantImage) {
      this.image = variantImage
      console.log(variantImage)
    },
  },
   
  
});


var app = new Vue({
  el: '#app',
});