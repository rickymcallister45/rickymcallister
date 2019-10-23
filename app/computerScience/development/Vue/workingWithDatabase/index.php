<!DOCTYPE html>
  <head>
  </head>
  
  <script type='text/javascript' src='https://cdn.jsdelivr.net/npm/vue/dist/vue.js'></script>
  <body>
    <p>335</p>
    <div id='app'>
      <ul id='list' v-if='car_info_set.length'>
        <li v-for='element in car_info_set'>
		Brand is <b>{{element.brand}}</b>, model is <b>{{element.model}}</b>,
		engine is <b>{{element.engin}}</b>, and gearbox is <b>{{element.gearbox}}</b>
        </li>
      </ul>
      <p id='err_msg' v-else>{{err_msg}}</p>
    </div>
  <script type='text/javascript' src='js/app.js'></script>
  
  </body>
</html>
