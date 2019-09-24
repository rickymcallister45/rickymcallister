console.log('running');

$('#textArea').keyup(function(event){
  if(event.which == 13) {
    $(form).submit();
    }
 });

$('form').submit(function(){
  $.post('handlers/messages.php?action=sendMessage&message='+ message, function(response) {
    alert(response);
  });
  
  return false;

});
