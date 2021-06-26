function scrollTo(element){
  document.querySelector(element).scrollIntoView({behavior: 'smooth'});
}

document.querySelector('#Desk--goToServ').addEventListener('click', function(event){
  event.preventDefault;
  scrollTo('#servico')
});

document.querySelector('#Desk--goToCont').addEventListener('click', function(event){
  event.preventDefault;
  scrollTo('#contato')
});


document.querySelector('#Mob--goToServ').addEventListener('click', function(event){
  event.preventDefault;
  scrollTo('#servico')
});

document.querySelector('#Mob--goToCont').addEventListener('click', function(event){
  event.preventDefault;
  scrollTo('#contato')
});