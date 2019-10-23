var vm = new Vue({
  el: 'app1,
  data: {
    car_info_set: [
      {brand: 'Toyota', model: 'Camry', engine: 'petrol', gearbox: 'automatic'},
      {brand: 'Nissan', model: 'GT-R', engine: 'petrol', gearbox: 'automatic'},
      {brand: 'Honda', model: 'NSX', engine: 'petrol', gearbox: 'automatic'},
      {brand: 'Honda', model: 'CR-V', engine: 'petrol', gearbox: 'automatic'},
      {brand: 'Honda', model: 'Civic', engine: 'petrol', gearbox: 'automatic'},           
    ],
    err_msg: 'Sorry, no car in record',
  }
})
