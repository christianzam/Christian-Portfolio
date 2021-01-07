$('#clicker').click(function(){
  $target = $('#target');
  $target.removeClass('animate');
  setTimeout("$target.addClass('animate');",100)
});

