$(function(){
    $('.button1').on('click', function(){
     var numberLetters =($('.someText').val().length);
      $('.box2').append('<p></p>')
      $("p").html(numberLetters);
    });
});
