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

  $('body').on('click', '.arrowtop img', function() {
    $('html, body').animate({
        scrollTop: $("body").offset().top
      },
      1200);
    return false;
  });

  $('body').on('click', '.arrowbtm img', function() {
    $('html, body').animate({
      scrollTop: $(document).height()
    }, 1200);
    return false;
  });

  set_li_effect_desktop();

  $(window).resize(function() {
    set_li_effect_desktop()
  });

});

function set_li_effect_desktop() {
  if ($('body').width() >= 1025) {
    $('.header-desktop nav ul li').on("mouseover", function() {
      if (!($(this).hasClass('active'))) {
        $(this).css("background", "var(--white)");
        $(this).children().css("color", "var(--gray-dark)");
      }
    });

    $('.header-desktop nav ul li').on("mouseout", function() {
      if (!($(this).hasClass('active'))) {
        $(this).css("background", "transparent");
        $(this).children().css("color", "var(--white)");
      }
    });

    $('nav ul li a').on("click", function() {
      $('li').removeClass('active').css("background", "transparent");
      $('li').children('a').css("color", "white");
      $(this).css("color", "var(--gray-dark)");
      $(this).parent().addClass('active').css("background-color", "white")
    });

    $('.header-desktop nav ul li').eq(0).css("border-top", "2px solid var(--white)");
  } else {
    $('li').off();
  }
}