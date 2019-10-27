<?php
	<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	$(document).ready(function(){
		$.ajax({
			url: "php/todo.update.php",
			data: "",
			dataType "",
			success: function(){
				$('.FIGURETHISOUT').toggleClass("todoCompleted");
			}
		})
	})
