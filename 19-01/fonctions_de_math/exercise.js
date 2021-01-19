while (!(isNumber(x))) {
  var x = prompt("Donner un x");
}

while (!(isNumber(y))) {
  var y = prompt("Donner un y");
}

while (!(operation == 'addition' || operation == 'division' || operation == 'soustraction' || operation == 'multiplication' || operation == 'modulo')) {
  var operation = prompt("Addition, Division, Multiplication, Soustraction, Modulo\n\t\t\tChoisissez un operation").toLowerCase();
}

switch (operation) {
  case 'addition':
    console.log(addition(x, y));
    break;
  case 'division':
    console.log(division(x, y));
    break;
  case 'multiplication':
    console.log(multiplication(x, y));
    break;
  case 'soustraction':
    console.log(soustraction(x, y));
    break;
  case 'modulo':
    console.log(modulo(x, y));
    break;
}

function addition(x, y) {
  return x + y;
}

function division(x, y) {
  return x / y;
}

function multiplication(x, y) {
  return x * y;
}

function soustraction(x, y) {
  return x - y;
}

function modulo(x, y) {
  return x % y;
}

function isNumber(valeur) {
  var nombrePattern = /^[0-9]+$/; // nombre de 0 à 9
  return nombrePattern.test(valeur);
}