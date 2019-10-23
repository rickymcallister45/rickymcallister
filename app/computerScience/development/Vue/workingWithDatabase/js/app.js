var vm = new Vue({
  el: '#app',
  data: {
    car_info_set: [
      {brand: 'Toyota', model: 'Camry', engine: 'petrol', gearbox: 'automatic'},
      {brand: 'Nissan', model: 'GT-R', engine: 'petrol', gearbox: 'automatic'},
      {brand: 'Honda', model: 'NSX', engine: 'petrol', gearbox: 'automatic'},
      {brand: 'Honda', model: 'CR-V', engine: 'petrol', gearbox: 'automatic'},
      {brand: 'Honda', model: 'Civic', engine: 'petrol', gearbox: 'automatic'},           
    ],
    err_msg: 'Sorry, no car in record',
    ajax: null,
    url: 'php/interface.php', 
  },
  created: function(){
	this.ajax = new XMLHttpRequest()
	this.request()
	
},
  methods: {
	request: function(){
		this.ajax.onreadystatechange = this.response
		this.ajax.open('POST', this.url, true)
		this.ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		this.ajax.send('range-all')
 },
	response: function(){
		if(this.ajax.readyState == 4) {
			if(this.ajax.status == 200) {
 				this.err_msg = JSON.parse(this.ajax.responseText)
   }
  }
 },	
  }	
})
