
        // set the attributes for link element
        link.rel = 'stylesheet';
     
        link.type = 'text/css';
     
        link.href = 'style.css';
        
/* When your mouse cursor enter the background, the fading won't pause and keep playing */ 
$('.carousel').carousel({
    pause: "false" /* Change to true to make it paused when your mouse cursor enter the background */
});

function customWayPoint(className, addClassName, customOffset) {
    var waypoints = $(className).waypoint({
      handler: function(direction) {
        if (direction == "down") {
          $(className).addClass(addClassName);
        } else {
          $(className).removeClass(addClassName);
        }
      },
      offset: customOffset
    });
  }
  
  var defaultOffset = '50%';
  
  for (i=0; i<17; i++) {
    customWayPoint('.timeline__item--'+i, 'timeline__item-bg', defaultOffset);
  }