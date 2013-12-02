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

$( ".white, .black" )
  .on( "mousedown", function(event) {
    document.getElementById(event.target.id+'-mp3').play(); 
  }); 





