let semaine = ['Lundi', 'Mar', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanc'];

// on supprime le derniere valuer en tableau
let supprElement = semaine.pop();

// on affiche tout les elements
document.write(semaine.join(', '));

// on ajoute Dimance a la fin du tableau
let ajtElement = semaine.push('Dimanche')

// on repmlace Mar par Mardi

let pos = semaine.indexOf('Mar');
semaine [pos] = 'Mardi';

//on affiche le nombre de valeur du tableau
document.write("<br>" + "Nombre de valuer du tableau = " + semaine.length);

//on affiche le 5-eme valeur
document.write("<br>" + "Le 5-eme valuer = " + semaine[4]);

document.write("<br>" + semaine.join(', '));
