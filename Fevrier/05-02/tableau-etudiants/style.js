$(function() {
  $('form').css({
    "margin-top": "50px"
  });

  $('.btn-info').prop("disabled", true);
  inputs = $('input');

  $('thead').find('th').css({
    "text-align": "center",
    "vertical-align": "middle"
  });
});

$(".btn-primary").on("click", function() {
  if (verifierChamps()) {
    $('<tr></tr>').appendTo('tbody');
    $('<th></th>').attr("scope", "row").css({
      "text-align": "center",
      "vertical-align": "middle"
    }).html($('tbody').children('tr').length).appendTo('tr:last');

    var classes = ['prenom', 'nom', 'email', 'telephone']
    for (var i = 0; i < classes.length; i++) {
      $('<td></td>').attr("class", classes[i]).css({
        "text-align": "center",
        "vertical-align": "middle"
      }).html(inputs.eq(i).val()).appendTo('tr:last');
    }

    $('<td></td>').css({
      "display": "flex",
      "justify-content": "center",
    }).appendTo('tr:last');

    editNumber = $('.btn-success').length;

    $('<button></button>').attr({
      "type": "button",
      "class": "btn btn-success",
      "value": editNumber + 1
    }).css({
      "margin-left": "10px"
    }).html('<i class="fa fa-pencil-square-o" aria-hidden="true"></i>').appendTo('td:last');

    deleteButton = $('.btn-danger').length;

    $('<button></button>').attr({
      "type": "button",
      "class": "btn btn-danger",
      "value": deleteButton + 1
    }).css("margin-left", "10px").html('<i class="fa fa-trash" aria-hidden="true"></i>').appendTo('td:last');

    $('.btn-success').on("click", function() {
      var child = $(this).parent().parent().children();
      var id = $(this).parent().parent().children('th').html();
      for (var index = 1; index < child.length - 1; index++) {
        inputs.eq(index - 1).val(child[index].textContent);
      }
      $('.btn-primary').prop("disabled", true);
      $('.btn-info').prop("disabled", false);
      editButton = $(this).val();
      for (var index = 0; index < inputs.length; index++) {
        setCorrect(inputs.eq(index));
      }
    });

    $(".btn-danger").on("click", function() {
      var deleteValue = $(this).val();
      $('tbody').children('tr').eq(deleteValue - 1).remove();
      if (!($('tbody').children('tr').length)) {
        $('.btn-info').prop("disabled", true);
        $('.btn-primary').prop("disabled", false);
      }
    });

    $('button:last').html('<i class="fa fa-trash" aria-hidden="true"></i>');
    $('.warning').remove();
    resetInput();
  } else {
    showWarning();
  }
});

$('.btn-info').on("click", function() {
  if (verifierChamps()) {
    for (i = 0; i < inputs.length; i++) {
      $('tbody').children('tr').eq(editButton - 1).children('td').eq(i).html(inputs.eq(i).val());
    }
    $('.btn-primary').prop("disabled", false);
    $(this).prop("disabled", true);
    resetInput();
  } else {
    showWarning();
  }
});

function resetInput() {
  inputs.val('');
  inputs.removeClass('info');
  inputs.css("border", "");
};

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

function verifierChamps() {
  if (!(inputs.not('.info').length)) {
    return true;
  }
}

function setPasCorrect(element) {
  element.removeClass('info');
  element.addClass('vide');
  $('.vide').css({
    "border": "2px solid red"
  });
}

function showWarning() {
  if (!($('.button-container').children('.warning').length)) {
    $("<div></div>").addClass("warning").css({
      "color": "red",
      "font-size": "16px",
      "display": "inline-block"
    }).html('Saisir tous les champs').appendTo($('.button-container'));
  }
}