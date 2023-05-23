function isNotEmpty(inputValue) { //1.a
    if (inputValue.trim() === '') {

        return false;
    }
    return true;
  }
function hasValidLength(inputValue, minLength, maxLength) { //1.c
   if (inputValue.length < minLength || inputValue.length > maxLength) {
        return false;
   }
   return true;
 }
 function isStrongPassword(inputValue) { //1.c
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;
    return passwordRegex.test(inputValue);
  }
const form = document.querySelector('form');

const loginInput = document.getElementById("login");
const passInput = document.getElementById("pass");
const passVal = document.getElementById("passVal");


form.addEventListener('submit', function (event) { //walidacje na submita
    event.preventDefault();
    const loginInput = document.getElementById("login");
    const passInput = document.getElementById("pass");
    const passVal = document.getElementById("passVal");
    const loginBaz = document.getElementById("loginBaz");
    const passBaz = document.getElementById("passBaz")

    if (!isNotEmpty(loginInput.value)) { //1.a
        document.getElementById("log-error").innerHTML = "Pole Imię jest wymagane ";
      }else{
        document.getElementById("log-error").innerHTML = null;
      }
    
    if(!isNotEmpty(passInput.value)){ //1.a
        document.getElementById("pass-error").innerHTML = "Pole Hasło jest wymagane ";
      }else{
        document.getElementById("pass-error").innerHTML = null;
    }

    if (!hasValidLength(passInput.value, 8, 50)) { //1.c
        document.getElementById("pass-error").innerHTML = "Pole Hasło powinno zawierać od 8 do 50 znaków ";
        return;
      }else{
        document.getElementById("pass-error").innerHTML = null;
    }
    
    if (!isStrongPassword(passInput.value)) { //1.c
        document.getElementById("pass-error").innerHTML = "Pole Hasło powinno zawierać co najmniej jedną małą literę, jedną dużą literę i jedną cyfrę ";
        return;
    }

    if(!isNotEmpty(passVal.value)){ //1.b
        document.getElementById("passVal-error").innerHTML = "Proszę powtórzyć hasło";
    }else if(passVal.value!=passInput.value){
        document.getElementById("passVal-error").innerHTML = "Hasła się nie zgadzają";
    }else{
        document.getElementById("passVal-error").innerHTML = null;
    }

    var arr = []; //2.a
    arr.push(loginInput.value,passInput.value);
    console.log(arr);

})