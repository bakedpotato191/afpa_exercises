var operation;
var x, y;
document.getElementById("x").addEventListener("keypress", isNumber, false);
document.getElementById("y").addEventListener("keypress", isNumber, false);

function verify() {
  x = document.getElementById("x").value;
  y = document.getElementById("y").value;
  operation = document.getElementById("operation").value;
  var error = 0;

  if (x == '' || isNaN(x)) {
    document.querySelector('ul').innerHTML += "<li> saisir x </li>"
    error++;
  }
  if (y == '' || isNaN(y)) {
    document.querySelector('ul').innerHTML += "<li> saisir y </li>"
    error++;
  }
  if (operation == "Operation") {
    document.querySelector('ul').innerHTML += "<li> choisir operation </li>"
    error++;
  }

  if (error > 0) {
    return false;
  }
  return true;
}

function getResult() {
  document.querySelector('ul').innerHTML = " ";
  if (verify()) {
    switch (operation) {
      case '+':
        var result = parseFloat(x) + parseFloat(y);
        document.getElementById('result').value = result;
        break;
      case '-':
        var result = parseFloat(x) - parseFloat(y);
        document.getElementById('result').value = result;
        break;
      case '*':
        var result = parseFloat(x) * parseFloat(y);
        document.getElementById('result').value = result;
        break;
      case '/':
        var result = parseFloat(x) / parseFloat(y);
        document.getElementById('result').value = result;
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