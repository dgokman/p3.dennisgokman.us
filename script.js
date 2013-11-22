$( ".white, .black" )
  .on( "mousedown", function() {
    $( this ).css({
      "transform": "skew(0deg,10deg)"
    });
  })
  .on( "mouseup", function() {
    var styles = {
      transform : "skew(0deg,0deg)"
    };
    $( this ).css( styles );    
  });
$( "#c" )
  .on( "mousedown", function() {
    document.getElementById('c-mp3').play();
  });
$( "#d" )
  .on( "mousedown", function() {
    document.getElementById('d-mp3').play();
  });
$( "#e" )
  .on( "mousedown", function() {
    document.getElementById('e-mp3').play();
  });
$( "#f" )
  .on( "mousedown", function() {
    document.getElementById('f-mp3').play();
  });