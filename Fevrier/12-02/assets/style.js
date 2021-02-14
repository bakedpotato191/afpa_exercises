$(document).ready(function() {

  $.ajax({
    url: "assets/items.json",
    dataType: "json",
    success: function(data) {
      for (var i = 0; i < $('form').length; i++) {
        var item = "<div class=form-group row item-name>";
        item += "<p style='font-weight: bold; padding-bottom:40px'>" + data.items[i].nom + "</p>"
        item += "</div>"
        $('form').eq(i).prepend(item);

        $('input.prix').eq(i).val(data.items[i].prix);
      }
    }
  });

  $('.item-row').css({
    "margin-left": "0px",
    "margin-bottom": "0px"
  });

  $('input.quantite').change(function() {
    $(this).closest('form').find('input.total').val($(this).val() * $(this).closest('form').find('input.prix').val());
    setTotal();
  });

  $('input.quantite').keypress(function() {
    return (regexQuantite(event.key))
  });

  function setTotal() {
    var total_price = 0;
    for (var i = 0; i < $('input.total').length; i++) {
      total_price += Number($('input.total').eq(i).val());
    }
    if ($('.total-prix').length) {
      $('.total-prix').html("Net a payer: " + total_price);
    } else {
      $("<div class='total-prix'></div>").css("font-weight", "bold").html("Net a payer: " + total_price).appendTo($('.container'));
    }
  };

  function regexQuantite(key) {
    var regex = /^[0-9]*$/;
    return (regex.test(key));
  }
});