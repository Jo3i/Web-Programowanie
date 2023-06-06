// Moje zmienione https://github.com/Jo3i/Web-Programowanie/blob/main/LAB7/LAB7_4.js
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
function isStrongPassword(inputValue) {
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   return passwordRegex.test(inputValue);
 }


 const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
const passwordValidate = document.getElementById('passVal');

  if (!hasValidLength(nameInput.value, 5, 50)) {
    alert('Pole "Imię" powinno zawierać przynajmniej 5 znaków');
    return;
  }


  if (!isValidEmail(emailInput.value)) {
    alert('Pole "Email" powinno zawierać poprawny adres email');
    return;
  }

  if (!isStrongPassword(passwordInput.value)) {
    alert('Pole "Hasło" powinno zawierać co najmniej jedną małą literę, jedną dużą literę i jedną cyfrę');
    return;
  }

  if (passwordValidate.value!=passwordInput.value){
    alert('Hasła się nie zgadzają!')
    return;
  }

})