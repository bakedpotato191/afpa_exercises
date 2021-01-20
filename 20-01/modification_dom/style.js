var operation;
var x, y;

function setValue(valeur) {
  operation = valeur;
  if (!(operation == "" || isNaN(operation))) {
    document.getElementById("opList").value = operation;
  } else {
    return;
  }
}

function updateInput1(valeur) {
  if (isNumber(valeur)) {
    x = valeur;
    document.getElementsByClassName("input1").value = x;
  } else {
    return;
  }
}

function updateInput2(valeur) {
  if (isNumber(valeur)) {
    y = valeur;
    document.getElementsByClassName("input2").value = y;
  } else {
    return;
  }
}

function verify() {
  x = document.getElementsByClassName("input1").value;
  y = document.getElementsByClassName("input2").value;
  if (!(x == '' || isNaN(x) || y == '' || isNaN(y))) {
    getResult();
  } else {
    return;
  }
}

function getResult() {
  switch (operation) {
    case 'addition':
      var result = parseInt(x) + parseInt(y);
      document.getElementById('result').value = result;
      break;
    case 'substraction':
      var result = parseInt(x) - parseInt(y);
      document.getElementById('result').value = result;
      break;
    case 'multiplication':
      var result = parseInt(x) * parseInt(y);
      document.getElementById('result').value = result;
      break;
    case 'division':
      var result = parseInt(x) / parseInt(y);
      document.getElementById('result').value = result;
      break;
    default:
      alert("Choisissez une opération");
      break;
  }
}

function isNumber(valeur) {
  var nombrePattern = /^[0-9]+$/; // nombre de 0 à 9
  return nombrePattern.test(valeur);
}