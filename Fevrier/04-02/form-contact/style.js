$(function() {
  $('textarea').css({
    "resize": "none"
  });
  $('form').css({
    "margin-top": "50px"
  });
});

var limit = 200;

$('#inputNom, #inputPrenom').on("keypress", function() {
  return(regexNomPrenom(event.key));
});

$('#inputNom, #inputPrenom').on("input", function() {
  if ($(this).val().length) {
    setCorrect($(this));
  } else {
    setPasCorrect($(this));
  }
});

$('#inputEmail4').on("input", function() {
  var regex = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (regexEmail($(this).val())) {
    setCorrect($(this));
  } else {
    setPasCorrect($(this));
  }
});

$('#inputTel').on("keypress", function() {
  return (regexTelephone(event.key));

});

$('#inputTel').on("input", function() {
  var phoneExp = /^((\+)33|0|0033)[1-9](\d{2}){4}$/g;
  if (phoneExp.test($(this).val())) {
    setCorrect($(this));
  } else {
    setPasCorrect($(this));
  }
});

$('#exampleFormControlTextarea1').on("input", function() {
  var mots_array = $(this).val().split(" ");
  var spaceCount = ($(this).val().split(" ").length - 1);
  var mots = 0;
  var caracteres = 0;
  for (var index = 0; index < mots_array.length; index++) {
    if (mots_array[index] !== "") {
      mots++;
      caracteres = caracteres + mots_array[index].length;
    }
  }
  if ($(this).val().length > 0) {
    setCorrect($(this));
  } else {
    setPasCorrect($(this));
  }

  $('.mots').html(mots + " Mot(s)" + " / " + (limit - caracteres) + " Caractère(s)" + " / 200");
  $('#exampleFormControlTextarea1').attr("maxlength", limit + spaceCount);

});

$("button").on("click", function() {
  if ($('input').not('.info').length == 0 && $('textarea').hasClass('info')) {
    var prenom = $('#inputPrenom').val();
    $('form').hide();
    $('<div></div>').html("Merci " + prenom + ", votre message a été bien envoyé!").addClass('.success').css({
      "color": "green",
      "font-size": "18px",
      "font-weight": "700",
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center",
      "text-align": "center",
      "min-height": "100vh"
    }).appendTo('.container');
  } else {
    if ($('.error').length) {
      return;
    } else {
      $('<div></div>').html('Remplir tous les champs').addClass('error').css({
        "color": "red",
        "font-size": "16px",
        "font-weight": "bold",
        "font-family": "sans-serif",
        "margin-top": "10px"
      }).appendTo('form');
    }
  }
});

function regexNomPrenom(key) {
  var regex = /^[a-zA-ZÀ-ÿ-. ]*$/;
  return (regex.test(key));
}

function regexTelephone(key) {
  var regex = /^[0-9+]*$/;
  return(regex.test(key));
}

function regexEmail(value){
  var regex = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return(regex.test(value));
}

function setCorrect(element) {
  element.removeClass('vide');
  element.addClass('info').css({
    "border": "2px solid green"
  });
}

function setPasCorrect(element) {
  element.removeClass('info');
  element.addClass('vide').css({
    "border": "2px solid red"
  });
}