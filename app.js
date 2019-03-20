$(function(){
    $('.nameClicker').on('click', function(){
       console.log('Burns Vaughan');
    });
});

$(function(){
    $('#counterClicker').hover(function(){
      var i
      for (i=1; i<26; i++){
      console.log(i)
      }
    });
});

$(function(){
    $('#square1').mouseover(function(){
     $('#square1').css("background","red")
    });
  $('#square1').mouseout($('#square1').css("background","yellow"));
});

