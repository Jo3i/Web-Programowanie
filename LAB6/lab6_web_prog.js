// zadanie 1
class prostokat {
    constructor(height, width, name) {
        this.height = height
        this.width = width
        this.name = name
    }
    wypisz() {
        console.log("Wysokosc: " + this.height);
        console.log("Szerokosc: " + this.width);
        console.log("Nazwa: " + this.name);
        const obw = 2 * this.height + 2 * this.width
        console.log("Obwod wynosi: " + obw);
    }
    Pole() {
        return this.height * this.windth
    }
    Porownaj(innyProstokat) {
        if (this.Pole() > innyProstokat.Pole()) {
            return this.name
        } else if (this.Pole() < innyProstokat.Pole()) {
            return innyProstokat.name
        } else {
            console.log("Prostokąty są równe");
        }
    }

    //zad 6 (cz1)

    changeName(newName) {
        this.name = newName;
        return this.name
    }

}

const Rec1 = new prostokat(10, 10, "kwadrat")
Rec1.wypisz();
console.log(Rec1.Pole());
const Rec2 = new prostokat(30, 10, "prostokat")
Rec2.wypisz();
console.log(Rec2.Pole());
const Rec3 = new prostokat(5, 5, "kwadracik")
Rec3.wypisz();
console.log(Rec3.Pole());
console.log(Rec1.Porownaj(Rec2));

//zad 3
class Trapez {
    constructor(height, pdst1, pdst2, name) {
        this.height = height
        this.pdst1 = pdst1
        this.pdst2 = pdst2
        this.name = name
    }
    wypisz() {
        console.log("Wysokosc to: " + this.height);
        console.log("Podstawa pierwsza to: " + this.pdst1);
        console.log("Podstawa druga to: " + this.pdst2);
        console.log("Nazwa to: " + this.name);
    }
    Pole() {
        return (this.pdst1 + this.base2) * this.height / 2
    }
}

const Trap1 = new Trapez(10, 5, 10, "trapez")
Trap1.wypisz();
console.log(Trap1.Pole());
const Trap2 = new Trapez(5, 2, 6, "minitrapez")
Trap2.wypisz();
console.log(Trap2.Pole());
const Trap3 = new Trapez(30, 20, 50, "maxitrapez")
Trap3.wypisz();
console.log(Trap3.Pole());

//zad 4

function maks(prostokat, trap) {
    if (prostokat.Pole() > trap.Pole()) {
        console.log("Wiekszy jest " + prostokat.name + " o polu " + prostokat.Pole())
    } else if (prostokat.Pole() < trap.Pole()) {
        console.log("Wiekszy jest " + trap.name + " o polu " + trap.Pole())
    } else {
        console.log("Prostokat i trapez jest rowny")
    }
}

maks(Rec1, Trap1);

// zad 6 (kontynuacja po zadaniu 1)

console.log(Rec1.changeName("Nowa nazwa"));

//zad 1. (lab 6+)
const tab = []
tab.push(1, 2, 3, 4, 5)
for (let i = 0; i < tab.length; i++) {
    console.log(tab[i])
}
// suma
let suma = 0
for (let i = 0; i < tab.length; i++) {
    suma = tab[i] + suma
}
console.log("Suma elementow tablicy wynosi: " + suma)

// liczby parzyste
for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 == 0) {
        console.log("Parzysta: " + tab[i])
    }
}

// wartosci razy 3
for (let i = 0; i < tab.length; i++) {
    tab[i] = tab[i] * 3
}

// moj numer albumu
tab.push(67227)
for (let i = 0; i < tab.length; i++) {
    if (tab[i] == 67227) {
        console.log("Indeks pod ktorym moj numer albumu znajduje sie w tablicy wynosi: " + i)
    }
}

//srednia arytm
suma = 0
for (let i = 0; i < tab.length; i++) {
    suma = tab[i] + suma
}
console.log("Srednia arytmetyczna tablicy wynosi: " + suma / tab.length)

//max
maks = tab[0]
for (let i = 1; i < tab.length; i++) {
    if (tab[i] > tab[i - 1]) {
        maks = tab[i]
    }
}
console.log("Maks wynosi: " + maks)

//ilosc wystapien danej wartosci
licznik = 0
for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length; j++) {
        if (tab[i] == tab[j]) {
            licznik++
        }
    }
    console.log("licznik elementu " + tab[i] + " wynosi: " + licznik)
    licznik = 0
}