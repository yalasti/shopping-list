$(document).ready(function () {

  $('#add').click(function() {
    if( $('input#add-item').val().trim().length === 0 ) {
          alert("Please add an item to the shopping list.");
        $('#message').show();
        $('input#add-item').val("");
    } else { 

    $('ul').append('<li class="todo"><button class="item">Complete</button>' + $('input#add-item').val() + '</li>');
    $('input#add-item').val("");
    $('#message').hide();

    };  
  
  });

  $('ul').on('click', '.item', function() {
    $(this).closest('li').toggleClass('Complete');
    $(this).parent(".todo").css("text-decoration", "line-through");
    $(this).remove();
  });

});