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
  if (!(valeur == '' || isNaN(valeur))) {
    x = valeur;
    document.getElementsByClassName("input1").value = valeur;
  } else {
    return;
  }
}

function updateInput2(valeur) {
  if (!(valeur == '' || isNaN(valeur))) {
    y = valeur;
    document.getElementsByClassName("input2").value = valeur;
  } else {
    return;
  }
}

function verify() {
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