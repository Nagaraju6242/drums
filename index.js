var drums = document.querySelectorAll('button');

for(var i=0; i < drums.length ; i++){
  drums[i].addEventListener('click' , function(){
    var text = this.innerHTML;
    ba(text);
    var audio = new Audio('sounds/' + text + '.mp3');
    audio.play();
  })
}

document.addEventListener("keypress" , function(event){
  var key = event.key;
  ba(key);
  var audio = new Audio('sounds/' + key + '.mp3');
  audio.play();
})

function ba(key){
  var ab = document.querySelector('.' + key);
  ab.classList.add('pressed');
  setTimeout(function(){
    ab.classList.remove('pressed');
  },150);
}
