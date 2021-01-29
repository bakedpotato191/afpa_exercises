document.querySelectorAll('.tva').forEach(item => {
  item.addEventListener('click', event => {

    document.getElementById('input-tva').value = item.textContent;
  })
});

document.querySelector('.montant-hors-taxes').addEventListener("keyup", event => {
  document.querySelector('.montant-tva').value = parseInt((parseInt(document.querySelector('.montant-hors-taxes').value) / 100) * parseInt(document.getElementById('input-tva').value));
  document.querySelector('.montant-ttc').value = (parseInt(document.querySelector('.montant-hors-taxes').value)) + parseInt(document.querySelector('.montant-tva').value);
  document.querySelector('.bottom-hors-taxes').textContent = document.querySelector('.montant-hors-taxes').value + "$";
  document.querySelector('.bottom-tva').textContent = document.querySelector('.montant-tva').value + "$";
  document.querySelector('.bottom-ttc').textContent = document.querySelector('.montant-ttc').value + "$";

});