var vm = new Vue({
  el: '#app',
  data: {
    car_info_set: [],
    err_msg: 'Sorry, no car in record',
    url: 'include/interface.php', 
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
		var self = this;
		$.post({
			url: self.url,
			data: {
				action: 'delete_item',
				car_id: car_id
			}
		})
		.always(function(data){
			self.car_info_set = '';
			self.err_msg = '';
		})
		.done(function(data){
			var result = JSON.parse(data);
			if(result[0]){
				self.retrieve_all();
			}
		})
		.fail(function(data){
			self.err_msg = data.statusText;
		})
	}
},	
		
});

