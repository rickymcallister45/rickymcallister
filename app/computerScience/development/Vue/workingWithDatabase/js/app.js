var vm = new Vue({
  el: '#app',
  data: {
    car_info_set: [],
    err_msg: 'Sorry, no car in record',
    url: 'php/interface.php', 
  },
  created: function(){
	this.retrieve_all();
},
  methods: {
	retrieve_all: function(){
		var self = this;
		$.ajax({
			url: self.url,
			method: 'POST',
			data: {
				action: 'retrieve_all'
				}	
			})
		.always(function(data){
			self.car_info_set = '';
			self.err_msg = '';
		})
		.done(function(data){
			var result = JSON.parse(data);
		if(result[0]){
			self.car_info_set = result[1];
		}else{
			self.err_msg = result[1];
		}
		})
		.fail(function(data){
			self.err_msg = data.statusText;
		})
	},
	delete_item: function(car_id){
		console.log(car_id);
	}
},	
		
});
setInterval(function(){vm.retrieve_all()}, 1000);
