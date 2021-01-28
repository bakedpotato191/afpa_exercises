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

document.querySelector('.admis').addEventListener("click", event => {
  var students = document.querySelectorAll('.etudiants');
  var inputs = document.getElementsByTagName('input');
  if (existsEtudiants()) {
    for (i = 0; i < students.length; i++) {
      var note = students[i].children[3].children[0].value;
      if (note >= 16) {
        var admis = document.querySelector('.resultats');
        admis.innerHTML = students[i].children[1].children[0].value + " " + students[i].children[2].children[0].value + "" + " avec moyenne de " + note;
      }
    }
    return;
  }

});

document.querySelector('.non-admis').addEventListener("click", event => {
  var students = document.querySelectorAll('.etudiants');
  var inputs = document.getElementsByTagName('input');
  if (existsEtudiants()) {
    for (i = 0; i < students.length; i++) {
      var note = students[i].children[3].children[0].value;
      if (note < 16) {
        var admis = document.querySelector('.resultats');
        admis.innerHTML = students[i].children[1].children[0].value + " " + students[i].children[2].children[0].value + "" + " avec moyenne de " + note;
      }
    }
    return;
  }
});

function existsEtudiants() {
  var students = document.querySelectorAll('.etudiants');
  var inputs = document.getElementsByTagName('input');
  if (students.length > 0) {
    for (i = 0; i < students.length; i++) {
      if (students[i].children[3].children[0].value === "") {
        alert("saisir tous les champs");
        return false;
      }
      return true;
    }
  } else {
    var error = document.createElement('div');
    error.className = 'nonadmis';
    var error_text = document.createTextNode('Pas d’étudiants inscrits pour le moment');
    error.appendChild(error_text);
    document.getElementById('container').append(error);
    return false;
  }
}