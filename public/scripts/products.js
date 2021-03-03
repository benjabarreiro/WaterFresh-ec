function show(e) {
    var event = e || window.event;
    switch(event.type) {
      case 'mouseover':
        e.target.style.color = 'white';
        break;
      case 'mouseout':
        e.target.style.color = 'transparent';
        break;
    }
  }
   
  window.onload = function() {
    var moreInfoDisplay = document.getElementsByClassName("moreInfo");
  
    for (var i=0, len=moreInfoDisplay.length; i<len; i++) { 
      moreInfoDisplay[i].addEventListener('mouseover', function(e) {
          show(e);
      });
      moreInfoDisplay[i].addEventListener('mouseout', function(e) {
          show(e);
      });
    }
  }