$(document).ready(function(){
var zLimit = 2;

$("#navBill").click(function(){
  $("#bills").css('z-index', zLimit);
  zLimit++;
});

$("#navCards").click(function(){
  $("#cards").css('z-index',zLimit);
  zLimit++;
});

$("#navCredit").click(function(){
  $("#credit").css('z-index',zLimit);
  zLimit++;
});

$("#navTrading").click(function(){
  $("#trading").css('z-index',zLimit);
  zLimit++;
});

});
