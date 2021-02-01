var x, y, operation;
document.getElementById("x").addEventListener("keypress", isNumber, false);
document.getElementById("y").addEventListener("keypress", isNumber, false);
document.getElementById("equalsButton").addEventListener("click", getResult);

function verify(x, y, operation) {
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