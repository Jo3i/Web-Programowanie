class Prostokąt{
    constructor(długość, szerokosć, nazwa){
        this.długość = długość;
        this.szerokosć = szerokosć;
        this.nazwa = nazwa;
    }
    obwód(){
        var obwód = 2 * this.długość + 2 * this.szerokosć
        console.log("Obwód "+this.nazwa+": "+obwód)
    }
    pole(){
        var pole = this.długość * this.szerokosć
        console.log("Pole "+this.nazwa+": "+pole)
    }
    wypisz(){
        console.log("Długość "+this.nazwa+": "+this.długość)
        console.log("Szerokosć "+this.nazwa+": "+this.długość)
    }
    prów(b){
        if(this.pole()>b.pole()){
            console.log(this.nazwa)
        }else{
            console.log(b.nazwa)
        }
    }
}
const kwadrat = new Prostokąt(200,10,"1szy prostokąt")
const prostokąt = new Prostokąt(15,10,"2gi prostokąt")
kwadrat.prów(prostokąt)

