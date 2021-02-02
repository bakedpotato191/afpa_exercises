$('.btn').click(function() {
  var input = $('#formGroupExampleInput2').val();

  var input_table = [];

  for (index = 0; index < input.length; index++) {
    input_table[index] = input[index];
  }

  var reverse_table = [];

  for (index = input.length; index >= 0; index--) {
    reverse_table[input.length - (index + 1)] = input[index];
  }

  if (compare(input_table, reverse_table)) {
    $('form').append("<div class='alert alert-primary' role='alert'>" + input + " est un palindrome" + " <div>");
  } else {
    $('form').append("<div class='alert alert-primary' role='alert'>" + input + " n'est pas un palindrome" + " <div>");
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