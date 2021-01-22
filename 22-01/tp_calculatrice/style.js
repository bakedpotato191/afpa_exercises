window.addEventListener("load", nom_user());

function nom_user(){
  var age = prompt('Saisir le nom');
  while (age == ''){
    var age = prompt('Saisir le nom');
  }
  document.title = age;
}

function hideCalc(){
  if (document.getElementsByClassName('container-calc')[0].style.display = 'flex'){
  document.getElementsByClassName('container-calc')[0].style.display = 'none';
  }
  return;
}

function displayCalc(){
  if (document.getElementsByClassName('container-calc')[0].style.display = 'none'){
  document.getElementsByClassName('container-calc')[0].style.display = 'flex';
  }
  return;
}

function displayMessage(id){
  let text = id;
  switch (text){
    case 'value1':
    document.getElementById('container-message').innerHTML = '<p id="message">saisir un nombre </p>';
    document.getElementById('container-message').style.display = 'block';
    break;
    case 'opList':
    document.getElementById('container-message').innerHTML = '<p id="message">selectionner un operateur + - * / </p>';
    document.getElementById('container-message').style.display = 'block';
    break;
    case 'value2':
    document.getElementById('container-message').innerHTML = '<p id="message">saisir un nombre </p>';
    document.getElementById('container-message').style.display = 'block';
    break;
    case 'result':
    document.getElementById('container-message').innerHTML = '<p id="message">le resultat </p>';
    document.getElementById('container-message').style.display = 'block';
    break;
    default:
    break;
  }
}

function hideMessage(){
    document.getElementById('container-message').style.display = 'none';
}

var operation;
var x, y;

function setValue(valeur) {
  operation = valeur;
  if (!(isNaN(operation))) {
    document.getElementById("opList")[0].value = operation;
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
  let x = document.getElementsByClassName("input1").value;
  let y = document.getElementsByClassName("input2").value;
  if (!(x == '' || isNaN(x) || y == '' || isNaN(y))) {
    getResult();
  } else {
    return;
  }
}

function getResult() {
  switch (operation) {
    case '+':
      var result = parseInt(x) + parseInt(y);
      document.getElementById('result').value = result;
      break;
    case '-':
      var result = parseInt(x) - parseInt(y);
      document.getElementById('result').value = result;
      break;
    case '*':
      var result = parseInt(x) * parseInt(y);
      document.getElementById('result').value = result;
      break;
    case '/':
      var result = parseInt(x) / parseInt(y);
      document.getElementById('result').value = result;
      break;
    case '%':
      var result = parseInt(x) % parseInt(y);
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
