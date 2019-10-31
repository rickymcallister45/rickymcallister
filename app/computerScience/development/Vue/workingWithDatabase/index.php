<!DOCTYPE html>
  <head>
	<link rel="stylesheet" type="text/css" href="css/style.css">

	<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/vue/dist/vue.js'></script>
  	<script type='text/javascript' src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  </head>
    
  <body>
    <p>343</p>
    <div id='app'>
      <div id='modal' v-if='edit_switch'>
        <div id='modal_content'>
          <ul>
            <li>
			        <span>Brand: </span>
			        <input placeholder='please enter brand' v-model='edited_item.brand' v-model.trim='edited_item.brand'/>
		        </li>
		        <li>
			        <span>Model: </span>
			        <input  placeholder='please enter model' v-model='edited_item.model' v-model.trim='edited_item.model'/>
		        </li>
		        <li>
			        <span>Engine: </span>
			        <select v-model='edited_item.engine'>
				        <option value='Petrol'>Petrol</option>
				        <option value='Diesel'>Diesel</option>
				        <option value='Electric'>Electric</option>
				        <option value='Hybrid'>Hybrid</option>
				        <option value='Hydrogen'>Hydrogen</option>
			        </select>
		        </li>
		        <li>
			        <span>Automatic: </span>
			        <input type='radio' value='1' v-model='edited_item.gearbox'/>
			        <span>Manual: </span>
			        <input type='radio' value='2' v-model='edited_item.gearbox'/>
		        </li>
		        <li>
            <li><button v-bind:disabled='save_switch' @click='save_edit'>Save</button></li>
          </ul>
        </div>
      </div>
      <ul id='list' v-if='car_info_set.length'>
        <li v-for='element in car_info_set'>
		Brand is <b>{{element.brand}}</b>, model is <b>{{element.model}}</b>,
		engine is <b>{{element.engine}}</b>, and gearbox is <b>{{element.gearbox}}</b>
		<span id='delete_item' @click='delete_item(element.car_id)'>[Delete]</span>
		<span id='edit_item' @click='start_edit(element)'>[Edit]</span>
        </li>
      </ul>
      <p id='err_msg' v-else>{{err_msg}}</p>
	<hr/>
	<ul id='create_item'>
		<li>
			<span>Brand: </span>
			<input placeholder='please enter brand' v-model.trim='new_item.brand'/>
		</li>
		<li>
			<span>Model: </span>
			<input  placeholder='please enter model' v-model.trim='new_item.model'/>
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
			<button v-bind:disabled = 'btn_switch' @click='create_item()'>Create</button>
		</li>
	</ul>
    </div>
  <script type='text/javascript' src='js/app.js'></script>
  
  </body>
</html>
