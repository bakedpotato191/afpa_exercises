/*
Depuis l'ajustement du calendrier grégorien, l'année n’est bissextile que dans l’un des deux cas suivants :
    si l'année est divisible par 4 et non divisible par 100;
    si l'année est divisible par 100 et divisible par 400.
*/

var annee = prompt("Veuillez entrer un an");
Bissextile(annee);

function Bissextile(x){
  if ((x % 4 == 0) && (x % 100 !=0) || (x % 400 == 0))
  {
    alert("C'est une année bissextile");
  }
  else
  {
    alert("C'est pas une année bissextile");
  }
}
