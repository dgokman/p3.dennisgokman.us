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
$( "#g" )
  .on( "mousedown", function() {
    document.getElementById('g-mp3').play();
  });
$( "#a" )
  .on( "mousedown", function() {
    document.getElementById('a-mp3').play();
  });
$( "#b" )
  .on( "mousedown", function() {
    document.getElementById('b-mp3').play();
  });
$( "#c1" )
  .on( "mousedown", function() {
    document.getElementById('c1-mp3').play();
  });
$( "#d1" )
  .on( "mousedown", function() {
    document.getElementById('d1-mp3').play();
  });
$( "#e1" )
  .on( "mousedown", function() {
    document.getElementById('e1-mp3').play();
  });
$( "#f1" )
  .on( "mousedown", function() {
    document.getElementById('f1-mp3').play();
  });
$( "#g1" )
  .on( "mousedown", function() {
    document.getElementById('g1-mp3').play();
  });
$( "#a1" )
  .on( "mousedown", function() {
    document.getElementById('a1-mp3').play();
  });
$( "#b1" )
  .on( "mousedown", function() {
    document.getElementById('b1-mp3').play();
  });
$( "#c2" )
  .on( "mousedown", function() {
    document.getElementById('c2-mp3').play();
  });
$( "#d2" )
  .on( "mousedown", function() {
    document.getElementById('d2-mp3').play();
  });
$( "#e2" )
  .on( "mousedown", function() {
    document.getElementById('e2-mp3').play();
  });
$( "#f2" )
  .on( "mousedown", function() {
    document.getElementById('f2-mp3').play();
  });
$( "#g2" )
  .on( "mousedown", function() {
    document.getElementById('g2-mp3').play();
  });
$( "#a2" )
  .on( "mousedown", function() {
    document.getElementById('a2-mp3').play();
  });
$( "#b2" )
  .on( "mousedown", function() {
    document.getElementById('b2-mp3').play();
  });
$( "#c3" )
  .on( "mousedown", function() {
    document.getElementById('c3-mp3').play();
  });
$( "#d3" )
  .on( "mousedown", function() {
    document.getElementById('d3-mp3').play();
  });
$( "#e3" )
  .on( "mousedown", function() {
    document.getElementById('e3-mp3').play();
  });
$( "#f3" )
  .on( "mousedown", function() {
    document.getElementById('f3-mp3').play();
  });
$( "#g3" )
  .on( "mousedown", function() {
    document.getElementById('g3-mp3').play();
  });
$( "#a3" )
  .on( "mousedown", function() {
    document.getElementById('a3-mp3').play();
  });
$( "#b3" )
  .on( "mousedown", function() {
    document.getElementById('b3-mp3').play();
  });
$( "#c4" )
  .on( "mousedown", function() {
    document.getElementById('c4-mp3').play();
  });
$( "#c-sh" )
  .on( "mousedown", function() {
    document.getElementById('c-sh-mp3').play();
  });
$( "#d-sh" )
  .on( "mousedown", function() {
    document.getElementById('d-sh-mp3').play();
  });
$( "#f-sh" )
  .on( "mousedown", function() {
    document.getElementById('f-sh-mp3').play();
  });
$( "#g-sh" )
  .on( "mousedown", function() {
    document.getElementById('g-sh-mp3').play();
  });
$( "#a-sh" )
  .on( "mousedown", function() {
    document.getElementById('a-sh-mp3').play();
  });
$( "#c1-sh" )
  .on( "mousedown", function() {
    document.getElementById('c1-sh-mp3').play();
  });
$( "#d1-sh" )
  .on( "mousedown", function() {
    document.getElementById('d1-sh-mp3').play();
  });
$( "#f1-sh" )
  .on( "mousedown", function() {
    document.getElementById('f1-sh-mp3').play();
  });
$( "#g1-sh" )
  .on( "mousedown", function() {
    document.getElementById('g1-sh-mp3').play();
  });
$( "#a1-sh" )
  .on( "mousedown", function() {
    document.getElementById('a1-sh-mp3').play();
  });
$( "#c2-sh" )
  .on( "mousedown", function() {
    document.getElementById('c2-sh-mp3').play();
  });
$( "#d2-sh" )
  .on( "mousedown", function() {
    document.getElementById('d2-sh-mp3').play();
  });
$( "#f2-sh" )
  .on( "mousedown", function() {
    document.getElementById('f2-sh-mp3').play();
  });
$( "#g2-sh" )
  .on( "mousedown", function() {
    document.getElementById('g2-sh-mp3').play();
  });
$( "#a2-sh" )
  .on( "mousedown", function() {
    document.getElementById('a2-sh-mp3').play();
  });
$( "#c3-sh" )
  .on( "mousedown", function() {
    document.getElementById('c3-sh-mp3').play();
  });
$( "#d3-sh" )
  .on( "mousedown", function() {
    document.getElementById('d3-sh-mp3').play();
  });
$( "#f3-sh" )
  .on( "mousedown", function() {
    document.getElementById('f3-sh-mp3').play();
  });
$( "#g3-sh" )
  .on( "mousedown", function() {
    document.getElementById('g3-sh-mp3').play();
  });
$( "#a3-sh" )
  .on( "mousedown", function() {
    document.getElementById('a3-sh-mp3').play();
  });
