var x, y, operation;

window.addEventListener("load", nom_user());
document.getElementById("x").addEventListener("keypress", isNumber, false);
document.getElementById("y").addEventListener("keypress", isNumber, false);
document.getElementById("equalsButton").addEventListener("click", getResult, false);
document.getElementById("hide").addEventListener("click", hideCalc, false);
document.getElementById("show").addEventListener("click", showCalc, false);
document.getElementById("equalsButton").addEventListener("mouseover", displayMessage, false);
document.getElementById("x").addEventListener("mouseover", displayMessage, false);
document.getElementById("y").addEventListener("mouseover", displayMessage, false);
document.getElementById("operation").addEventListener("mouseover", displayMessage, false);
document.getElementById("reponse").addEventListener("mouseover", displayMessage, false);
document.getElementById("equalsButton").addEventListener("mouseout", hideMessage, false);
document.getElementById("x").addEventListener("mouseout", hideMessage, false);
document.getElementById("y").addEventListener("mouseout", hideMessage, false);
document.getElementById("operation").addEventListener("mouseout", hideMessage, false);
document.getElementById("reponse").addEventListener("mouseout", hideMessage, false);

function nom_user() {
  var age = prompt('Saisir le nom');
  while (age == '') {
    var age = prompt('Saisir le nom');
  }
  document.title = age;
}

function hideCalc() {
  if (document.getElementsByClassName('container')[0].style.display = 'flex') {
    document.getElementsByClassName('container')[0].style.display = 'none';
  }
  return;
}

function showCalc() {
  if (document.getElementsByClassName('container')[0].style.display = 'none') {
    document.getElementsByClassName('container')[0].style.display = 'flex';
  }
  return;
}

function displayMessage() {
  switch (this.id) {
    case 'x':
      document.getElementById('container-message').innerHTML = '<p id="message">saisir un nombre</p>';
      document.getElementById('container-message').style.visibility = 'visible';
      break;
    case 'operation':
      document.getElementById('container-message').innerHTML = '<p id="message">selectionner un operateur + - * /</p>';
      document.getElementById('container-message').style.visibility = 'visible';
      break;
    case 'y':
      document.getElementById('container-message').innerHTML = '<p id="message">saisir un nombre</p>';
      document.getElementById('container-message').style.visibility = 'visible';
      break;
    case 'reponse':
      document.getElementById('container-message').innerHTML = '<p id="message">le résultat</p>';
      document.getElementById('container-message').style.visibility = 'visible';
      break;
    case 'equalsButton':
      document.getElementById('container-message').innerHTML = '<p id="message">obtenir le résultat</p>';
      document.getElementById('container-message').style.visibility = 'visible';
    default:
      break;
  }
}

function hideMessage() {
  document.getElementById('container-message').style.visibility = 'hidden';
}

function verify() {
  var err = 0;
  if (x == '' || isNaN(x)) {
    document.querySelector('ul').innerHTML += "<li> saisir x </li>"
    err++;
  }
  if (y == '' || isNaN(y)) {
    document.querySelector('ul').innerHTML += "<li> saisir y </li>"
    err++;
  }
  if (operation == "Operation") {
    document.querySelector('ul').innerHTML += "<li> choisir operation </li>"
    err++;
  }
  if (err > 0) {
    return false;
  }
  return true;
}

function getResult(evt) {
  x = document.getElementById("x").value;
  y = document.getElementById("y").value;
  operation = document.getElementById("operation").value;
  document.querySelector('ul').innerHTML = " ";
  if (verify(x, y, operation)) {
    switch (operation) {
      case '+':
        var result = parseFloat(x) + parseFloat(y);
        document.getElementById('reponse').value = result;
        break;
      case '-':
        var result = parseFloat(x) - parseFloat(y);
        document.getElementById('reponse').value = result;
        break;
      case '*':
        var result = parseFloat(x) * parseFloat(y);
        document.getElementById('reponse').value = result;
        break;
      case '/':
        var result = parseFloat(x) / parseFloat(y);
        document.getElementById('reponse').value = result;
        break;
      case '%':
        var result = parseFloat(x) % parseFloat(y);
        document.getElementById('reponse').value = result;
        break;
      default:
        console.log("fail");
        break;
    }
  }
}

function isNumber(evt) {
  var key = evt.key;
  var nombrePattern = /^[0-9.]+$/; // nombre de 0 à 9
  if (nombrePattern.test(key)) {
    return true;
  }
  evt.preventDefault();
  return false;
}