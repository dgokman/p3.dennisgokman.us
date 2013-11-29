//Key animation

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
$( ".white, .black" )
  .on( "mouseenter", function() {
    $( this ).css({
      "transform": "skew(0deg,0deg)"
    });
  })
  .on( "mouseleave", function() {
    var styles = {
      transform : "skew(0deg,0deg)"
    };
    $( this ).css( styles );    
  });
  
//Key notes

$( "#c, #d, #e" )
  .on( "mousedown", function() {
    document.querySelectorAll('#c-mp3, #d-mp3, #e-mp3').play();
  });
