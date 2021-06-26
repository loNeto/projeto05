var hover = document.querySelectorAll('li');
  for(var i = 0; i < hover.length; i++){
    hover[i].addEventListener('mouseenter', function(event){
      event.target.style.color = '#007a56';
    }, false);

    hover[i].addEventListener('mouseleave', function(event){
      event.target.style.color = '';
    }, false);
  }