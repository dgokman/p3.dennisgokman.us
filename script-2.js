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

var notes=["#c","#d","#e"];
var mp3 = "-mp3"
$( notes )
  .on( "mousedown", function() {
    document.getElementById(notes + mp3).play();
    console.log(notes + mp3)
  });






