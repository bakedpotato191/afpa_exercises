$(document).ready(function() {

  $.ajax({
    url: "assets/items.json",
    dataType: "json",
    success: function(data) {

      var main = "<div class='container'>";
      main += "<h4>Mon Panier</h4>";
      main += "<ul class='list-group'></ul></div>";
      $('body').append(main);

      for (var i = 0; i < data.items.length; i++) {
        var item = "<li class='list-group-item list-group-item-success'>";
        item += "<form> <div class=form-group row item-name>";
        item += "<p style='font-weight: bold; padding-bottom:40px'>" + data.items[i].nom + "</p></div>";
        item += "<div class='form-group row item-row' style='margin-left: 0px; margin-bottom:0px'>";
        item += "<label for='exampleFormControlInput1'>Quantité:</label>";
        item += "<div class='col col-sm-3'>";
        item += "<input type='text' class='form-control form-control-sm quantite' placeholder='' autocomplete='off'> </div>";
        item += "<label for='exampleFormControlInput1'>Prix:</label>";
        item += "<div class='col col-sm-3'>";
        item += "<input type='text' class='form-control form-control-sm prix' placeholder='' readonly> </div>";
        item += "<label for='exampleFormControlInput1'>Total:</label>";
        item += "<div class='col col-sm-3'>";
        item += "<input type='text' class='form-control form-control-sm total' placeholder='' readonly autocomplete='off'>";
        item += "</div> </div> </form> </li>";
        $('.list-group').append(item);
        $('input.prix').eq(i).val(data.items[i].prix);
      }
    },
    error: function(status, text) {
      console.log(status)
      console.log(text)
    }
  }).done(function() {
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
});