function isNotEmpty(inputValue) {
    if (inputValue.trim() === '') {

        return false;
    }
    return true;
  }
function hasValidLength(inputValue, minLength, maxLength) {
   if (inputValue.length < minLength || inputValue.length > maxLength) {
        return false;
   }
   return true;
 }
function isValidEmail(inputValue) {
   const emailRegex = /\S+@\S+\.\S+/;
   return emailRegex.test(inputValue);
 }
 /*/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/*/
function isStrongPassword(inputValue) {
   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;
   return passwordRegex.test(inputValue);
 }
 function validateBirthdate(inputValue) {
    const today = new Date();
    const birth = new Date(inputValue);
    const age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age >= 18;
  }


const form = document.querySelector('form');

const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordVal = document.getElementById('passwordVal')
const genderInput = document.getElementById('gender');
const phoneInput = document.getElementById('phone');
const birthdateInput = document.getElementById('birthdate');
const countryInput = document.getElementById('country');
const wojInput = document.getElementById('wojew');
const adrszamInput = document.getElementById('adrszam');
const adrskorInput = document.getElementById('adrskor');
const adrskor1Input = document.getElementById('adrskor1');

function telNumber(evt) { //wzięty z internetu...
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

function wojewShow(sprw){
    if(sprw.value==="Polska"){
    document.getElementById('wojew').replaceWith('<select id="wojew" name="wojew">'+'<option>"kys"</option>'+'</select>')
    document.getElementById('wojew').disabled=false;
    }else if(sprw.value.isNotEmpty=true){
        document.getElementById('wojew').disabled=false;
    }
    else{
        document.getElementById('wojew').disabled=true;
    }
}

function adrszamShow(sprw1){
    if(sprw1.value.isNotEmpty=true){
        document.getElementById('adrszam').disabled=false;
        }
        else{
            document.getElementById('adrszam').disabled=true;
        }
}

function adreskorShow(checkboxElem){
    if(checkboxElem.checked){
        document.getElementById('adresKor').style="visibility: hidden;";
    }else{
        document.getElementById('adresKor').style="visibility: visible;";
        document.getElementById('adrskor1').disabled = false;
    }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const surnameInput = document.getElementById('surname');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const passwordVal = document.getElementById('passwordVal')
  const genderInput = document.getElementById('gender');
  const phoneInput = document.getElementById('phone');
  const birthdateInput = document.getElementById('birthdate');
  const countryInput = document.getElementById('country');
  const wojInput = document.getElementById('wojew');
const adrszamInput = document.getElementById('adrszam');
const adrskorInput = document.getElementById('adrskor');
const adrskor1Input = document.getElementById('adrskor1');

  if (!isNotEmpty(nameInput.value)) {
    document.getElementById("name-error").innerHTML = "Pole Imię jest wymagane ";
    return;
  }else{
    document.getElementById("name-error").innerHTML = null;
  }

  if (!hasValidLength(nameInput.value, 2, 50)) {
    document.getElementById("name-error").innerHTML = "Pole Imię powinno zawierać od 2 do 50 znaków ";
    return;
  }else{
    document.getElementById("name-error").innerHTML = null;
  }

  if (!isNotEmpty(surnameInput.value)) {
    document.getElementById("surname-error").innerHTML = "Pole Nazwisko jest wymagane ";
    return;
  }else{
    document.getElementById("surname-error").innerHTML = null;
  }

  if (!hasValidLength(surnameInput.value, 2, 50)) {
    document.getElementById("surname-error").innerHTML = "Pole Nazwisko powinno zawierać od 2 do 50 znaków ";
    return;
  }else{
    document.getElementById("surname-error").innerHTML = null;
  }

  if (!isValidEmail(emailInput.value)) {
    document.getElementById("email-error").innerHTML = "Pole Email powinno zawierać poprawny adres email ";
    return;
  }else{
    document.getElementById("email-error").innerHTML = null;
  }

  if (!isNotEmpty(passwordInput.value)) {
    document.getElementById("password-error").innerHTML = "Pole Hasło jest wymagane ";
    return;
  }else{
    document.getElementById("password-error").innerHTML = null;
  }
  
  if (!hasValidLength(passwordInput.value, 8, 50)) {
    document.getElementById("password-error").innerHTML = "Pole Hasło powinno zawierać od 8 do 50 znaków ";
    return;
  }else{
    document.getElementById("password-error").innerHTML = null;
  }

  if (!isStrongPassword(passwordInput.value)) {
    document.getElementById("password-error").innerHTML = "Pole Hasło powinno zawierać co najmniej jedną małą literę, jedną dużą literę i jedną cyfrę ";
    return;
  }

  if (!isNotEmpty(passwordVal.value)) {
    document.getElementById("passwordVal-error").innerHTML = "Powtórz hasło ";
    return;
  }else{
    document.getElementById("passwordVal-error").innerHTML = null;
  }

  if (passwordVal.value!=passwordInput.value) {
    document.getElementById("passwordVal-error").innerHTML = "Hasła się nie zgadzają ";
    return;
  }else{
    document.getElementById("passwordVal-error").innerHTML = null;
  }

  if (!isNotEmpty(genderInput.value)) {
    document.getElementById("gender-error").innerHTML = "Pole Płeć jest wymagane ";
    return;
  }else{
    document.getElementById("gender-error").innerHTML = null;
  }

  if (!isNotEmpty(phoneInput.value, 9, 9)) {
    document.getElementById("phone-error").innerHTML = "Pole Telefon jest wymagane ";
    return;
  }else{
    document.getElementById("phone-error").innerHTML = null;
  }

  if (!validateBirthdate(birthdateInput.value)) {
    document.getElementById("birthdate-error").innerHTML = "Wymagany wiek to 18 lat  ";
    return;
  }else{
    document.getElementById("birthdate-error").innerHTML = null;
  }

  if (!isNotEmpty(countryInput.value)) {
    document.getElementById("country-error").innerHTML = "Pole Kraj jest wymagane ";
    return false;
  }
})