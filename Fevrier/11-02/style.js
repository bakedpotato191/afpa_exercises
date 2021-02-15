$(document).ready(function() {
  $.ajax({
    url: "https://entreprise.data.gouv.fr/api/sirene/v1/full_text/afpa",
    dataType: "json",
    success: function(data) {
      $('.nom').text(data.etablissement[0].nom_raison_sociale);
      $('.siren').text(data.etablissement[0].siren);
      $('.siret').text(data.etablissement[0].siret);

      $('.latitude').text(data.etablissement[0].latitude);
      $('.longitude').text(data.etablissement[0].longitude);

      var iframe = '<iframe src="https://maps.google.com/maps?q=';
      iframe += data.etablissement[0].latitude + "," + data.etablissement[0].longitude;
      iframe += '&hl=en&z=14&amp;output=embed" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>';
      $('.container').append(iframe);
    },
    error: function(xhr) {
      console.log(xhr.status);
    }
  })
});