var x, y, operation, age;

document.addEventListener('DOMContentLoaded', event => {
  if (localStorage.getItem('title') === null) {
    while ((age = prompt('Entrez votre nom')) === '') {
      continue;
    }
    localStorage.setItem('title', "Bonjour, " + age + "!");
  }
  document.title = localStorage.getItem('title');
}, true);

[document.querySelector('#x'), document.querySelector('#y'), document.querySelector('#operation'), document.querySelector('#reponse'), document.querySelector('#equalsButton')].forEach(item => {
  item.addEventListener('mouseover', event => {
    switch (item.id) {
      case 'x':
        document.getElementById('container-message').innerHTML = '<p id="message">première nombre</p>';
        document.getElementById('container-message').style.visibility = 'visible';
        break;
      case 'operation':
        document.getElementById('container-message').innerHTML = '<p id="message">selectionnez un operateur + - * /</p>';
        document.getElementById('container-message').style.visibility = 'visible';
        break;
      case 'y':
        document.getElementById('container-message').innerHTML = '<p id="message">deuxième nombre</p>';
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
        event.preventDefault();
        break;
    }
  }, false)
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
  }, false)
});

[document.getElementById('show'), document.getElementById('hide')].forEach(item => {
  item.addEventListener("click", event => {
    switch (item.id) {
      case 'hide':
        document.getElementsByClassName('container')[0].style.display = 'none';
        break;
      case 'show':
        document.getElementsByClassName('container')[0].style.display = 'flex';
        break;
      default:
        event.preventDefault();
        break;
    }
  }, false)
});

function verify() {
  var err = 0;
  if (x == '' || isNaN(x)) {
    document.querySelector('ul').innerHTML += "<li> entrez un x </li>"
    err++;
  }
  if (y == '' || isNaN(y)) {
    document.querySelector('ul').innerHTML += "<li> entrez un y </li>"
    err++;
  }
  if (operation == "Operation") {
    document.querySelector('ul').innerHTML += "<li> choisissez une opération </li>"
    err++;
  }
  if (err > 0) {
    return false;
  }
  return true;
}

document.getElementById("equalsButton").addEventListener("click", event => {
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
        event.preventDefault();
        break;
    }
  } else {
    event.preventDefault();
    return false;
  }
}, false);