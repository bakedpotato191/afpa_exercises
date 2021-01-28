document.querySelector('.addrow').addEventListener("click", event => {

  var a = document.querySelector('.main').cells;
  var nouvel_tr = document.createElement('tr');
  nouvel_tr.className = 'etudiants'
  document.querySelector('tbody').append(nouvel_tr);

  for (var index = 0; index < a.length; index++) {
    var contenu_tr = document.createElement('td');
    var contenu_td = document.createElement('input')
    contenu_tr.appendChild(contenu_td);
    nouvel_tr.appendChild(contenu_tr);
  }
});


document.querySelector('.admis').addEventListener("click", event => {
  var columns = document.querySelector('tbody');
  var rows = document.querySelectorAll('.etudiants');
  if (columns.childElementCount > 1) {
    for (var i = 0; i < rows.length; i++) {
      for (var j = 0; j < rows[i].childElementCount; j++) {
        if ((rows[i].children[j].children[0].value) == '') {
          alert("saisir les champs obligatoires");
          event.preventDefault();
          return false;
        } else {
          if (rows[i].children[2].children[0].value > 15) {
            var admis = document.createElement('div');
            var admis_text = document.createTextNode(rows[i].children[0].children[0].value + " " + rows[i].children[1].children[0].value + " avec " + rows[i].children[2].children[0].value + " de moyenne");
            admis.appendChild(admis_text);
            document.getElementById('container').append(admis);
            break;
          } else {
            /*console.log('nonadmis')
            var nonadmis = document.createElement('div');
            var nonadmis_text = document.createTextNode(rows[i].children[0].children[0].value + " " + rows[i].children[1].children[0].value + " avec " + rows[i].children[2].children[0].value + " de moyenne");
            admis.appendChild(nonadmis_text);
            document.getElementById('container').append(nonadmis);*/
            break;
          }
        }
      }
    }
  } else {
    var error = document.createElement('div');
    error.className = 'nonadmis'
    var error_text = document.createTextNode('Pas d’étudiants inscrits pour le moment');
    error.appendChild(error_text);
    document.getElementById('container').append(error);
    return;
  }

});

document.querySelector('.non-admis').addEventListener("click", event => {
  var columns = document.querySelector('tbody');
  var rows = document.querySelectorAll('.etudiants');
  if (columns.childElementCount > 1) {
    for (var i = 0; i < rows.length; i++) {
      for (var j = 0; j < rows[i].childElementCount; j++) {
        if ((rows[i].children[j].children[0].value) == '') {
          alert("saisir les champs obligatoires");
          event.preventDefault();
          return false;
        } else {
          if (rows[i].children[2].children[0].value < 15) {
            var nonadmis = document.createElement('div');
            var nonadmis_text = document.createTextNode(rows[i].children[0].children[0].value + " " + rows[i].children[1].children[0].value + " avec " + rows[i].children[2].children[0].value + " de moyenne");
            nonadmis.appendChild(nonadmis_text);
            document.getElementById('container').append(nonadmis);
            break;
          } else {
            break;
          }
        }
      }
    }
  } else {
    var error = document.createElement('div');
    error.className = 'nonadmis'
    var error_text = document.createTextNode('Pas d’étudiants inscrits pour le moment');
    error.appendChild(error_text);
    document.getElementById('container').append(error);
    return;
  }
});





/*if (document.querySelector('tbody').children.length > 1) {

    for (var index = 0; index < )


  } else {
    var alert = document.createElement('div');
    var alert_text = document.createTextNode('Pas d’étudiants inscrits pour le moment')
    alert.appendChild(alert_text);
    document.getElementById('container').appendChild(alert);
  }
*/

/*var b = document.querySelectorAll('.etudiants');


console.log(b[0].children[0].textContent);*/