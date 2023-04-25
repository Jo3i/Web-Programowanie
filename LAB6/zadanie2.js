class Triangle{
    constructor(wys, dłg_pdst, nazwa){
        this.wys = wys;
        this.dłg_pdst = dłg_pdst;
        this.nazwa = nazwa;
}
    pole(){
        var pole = ((this.wys*this.dłg_pdst)*(1/2))
        console.log("Pole "+this.nazwa+": "+pole)
    }
    porów(b){
        if(this.pole<b.pole()){
            this.pole
        }else{
            b.pole()
        }
    }
}
const trójk1 = new Triangle(5,3,"Trójk1")
const trójk2 = new Triangle(11,2,"Trójk2")
console.log(trójk1.porów(trójk2))