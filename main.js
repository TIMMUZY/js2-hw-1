const message = document.getElementById("message");

function Cash() {
  var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;       

  var myMail = document.getElementById("email").value;
  var valid = re.test(myMail);

  if (valid) {
    alert("Вы успешно зарегистрировались!");             
    message.style.display = "none";
    document.getElementById("email").style.borderColor = "";
  } else {
    message.innerText = "Не верный формат почты";
    message.style.display = "block";
    document.getElementById("email").style.borderColor = "red";
    return valid;
  }
}