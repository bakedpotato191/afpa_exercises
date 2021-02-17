$(document).ready(function() {
  $('nav ul li a').click(function() {

    $.ajax({
      url: $(this).attr("href"), //propos.html
      //json
      success: function(data) {
        $('main').empty();
        $('main').append(data);
      },
      error: function(status, text) {
        console.log(status);
        console.log(text);
      }
    })
    return false;
  });

  $('li').on("mouseover", function() {
    $(this).css("background", "var(--white)");
    $(this).children().css("color", "var(--gray-dark)");
  });

  $('li').on("mouseout", function() {
    $(this).css("background", "transparent");
    $(this).children().css("color", "var(--white)");
  });

  $('li').eq(0).css("border-top", "2px solid var(--white)");

  $('body').on('click', '.arrowbtm img', function() {
    $('html').animate({
        scrollTop: $(".web-design").offset().top
      },
      800);
  });

  $('body').on('click', '.arrowtop img', function() {
    $('html').animate({
        scrollTop: $(".container").offset().top
      },
      800);
  });
});