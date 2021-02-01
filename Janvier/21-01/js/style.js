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
  if (email.match(/^\S+@\S+\.\S+$/)) {
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

document.getElementById('phoneNumber').addEventListener("keypress", event => {
  var key = event.key
  var nombrePattern = /^[0-9+]+$/;
  console.log(key);
  if (nombrePattern.test(key)) {
    var pNumber = document.getElementById('phoneNumber').value;
    if (pNumber.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/gmi)) {
      document.getElementById('phoneNumber').style.border = "2px solid green";
    } else {
      document.getElementById('phoneNumber').style.border = "2px solid red";
    }
    return true;
  } else {
    event.preventDefault();
    return false;
  }
});