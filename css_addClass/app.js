$(function(){
    $('.button1').on('click', function(){
       $('.box1').addClass('active');
      var theClass = $('.box1').attr('class');
    console.log( theClass );
      $('.active').css("display", "block")
    });
});
