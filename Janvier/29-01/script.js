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

function updateValues() {
  document.querySelector('.montant-tva').value = (parseInt(document.querySelector('.montant-hors-taxes').value)) / 100 * parseFloat(document.getElementById('input-tva').value);
  document.querySelector('.montant-ttc').value = (parseInt(document.querySelector('.montant-hors-taxes').value)) + parseFloat(document.querySelector('.montant-tva').value);
  document.querySelector('.bottom-hors-taxes').textContent = document.querySelector('.montant-hors-taxes').value + "$";
  document.querySelector('.bottom-tva').textContent = document.querySelector('.montant-tva').value + "$";
  document.querySelector('.bottom-ttc').textContent = document.querySelector('.montant-ttc').value + "$";
}