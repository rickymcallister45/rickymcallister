$(document).ready(function(){
 			$(".menu-icon").click(function(){
 				$(".menu-icon").toggleClass("active")
 			})
 			$(".menu-icon").click(function(){
 				$(".sidebar").toggleClass("active")
 			})
 			$("html").keydown(function(tab){
				if (tab.keyCode == 9) {
    			window.open('http://rickymcallister.com/desktop.html', 'rickymcallister');
			}
});
 		})