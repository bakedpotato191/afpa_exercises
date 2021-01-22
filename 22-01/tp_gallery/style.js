function displayImage(link) {

  var path = link.src;
  var miniatures = document.getElementsByClassName('miniature');

  for (var i = 0; i < miniatures.length; i++) {
    if (path == miniatures[i].src) {
      link.style.border = "2px solid red";
    } else {
      miniatures[i].style.border = "2px solid black";
    }
  }
}