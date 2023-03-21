var a = 20;
var b = 10;
console.log(a+b);
var sum = 10+20
console.log(a-b);
console.log(a*b);
console.log(a/b);
document.getElementById("kalk").innerHTML = sum;
//zd1
var c = 30;
var p = (a+b+c)/2;
console.log(p);
document.getElementById("trojk").innerHTML = "Pole to "+p;
var P = Math.sqrt((p*(p-a)*(p-b)*(p-c)));
console.log(P);
//zd2
var n = 10
var z = Math.ceil(Math.random()*n);
var x = prompt("spróbuj zgadnąć liczbę")
if (x == z){
    console.log("Zgadłeś!")
    document.getElementById("zgad").innerHTML = "Zgadłeś";
}else{
    console.log("Niestety pudło")
    document.getElementById("zgad").innerHTML = "Niestety pudło";
}
//zd3
var g = prompt("Podaj 1 liczbe")
var h = prompt("Podaj 2 liczbe")
var j = prompt("Podaj 3 liczbe")
if ((g > h) && (g>h))
    {
        console.log(g);
        document.getElementById("najw").innerHTML = "Największe z podanych jest "+g;
    }
        if((h>g)&&(h>j))
    {
        console.log(h);
        document.getElementById("najw").innerHTML = "Największe z podanych jest "+h;
    }
        if((j>g)&&(j>h))
    {
        console.log(j);
        document.getElementById("najw").innerHTML = "Największe z podanych jest "+j;
    }          
//zd4
/*
function NWD(u,i){
    while (u!=b){
        if (u>i){
            u = u-i
        }else{
            i = i-u
        }
    }
    return u
}
var u = prompt("Podaj 1szą NWD")
var i = prompt("Podaj 2gą NWD")
console.log(NWD(u,i))
document.getElementById("najw").innerHTML = "NWD "+u+" oraz "+i+" wynosi: "+NWD(u,i);*/
//zd5
let student1 = {
    imie: "Jakub",
    nazwisko: "Dobek",
    checi: "brak"
}
let student2 = {
    imie: "Jasiek",
    nazwisko: "",
    checi: "coś na pewno"
}
student2.nazwisko="Dynowski"
console.log(student2.nazwisko)
//zd 6




