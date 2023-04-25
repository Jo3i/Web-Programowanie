class Prostokąt{
    constructor(długość, szerokosć, nazwa){
        this.długość = długość;
        this.szerokosć = szerokosć;
        this.nazwa = nazwa;
    }
    poleP(){
        var pole = this.długość * this.szerokosć
        console.log("Pole "+this.nazwa+": "+pole)
}
}

const prostokąt = new Prostokąt(15,10,"2gi prostokąt")

class Triangle{
    constructor(wys, dłg_pdst, nazwa){
        this.wys = wys;
        this.dłg_pdst = dłg_pdst;
        this.nazwa = nazwa;
}
    poleT(){
        var pole = ((this.wys*this.dłg_pdst)*(1/2))
        console.log("Pole "+this.nazwa+": "+pole)
    }
}

const trójk1 = new Triangle(5,3,"Trójk1")

class Trapez{
    constructor(wys,pdst1,pdst2,nazwa){
        this.wys = wys;
        this.pdst1 = pdst1;
        this.pdst2 = pdst2;
        this.nazwa = nazwa;
    }
    poleTR(){
        var x = ((1/2) * (this.pdst1 + this.pdst2) * this.wys)
        console.log("Pole "+this.nazwa+": "+x)
    }
}

const trapez1 = new Trapez(10,10,12,"trapez1")

function NajwPol(f1,f2){
    if(f1.poleP()!=f2.poleT()){
        if(f1.poleP()>f2.poleT()){
            console.log("Większa figura to "+f1.nazwa +" o polu: "+f1.poleP())
        }else{
            console.log("Większa figura to "+f2.nazwa +" o polu: "+f2.poleT())
        }
    }else{
        console.log("wszystkie pola są wolne")
    }
}
NajwPol(Prostokąt,Triangle);