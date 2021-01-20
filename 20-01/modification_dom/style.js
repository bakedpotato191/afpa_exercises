var operation = '';
var x, y;

function setValue(valeur) {
  operation = valeur;
  document.getElementById("opList").value = valeur;
  console.log(valeur);
}

function updateInput1(valeur) {
  x = valeur;
  document.getElementsByClassName("input1").value = valeur;
  console.log(valeur);
}

function updateInput2(valeur) {
  y = valeur;
  document.getElementsByClassName("input2").value = valeur;
  console.log(valeur);
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