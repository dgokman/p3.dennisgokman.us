//Click sheet music to get random notes

$( "#sheetmusic" )
       
       .on( "click", function() {
       var i = 5 ;
       var r = Math.random() ;
       var x = Math.round( (i-1) * r) + 1;
       images = new Array
       images[1] = "mozart.png"
       images[2] = "beethoven.png"
       images[3] = "bach.gif"
       images[4] = "chopin.jpg"
       images[5] = "joplin.png"
       var image = images[x]
       document.getElementById('sheetmusic').src = image
       });

//Key animation

$( ".white, .black" )
      
      //move the key 10 degrees on click
      .on( "mousedown", function() {
       $( this ).css({
        "transform": "skew(0deg,10deg)"
        });
      })
      
      //move the key back to original position on conclusion of click
      .on( "mouseup", function() {
      var styles = {
      transform : "skew(0deg,0deg)"
       };
      $( this ).css( styles );    
      });
      
$( ".white, .black" )
 
      //prevent keys from staying in 10deg locked position after click
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

