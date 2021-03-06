$(document).ready(function() {
  var item;
  $.ajax({
    url: "assets/items.json",
    dataType: "json",
    success: function(data) {

      ajouterProduit();

      for (var i = 0; i < data.items.length; i++) {
        $('.dropdown-menu li a').eq(i).text(data.items[i].nom);
        $('.list-group').append(item);
        $('form p').eq(i).html(data.items[i].nom + "<hr>")
        $('input.prix').eq(i).val(data.items[i].prix);
        if (i % 2 === 0) {
          $('ul:last li').eq(i).addClass("list-group-item-success");
        } else {
          $('ul:last li').eq(i).addClass("list-group-item-primary");
        }
      }

      var form_net = "<form class='form-net form-inline'>";
      form_net += "<div class='form-group'>"
      form_net += "<label for='net'>Net à payer:</label>";
      form_net += "<input type='text' class='form-control mx-sm-3 net' disabled></div>"

      $('.container').append(form_net);
      $('.form-net').css({
        "padding": "20px 0px 20px 0px",
        "font-weight": "bold"
      });
      $("label[for='total']").css("font-weight", "bold");
      $('input.net').css("font-weight", "bold");
      $('.container').css({
        "background-color": "#f3f3f3",
        "padding-top": "20px "
      });

      function ajouterProduit() {
        item = "<li class='list-group-item'>";
        item += "<form> <div class=form-group row item-name>";
        item += "<p style='font-weight: bold; padding-bottom:40px'> </p></div>";
        item += "<div class='form-group row item-row' style='margin-left: 0px; margin-bottom:0px'>";
        item += "<label for='quantite'>Quantité:</label>";
        item += "<div class='col col-sm-3'>";
        item += "<input type='text' class='form-control form-control-sm quantite' placeholder='' autocomplete='off'> </div>";
        item += "<label for='prix'>Prix:</label>";
        item += "<div class='col col-sm-3'>";
        item += "<input type='text' class='form-control form-control-sm prix' placeholder='' readonly> </div>";
        item += "<label for='total'>Total:</label>";
        item += "<div class='col col-sm-3'>";
        item += "<input type='text' class='form-control form-control-sm total' placeholder='' readonly autocomplete='off'></div>";
        item += "<div class='col'> <button type='button' class='btn btn-danger retirer'>Retirer</button></div>"
        item += "</div> </form> </li>";
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

    $('.retirer').on("click", function() {
      if (confirm("Voulez-vous vraiment retirer l'article?")) {
        $(this).closest('li').remove();
      }
    });

    $('.dropdown-menu li a').on("click", function() {
      $('button.dropdown-toggle').text($(this).text());


    });

    function setTotal() {
      var total_price = 0;
      for (var i = 0; i < $('input.total').length; i++) {
        total_price += Number($('input.total').eq(i).val());
      }
      if ($('.total').length) {
        $("input.net").val(total_price);
      }
    };

    function regexQuantite(key) {
      var regex = /^[0-9]*$/;
      return (regex.test(key));
    }
  });
});