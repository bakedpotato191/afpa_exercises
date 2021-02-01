document.querySelectorAll('.tva').forEach(item => {
  item.addEventListener('click', event => {
    if (document.querySelector('.montant-hors-taxes').value == "") {
      document.getElementById('input-tva').value = item.textContent;
    } else {
      document.getElementById('input-tva').value = item.textContent;
      updateValues();
    }
  })
});

document.querySelector('.montant-hors-taxes').addEventListener("keyup", updateValues);
document.querySelector('#input-tva').addEventListener('keyup', event => {
  event = (event) ? event : window.event;
  var charCode = (event.which) ? event.which : event.keyCode;
  if ((charCode > 31 && charCode !== 37) && (charCode < 48 || charCode > 57)) {
    event.preventDefault();
    return false;
  }

  updateValues();
});

function updateValues() {
  document.querySelector('.montant-tva').value = (Math.floor((parseInt(document.querySelector('.montant-hors-taxes').value)) / 100 * parseFloat(document.getElementById('input-tva').value) * 100) / 100).toFixed(2);
  document.querySelector('.montant-ttc').value = (parseInt(document.querySelector('.montant-hors-taxes').value)) + parseFloat(document.querySelector('.montant-tva').value);
  document.querySelector('.bottom-hors-taxes').textContent = document.querySelector('.montant-hors-taxes').value + "$";
  document.querySelector('.bottom-tva').textContent = document.querySelector('.montant-tva').value + "$";
  document.querySelector('.bottom-ttc').textContent = document.querySelector('.montant-ttc').value + "$";
}