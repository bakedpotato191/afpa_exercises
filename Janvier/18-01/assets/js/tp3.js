let semaine = ['Lundi', 'Mar', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanc'];

// on supprime le derniere valeur en tableau
let supprElement = semaine.pop();

// on affiche tout les elements
document.write(semaine.join(', '));

// on ajoute Dimanche à la fin du tableau
let ajtElement = semaine.push('Dimanche')

// on determine l'index de Mar et le remplace par Mardi

let pos = semaine.indexOf('Mar');
semaine [pos] = 'Mardi';

//on affiche le nombre de valeur du tableau
document.write("<br>" + "Nombre de valuer du tableau = " + semaine.length);

//on affiche le 5-ème valeur
document.write("<br>" + "Le 5-ème valuer = " + semaine[4]);

document.write("<br>" + semaine.join(', '));
