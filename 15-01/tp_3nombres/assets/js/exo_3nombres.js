var nombres = new Array(3);

for (i=0; i<nombres.length; i++)
{
  var nombre = prompt("Saisis " + parseInt(i+1) + " nombre");

  if ((nombre === '') || isNaN(nombre))
  {
    do {
    var nombre = prompt("La valeur saisie n'est pas un nombre\n \t\t Saisis" + parseInt(i+1) + " nombre");
    }
    while(((nombre === '') || isNaN(nombre)))
  }
    nombres[i] = nombre;
}


if((nombres[0] == nombres[1]) && (nombres[0] == nombres[2]))
{
  console.log("Les trois valeurs sont egales");
}
else if ((nombres [0] == nombres[1]) || (nombres [0] == nombres[2]) || (nombres [1] == nombres[2]))
{
  console.log("Seules 2 valeurs sont identiques");
}
else
{
  console.log("Toutes différentes")
}
