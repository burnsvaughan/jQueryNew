$(function(){
  
  $('.btn').on('click', function(){
               
  var request = $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    data: { 
    title : 'The Best Organic Chicken in Auckland',
    body: "Lorem ipsum dolor amet selfies sustainable coloring book scenester, readymade fixie health goth everyday carry pop-up PBR&B irony     hella. Church-key banjo messenger bag, kinfolk VHS affogato literally cliche quinoa freegan narwhal cray. 90's vexillologist meditation,     shoreditch unicorn typewriter man braid green juice deep v knausgaard irony. Pok pok bitters brunch polaroid, photo booth drinking           vinegar succulents tilde ethical echo park farm-to-table."},
    userId:43
  },
  });

  request.done(function( data ) {
    console.log(data)
  });

  request.fail(function( jqXHR, textStatus ) {
    alert( "Request failed: " + textStatus );
  });
    })
});
               
               
