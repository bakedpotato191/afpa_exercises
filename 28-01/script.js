var i, j, index, thlen;
document.querySelector('.addrow').addEventListener("click", event => {
  //create new row and append it to the tbody selector
  var nouvel_tr = document.createElement('tr');
  nouvel_tr.className = 'etudiants';
  document.querySelector('tbody').append(nouvel_tr);
  //get quantity of columns in thead
  thlen = document.querySelectorAll('[scope="col"]').length;
  for (index = 0; index < thlen; index++) {
    //append new th to the first column in the row
    if (index == 0) {
      var nouvel_th = document.createElement('th');
      nouvel_th.scope = 'row';
      row_nombre = document.querySelectorAll('.etudiants').length;
      nouvel_th.innerHTML = row_nombre;
      nouvel_tr.append(nouvel_th);
    }
    //if not first column add input forms to every cell
    else {
      var contenu_tr = document.createElement('td');
      var contenu_td = document.createElement('input')
      contenu_tr.appendChild(contenu_td);
      nouvel_tr.appendChild(contenu_tr);
    }
  }
});

[document.querySelector('.admis'), document.querySelector('.non-admis')].forEach(item => {
  item.addEventListener('click', event => {
    var students = document.querySelectorAll('.etudiants');
    var inputs = document.getElementsByTagName('input');
    var admis = document.querySelector('.resultats');
    admis.innerHTML = "";
    if (existsEtudiants()) {
      if (event.target.value == 'admis') {
        for (i = 2; i < inputs.length; i = i + 3) {
          if (inputs[i].value >= 16) {
            admis.innerHTML += "<br>" + inputs[i - 2].value + " " + inputs[i - 1].value + "" + " avec moyenne de " + inputs[i].value;
          }
        }
        return;
      } else if (event.target.value == 'pasadmis') {
        for (i = 2; i < inputs.length; i++) {
          if (inputs[i].value < 16) {
            admis.innerHTML += "<br>" + inputs[i - 2].value + " " + inputs[i - 1].value + "" + " avec moyenne de " + inputs[i].value;
          }
        }
        return;
      }
    }
  })
});

function existsEtudiants() {
  var inputs = document.getElementsByTagName('input');
  if (inputs.length > 0) {
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        alert("saisir tous les champs");
        return false;
      }
    }
    return true;
  } else {
    var error = document.querySelector('.resultats');
    error.innerHTML = 'Pas d’étudiants inscrits pour le moment';
    return false;
  }
}