class Trapez{
    constructor(wys,pdst1,pdst2,nazwa){
        this.wys = wys;
        this.pdst1 = pdst1;
        this.pdst2 = pdst2;
        this.nazwa = nazwa;
    }
    pole(){
        var x = ((1/2) * (this.pdst1 + this.pdst2) * this.wys)
        console.log("Pole "+this.nazwa+": "+x)
    }
}
const trapez1 = new Trapez(10,10,12,"trapez1")
const trapez2 = new Trapez(5,10,6,"trapez2")
trapez1.pole()
trapez2.pole()