var x, y, operation;
document.getElementById("equalsButton").addEventListener("click", getResult, false);
document.getElementById("hide").addEventListener("click", hideCalc, false);
document.getElementById("show").addEventListener("click", showCalc, false);

document.addEventListener('DOMContentLoaded', event => {
  if (localStorage.getItem('title') === null) {
    var age = prompt('Saisir le nom');
    while (age == '') {
      var age = prompt('Saisir le nom');
    }
    localStorage.setItem('title', age);
  }
  document.title = localStorage.getItem('title');
});

[document.querySelector('#x'), document.querySelector('#y'), document.querySelector('#operation'), document.querySelector('#reponse'), document.querySelector('#equalsButton')].forEach(item => {
  item.addEventListener('mouseover', event => {
    switch (item.id) {
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
  })
});

[document.querySelector('#x'), document.querySelector('#y'), document.querySelector('#operation'), document.querySelector('#reponse'), document.querySelector('#equalsButton')].forEach(item => {
  item.addEventListener("mouseout", event => {
    document.getElementById('container-message').style.visibility = 'hidden';
  })
});

[document.querySelector('#x'), document.querySelector('#y')].forEach(item => {
  item.addEventListener("keypress", event => {
    var key = event.key;
    var nombrePattern = /^[0-9.]+$/; // nombre de 0 à 9
    if (nombrePattern.test(key)) {
      return true;
    }
    event.preventDefault();
    return false;
  })
});

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