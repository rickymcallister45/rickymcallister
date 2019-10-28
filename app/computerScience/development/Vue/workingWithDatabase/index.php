<!DOCTYPE html>
  <head>
	<link rel="stylesheet" type="text/css" href="css/style.css">

	<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/vue/dist/vue.js'></script>
  	<script type='text/javascript' src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  </head>
    
  <body>
    <p>343</p>
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
	<hr/>
	<ul id='create_item'>
		<li>
			<span>Brand: </span>
			<input placeholder='please enter brand' v-model='new_item.brand' v-model.trim='new_item.model'/>
		</li>
		<li>
			<span>Model: </span>
			<input  placeholder='please enter model' v-model='new_item.model' v-model.trim='new_item.brand'/>
		</li>
		<li>
			<span>Engine: </span>
			<select v-model='new_item.engine'>
				<option value='1'>Petrol</option>
				<option value='2'>Diesel</option>
				<option value='3'>Electric</option>
				<option value='4'>Hybrid</option>
				<option value='5'>Hydrogen</option>
			</select>
		</li>
		<li>
			<span>Automatic: </span>
			<input type='radio' value='1' v-model='new_item.gearbox'/>
			<span>Manual: </span>
			<input type='radio' value='2' v-model='new_item.gearbox'/>
		</li>
		<li>
			<button v-bind:disabled = 'btn_switch'>Create</button>
		</li>
	</ul>
    </div>
  <script type='text/javascript' src='js/app.js'></script>
  
  </body>
</html>
