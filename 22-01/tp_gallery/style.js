function displayImage(link) {
  var path = link.src;
  var miniatures = document.getElementsByClassName('miniature');
  document.getElementsByClassName('container-mainimage')[0].innerHTML = "<img class='fullscreen' src='" + path + "' alt='avengers'>";
  document.getElementsByClassName('container-mainimage')[0].style.border = "8px solid black";
  for (var i = 0; i < miniatures.length; i++) {
    if (path == miniatures[i].src) {
      link.style.border = "4px solid red";
    } else {
      miniatures[i].style.border = "4px solid black";
    }
  }
}