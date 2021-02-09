var inputs, editButton, editNumber, i, etudiants;

$(function() {
  $('.btn-sauvegarder').prop("disabled", true);
  inputs = $('input');

  $('thead').find('th').css({
    "text-align": "center",
    "vertical-align": "middle"
  });

  $('.nomTable').css({
    "font-size": "25px",
    "font-weight": "bold",
    "margin": "20px 0px 20px 0px"
  });

  etudiants = [];
});

$(".btn-primary").on("click", function() {
  if (verifierChamps()) {
    creationLigne();
    ajouterLesBoutons();
    resetInput();
  }
});

$('.btn-sauvegarder').on("click", function() {
  if (verifierChamps()) {
    for (i = 0; i < inputs.length; i++) {
      $('tbody').children('tr').eq(editButton - 1).children('td').eq(i).html(inputs.eq(i).val());
    }

    etudiants[editButton - 1] = {
      "prenom": inputs.eq(0).val(),
      "nom": inputs.eq(1).val(),
      "email": inputs.eq(2).val(),
      "telephone": inputs.eq(3).val()
    }
    $('.btn-primary').prop("disabled", false);
    $(this).prop("disabled", true).blur();
    resetInput();
  }
});

$('#inputNom, #inputPrenom').on("keypress", function() {
  if (!(regexNomPrenom(event.key))) {
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
  if (regex.test($(this).val()) && !(emailExists($(this).val()))) {
    setCorrect($(this));
  } else {
    setPasCorrect($(this));
  }
});

$('#inputTel').on("keypress", function() {
  if (!(regexTelephone(event.key))) {
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

$('#inputNom, #inputPrenom,#inputEmail4, #inputTel').on('keyup', function(e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    $('.btn-primary').trigger("click");
  }
});

function creationLigne() {
  $('<tr></tr>').appendTo('tbody');
  $('<th></th>').attr("scope", "row").css({
    "text-align": "center",
    "vertical-align": "middle"
  }).html($('tbody').children('tr').length).appendTo('tr:last');

  let nouveau_etudiant = {
    "prenom": inputs.eq(0).val(),
    "nom": inputs.eq(1).val(),
    "email": inputs.eq(2).val(),
    "telephone": inputs.eq(3).val()
  }

  etudiants.push(nouveau_etudiant);
  var last = etudiants.slice(-1)[0];

  Object.keys(last).forEach(function(key) {
    $('<td></td>').attr("class", key).css({
      "text-align": "center",
      "vertical-align": "middle"
    }).html(last[key]).appendTo('tr:last');
  });


  $('<td></td>').css({
    "display": "flex",
    "justify-content": "center",
  }).appendTo('tr:last');

  editNumber = $('.btn-modifier').length;

  $('<button></button>').attr({
    "type": "button",
    "class": "btn btn-success btn-modifier",
    "value": editNumber + 1
  }).css({
    "margin-left": "10px"
  }).html('<i class="fa fa-pencil-square-o" aria-hidden="true"></i>').appendTo('td:last');

  $('<button></button>').attr({
    "type": "button",
    "class": "btn btn-danger btn-supprimer"
  }).css("margin-left", "10px").html('<i class="fa fa-trash" aria-hidden="true"></i>').appendTo('td:last');
}

function ajouterLesBoutons() {
  $('.btn-primary').blur();
  $('.btn-modifier').on("click", function() {
    var child = $(this).parent().parent().children();
    for (i = 1; i < child.length - 1; i++) {
      inputs.eq(i - 1).val(child[i].textContent);
    }
    $('.btn-primary').prop("disabled", true);
    $('.btn-sauvegarder').prop("disabled", false);
    editButton = $(this).val();
    for (i = 0; i < inputs.length; i++) {
      setCorrect(inputs.eq(i));
    }
  });

  $(".btn-supprimer").unbind('click').click(function() {
    if (confirm("Supprimer l'étudiant?")) {

      let tr = $(this).closest('tr');
      let tr_index = tr.index();
      tr.remove();
      etudiants.splice(tr_index, 1);

      if (!($('tbody').children('tr').length)) {
        $('.btn-sauvegarder').prop("disabled", true);
        $('.btn-primary').prop("disabled", false);
      }
      var element_th = $('tbody').find('th');
      for (var i = 0; i < etudiants.length; i++) {
        element_th.eq(i).html(i + 1);
      }
    }
  });
  $('button:last').html('<i class="fa fa-trash" aria-hidden="true"></i>');
}

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

function verifierChamps() {
  var count = 0;
  for (i = 0; i < inputs.length; i++) {
    if (!(inputs.eq(i).hasClass('info'))) {
      inputs.eq(i).css("border", "2px solid red");
      count++;
    }
  }
  if (count > 0) {
    return false;
  } else {
    return true;
  }
}

function emailExists(email) {
  var found = false;
  for (var i = 0; i < etudiants.length; i++) {
    if (etudiants[i].email == email) {
      found = true;
      break;
    }
  }
  return found;
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

function resetInput() {
  inputs.val('').css("border", "");
  inputs.removeClass('info');
  $('.warning').remove();
}