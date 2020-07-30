

// soal2

let kaliman =""
var gabung = () => {
    kalimat=`${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`
    return kalimat
}
console.log(gabung(rtr,trt,trtr,rtr,rtr))

// soal 3

class Book {
    constructor(name, totalpage, price){
        this.name =name
        this.totalpage = totalpage
        this.price = price
    }
}

class komik extends book {
    constructor(name, totalpage, price){
        super(name)
        super(totalpage)
        super(price)
        this.iscolorful = true
    }
    show(){
        return this.name+" "+this.totalpage+" "+this.price
    }
}
buku = new komik ("komik",10,10000)
console.log(buku.show())