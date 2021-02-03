$("input[name='taille']").keypress(function() {

  if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
    event.preventDefault();
  }
});

$("input[name='poids']").keypress(function() {

  if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
    event.preventDefault();
  }
});

$("input[type='submit']").click(function() {
  if ($("input[name='taille']").val() !== "" && $("input[name='taille']").val() > 0 && $("input[name='poids']").val() !== "") {
    var taille = $("input[name='taille']").val();
    var poids = $("input[name='poids']").val();

    imc = parseFloat(poids / Math.pow((taille / 100), 2)).toFixed(1);

    if ($('.result').length === 0) {
      $('.col').append("<div class='h-100 row align-items-center result'></div>");
      $('.result').append("<div class='resultat'></div>");
      $('.resultat').append("<span class='text1'>Résultat</span>");
      $('.resultat').append("<span class='text2'>Votre IMC (indice de masse corporelle) est de:</span>");
      $('.resultat').append("<span class='nombre'>" + imc + "</span>");
      if (imc < 18.5) {
        $('.resultat').append("<span class='type'> IMC < 18.5 : insuffisance pondérale </span>");
      } else if (imc >= 18.5 && imc <= 25) {
        $('.resultat').append("<span class='type'> 18,5 < IMC < 24,9 : poids normal </span>");
      } else if (imc > 25 && imc <= 30) {
        $('.resultat').append("<span class='type'> 25 < IMC < 29,9 : surpoids </span>");
      } else {
        $('.resultat').append("<span class='type'> IMC > 30 : obésité </span>");
      }
    } else {
      $('.nombre').html(imc)
      if (imc < 18.5) {
        $('.type').html('IMC < 18.5 : insuffisance pondérale');
      } else if (imc >= 18.5 && imc <= 25) {
        $('.type').html('18,5 < IMC < 24,9 : poids normal');
      } else if (imc > 25 && imc <= 30) {
        $('.type').html('25 < IMC < 29,9 : surpoids');
      } else {
        $('.type').html('IMC > 30 : obésité');
      }
    }
  } else {
    alert('Saisir tout les valeurs');
  }
});