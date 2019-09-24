console.log('running');

$('#textArea').keyup(function(event){
  if(event.which == 13) {
    $(form).submit();
    }
 });

$('form').submit(function(){
  alert('form is submitted using jquery');
  
  return false;

});
