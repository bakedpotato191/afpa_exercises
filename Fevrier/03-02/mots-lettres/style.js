$('#exampleFormControlTextarea1').on("input", function(e) {
  var mots_array = $(this).val().split(" ");
  var mots = 0;
  var lettres = 0;
  for (var index = 0; index < mots_array.length; index++) {
    if (mots_array[index] !== "") {
      mots++;
      lettres = lettres + mots_array[index].length;
    }
  }
  if ($('.mots').length == 0) {
    $('form').append("<label class='mots'></label>")
    $('.mots').html(mots + " mots" + " / " + lettres + " lettres");
  } else {
    $('.mots').html(mots + " mots" + " / " + lettres + " lettres");
  }
});