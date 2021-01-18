//on demande a saisir un nombre entre 0 et 100
var nombre = prompt("Saisissez un nombre enter 0 et 100");

// on vérifie si le nombre est entre 0 et 100, si non on affiche la meme prompt jusqu'à la correct valeur
while((nombre < 1) || (nombre >  99))
{
  nombre = prompt("Saisissez un nombre enter 0 et 100");
}

//on appelle le fonction premier et on lui passe le parametre nombre
premier(nombre);

//
//function pour déterminer si un nombre est premier ou pas
function premier(x)
{
    if (x == 1)
    {
      alert(x + ' est pas un nombre premier');
      return;
    }
    else if(x == 2){
      alert(x + ' est un nombre premier');
      return;
    }
    else
    {
      for (var i=2; i*i<= x; i++)
      {
        if (x % i == 0){
          alert(x + " est pas un nombre premier");
          return;
        }

      }
      alert(x + " est un nombre premier");
      return;
    }
}
