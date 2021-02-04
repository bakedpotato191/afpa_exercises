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
  if (regexNomPrenom(event.key)) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
});

$('#inputNom, #inputPrenom').on("input", function() {
  if ($(this).val().length > 0) {
    setCorrect($(this));
  } else {
    setPasCorrect($(this));
  }
});

$('#inputEmail4').on("input", function() {
  var regex = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (regex.test($(this).val())) {
    setCorrect($(this));
  } else {
    setPasCorrect($(this));
  }
});

$('#inputTel').on("keypress", function() {
  if (regexTelephone(event.key)) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
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
  console.log(mots_array.length);
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
    $('.container').append("<div class='success'> Merci " + prenom + ", votre message a été bien envoyé!")
    $('.success').css({
      "color": "green",
      "font-size": "18px",
      "font-weight": "700",
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center",
      "text-align": "center",
      "min-height": "100vh"
    });
  } else {
    if ($('.error').length > 0) {
      return;
    } else {
      $('form').append("<div> Remplir tous les champs </div>")
      $('form').children().last().addClass('error');
      $('.error').css({
        "color": "red",
        "font-size": "16px",
        "font-weight": "bold",
        "font-family": "sans-serif",
        "margin-top": "10px"
      });
    }
  }
});

function regexNomPrenom(key) {
  var regex = /^[a-zA-ZÀ-ÿ-. ]*$/;
  if (regex.test(key)) {
    return true;
  } else {
    return false;
  }
}

function regexTelephone(key) {
  var regex = /^[0-9+]*$/;
  if (regex.test(key)) {
    return true;
  } else {
    return false;
  }
}

function setCorrect(element) {
  element.removeClass('vide');
  element.addClass('info');
  $('.info').css({
    "border": "2px solid green"
  });
}

function setPasCorrect(element) {
  element.removeClass('info');
  element.addClass('vide');
  $('.vide').css({
    "border": "2px solid red"
  });
}