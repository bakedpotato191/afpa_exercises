/*
Depuis l'ajustement du calendrier grégorien, l'année n’est bissextile que dans l’un des deux cas suivants :
    si l'année est divisible par 4 et non divisible par 100;
    si l'année est divisible par 100 et divisible par 400.
*/

var an = prompt("Veuillez entrer un an");
Bissextile(an);

function Bissextile(x){
  if (x % 4 == 0){
    if (x % 100 == 0){
      if (x % 400 == 0){
        alert("C'est une année bissextile");
      }
    }
    else {
      alert("C'est une année bissextile");
    }
  }
  else {
    alert("C'est pas une année bissextile");
  }
}
