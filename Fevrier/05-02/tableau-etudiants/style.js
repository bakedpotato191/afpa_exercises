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

$(".btn-ajouter").on("click", function() {
  if (verifierChamps()) {
    creationLigne();
    ajouterLesBoutons();
    resetInput();
  }
});

$('.btn-sauvegarder').on("click", function() {
  if (verifierChamps()) {
    var obj_index = editButton - 1;
    etudiants[obj_index] = {
      "prenom": inputs.eq(0).val(),
      "nom": inputs.eq(1).val(),
      "email": inputs.eq(2).val(),
      "telephone": inputs.eq(3).val()
    };

    for (i = 0; i < inputs.length; i++) {
      $('tbody tr').eq(editButton - 1).children('td').eq(i).html(Object.values(Object.values(etudiants[obj_index]))[i]);
    }

    $('.btn-ajouter').prop("disabled", false);
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
  if ($(this).val().length) {
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
    $('.btn-ajouter').trigger("click");
  }
});

function creationLigne() {
  $('<tr></tr>').appendTo('tbody');
  $('<th></th>').attr("scope", "row").css({
    "text-align": "center",
    "vertical-align": "middle"
  }).html($('tbody tr').length).appendTo('tr:last');

  var nouveau_etudiant = {
    "prenom": inputs.eq(0).val(),
    "nom": inputs.eq(1).val(),
    "email": inputs.eq(2).val(),
    "telephone": inputs.eq(3).val()
  };

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
}

function ajouterLesBoutons() {
  editNumber = $('.btn-modifier').length;

  $('<button></button>').attr({
    "type": "button",
    "class": "btn btn-success btn-modifier",
    "id": editNumber + 1
  }).css({
    "margin-left": "10px"
  }).html('<i class="fa fa-pencil-square-o" aria-hidden="true"></i>').appendTo('td:last');

  $('<button></button>').attr({
    "type": "button",
    "class": "btn btn-danger btn-supprimer"
  }).css("margin-left", "10px").html('<i class="fa fa-trash" aria-hidden="true"></i>').appendTo('td:last');

  $('.btn-ajouter').blur();
  $('.btn-modifier').on("click", function() {

    var cells = $('tbody tr').eq($(this).index()).children('td');

    for (i = 0; i < cells.length; i++) {
      inputs.eq(i).val(cells[i].textContent);
      setCorrect(inputs.eq(i));
    }

    editButton = $(this).index() + 1; 

    $('.btn-ajouter').prop('disabled', true);
    $('.btn-sauvegarder').prop('disabled', false);
  });

  $(".btn-supprimer").unbind('click').click(function() {
    if (confirm("Supprimer l'étudiant?")) {

      $('tbody tr').eq($(this).index() - 1).remove();

      etudiants.splice($(this).index() - 1, 1);

      if (!($('tbody tr').length)) {
        $('.btn-sauvegarder').prop("disabled", true);
        $('.btn-ajouter').prop("disabled", false);
      }
      var element_th = $('tbody th');
      for (var i = 0; i < etudiants.length; i++) {
        element_th.eq(i).html(i + 1);
      }
    }
  });
}

function regexNomPrenom(key) {
  var regex = /^[a-zA-ZÀ-ÿ-. ]*$/;
  return (regex.test(key));
}

function regexTelephone(key) {
  var regex = /^[0-9+]*$/;
  return (regex.test(key));
}

function verifierChamps() {
  var correct = true;
  for (i = 0; i < inputs.length; i++) {
    if (!(inputs.eq(i).hasClass('rempli'))) {
      inputs.eq(i).css("border", "2px solid red");
      correct = false;
    }
  }
  return correct;
}

function emailExists(email) {
  var exists = false;
  for (var i = 0; i < etudiants.length; i++) {
    if ((etudiants[i].email == email) && !((editButton - 1) === i)) {
      exists = true;
      break;
    }
  }
  return exists;
}

function setCorrect(element) {
  element.removeClass('vide');
  element.addClass('rempli').css({
    "border": "2px solid green"
  });
}

function setPasCorrect(element) {
  element.removeClass('rempli');
  element.addClass('vide').css({
    "border": "2px solid red"
  });
}

function resetInput() {
  inputs.val('').css("border", "");
  inputs.removeClass('rempli');
  $('.warning').remove();
}