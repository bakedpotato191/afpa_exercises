//console.log ou quoi

// on initialize array
var fruits = ['Banane', 'Raisin', 'Pomme'];

//on affiche la liste
console.log(fruits.join(', '));

// on demande a l'utilisateur de saisir le nom de fruits
var valeur = prompt('Saisissez un nom de fruits');

//si la valeur existe on la supprime
if (fruits.includes(valeur)){
  console.log("Votre choix: " + valeur);
  var pos = fruits.indexOf(valeur);
  var removedItem = fruits.splice(pos, 1);
}
//si non on affiche indisponible
else {
  console.log('indisponible')
}

// on affiche à nouveau la liste
console.log('------');

console.log(fruits.join(', '));
