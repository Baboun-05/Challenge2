var email = document.getElementById("mail");

var error = document.getElementById("error");
var error2 = document.getElementById('error2');
var button = document.getElementById('button');

button.addEventListener("click", function (event) {
  if(email.validity.typeMismatch || email.value=="") {
    error.style.display = 'flex';
    error2.style.display= 'flex';
    document.addcom.auteur.focus();
    event.preventDefault();
    return button
  } else {
    email.setCustomValidity("");
  }
});
email.addEventListener("click", function (event){
    if(email.validity.typeMismatch) {
        error.style.display = 'none';
        error2.style.display= 'none';
        email.value="";
    } else {
        email.setCustomValidity("");
      }
})