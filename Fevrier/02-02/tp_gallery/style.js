$('.miniature').each(function(index) {
  $(this).click(function() {
    $(this).css("border", "4px solid red");
    $('.container-mainimage').html("<img class='fullscreen' src='" + $(this).prop('src') + "' alt='avengers'>");
    $('.fullscreen').css("border", "6px solid #7ee4e0");
    $('.miniature').not(this).each(function() {
      $(this).css("border", "4px solid black");
    });
  });
});