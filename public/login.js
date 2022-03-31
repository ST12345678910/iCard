window.onload = () => {
  this.sessionStorage.setItem('username',);
  this.sessionStorage.setItem('password',);
}

var input = document.getElementsByTagName('');
var login = document.getElementById('');
var form = document.querySelector('form');
form.onsubmit = () => { return false; }

login.onclick = () => {

  if ((input[0].value != "") && (input[1].value != "")) {
    if ((input[0].value == sessionStorage.getItem('username')) && (input[1].value == sessionStorage.getItem('password'))) {
      form.onsubmit = () => { return 1; }
      document.cookie = "username=" + input[0].value;
      document.cookie = "password=" + input[1].value;
    }
    else {
      if ((input[0].value != sessionStorage.getItem('username'))) {
        input[0].nextElementSibling.textContent = "Username NOT match";
        setTimeout(() => {
          input[0].nextElementSibling.textContent = "";
        }, 2000);

      }
      if ((input[1].value != sessionStorage.getItem('password'))) {
        input[1].nextElementSibling.textContent = "Password NOT match";
        setTimeout(() => {
          input[1].nextElementSibling.textContent = "";
        }, 2000);

      }

    }

  }
  else {
    if (input[0].value == "") {
      input[0].nextElementSibling.textContent = "Username is empty";
      setTimeout(() => {
        input[0].nextElementSibling.textContent = "";
      }, 2000);
    }
    if (input[1].value == "") {
      input[1].nextElementSibling.textContent = "Password is empty";
      setTimeout(() => {
        input[1].nextElementSibling.textContent = "";
      }, 2000);
    }
  }
}