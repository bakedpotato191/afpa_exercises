document.querySelectorAll('.miniature').forEach(element => {
  element.addEventListener('click', event => {
    console.log(event);
    document.querySelector('.container-mainimage').innerHTML = "<img class='fullscreen' src='" + element.src + "' alt='avengers'>";
    document.querySelector('.fullscreen').style.border = "8px solid black";
    let miniatures = document.getElementsByClassName('miniature');
    for (var i = 0; i < miniatures.length; i++) {
      if (element.src == miniatures[i].src) {
        miniatures[i].style.border = "4px solid red";
      } else {
        miniatures[i].style.border = "4px solid black";
      }
    }
  }, false)
});