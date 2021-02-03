$('.btn').click(function() {
  var input = $('#formGroupExampleInput2').val();

  var input_table = input.split("");
  var reverse_table = input.split("").reverse();

  if (compare(input_table, reverse_table)) {
    if ($('.alert').length === 0) {
      $('form').append("<div class='alert alert-primary' role='alert'>" + input + " est un palindrome" + " <div>");
    } else {
      $('.alert').html(input + " est un palindrome");
    }
  } else {
    if ($('.alert').length === 0) {
      $('form').append("<div class='alert alert-primary' role='alert'>" + input + " n'est pas un palindrome" + " <div>");
    } else {
      $('.alert').html(input + " n'est pas un palindrome");
    }
  }
});

function compare(input, reverse) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] !== reverse[i]) {
      return false;
    }
  }
  return true;
}