// wzięte z https://codepen.io/sadejszyn/pen/vQBdqo
function dodaj(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var wynik1=liczba1+liczba2;
    document.getElementById("wynik").innerHTML="Wynik:"+wynik1;
 }
function odejmij(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var wynik2=liczba1-liczba2;
    document.getElementById("wynik").innerHTML="Wynik:"+wynik2;
}
function mnoz(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var wynik3=liczba1*liczba2;
    document.getElementById("wynik").innerHTML="Wynik:"+wynik3;
 }
function dziel(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var wynik4=liczba1/liczba2;
    document.getElementById("wynik").innerHTML="Wynik:"+wynik4;
}
function poteguj(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var wynik5=Math.pow(liczba1,liczba2);
    document.getElementById("wynik").innerHTML="Wynik:"+wynik5;
}
// moje
function clear(){
    document.getElementById("liczba1").value =""
    document.getElementById("liczba2").Value=""
    document.getElementById("wynik").value=""

}
// z https://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input
function validate(evt) {
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