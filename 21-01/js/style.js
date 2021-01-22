[document.querySelector('input[placeholder="Nom"]'), document.querySelector('input[placeholder="Prenom"]')].forEach(item => {
  item.addEventListener("keypress", event => {
    var key = String.fromCharCode(event.keyCode);
    var nombrePattern = /^[A-Za-z-]+$/;
    if (nombrePattern.test(key)) {
      console.log("true");
      return true;
    }
    event.preventDefault();
    return false;
  })
});


document.getElementById('inputEmail4').addEventListener("keydown", event => {
  var email = document.getElementById('inputEmail4').value;
  var email_regex = /^\S+@\S+\.\S+$/;
  if (email_regex.test(email)) {
    document.getElementById('inputEmail4').style.border = '2px solid green';
  } else {
    document.getElementById('inputEmail4').style.border = '2px solid red';
  }
});

document.getElementById('inputPassword4').addEventListener("input", event => {
  if (document.getElementById('inputPassword4').value == "") {
    document.getElementById('inputPassword4').style.border = "1px solid #ced4da";
  } else {
    var email = document.getElementById('inputPassword4').value;
    var password_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password_regex.test(email)) {
      document.getElementById('inputPassword4').style.border = '2px solid green';
    } else {
      document.getElementById('inputPassword4').style.border = '2px solid red';
    }
  }
});

document.getElementById('inputZip').addEventListener("keypress", event => {
  var key = event.key;
  var nombrePattern = /^[0-9]+$/; // nombre de 0 à 9
  if (nombrePattern.test(key)) {
    return true;
  }
  event.preventDefault();
  return false;
});


function ifNombre(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}