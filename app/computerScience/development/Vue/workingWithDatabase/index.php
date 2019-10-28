<!DOCTYPE html>
<html>
  <head>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	
	<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/vue/dist/vue.js'></script>
  	<script type='text/javascript' src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  </head>
  
  
  <body>
    <p>339</p>
    <div id='app'>
      <ul id='list' v-if='car_info_set.length'>
        <li v-for='element in car_info_set'>
		Brand is <b>{{element.brand}}</b>, model is <b>{{element.model}}</b>,
		engine is <b>{{element.engine}}</b>, and gearbox is <b>{{element.gearbox}}</b>
		<span id='delete_item' @click='delete_item(element.car_id)'>[Delete]</span>
		<span id='edit_item' @click='edit_item(element.car_id)'>[Edit]</span>
        </li>
      </ul>
      <p id='err_msg' v-else>{{err_msg}}</p>
    </div>
  <script type='text/javascript' src='js/app.js'></script>
  
  </body>
</html>
