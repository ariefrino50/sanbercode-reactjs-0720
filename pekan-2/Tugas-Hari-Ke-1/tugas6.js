const { hotpink } = require("color-name");

// Soal 1
var arrayDaftarPeserta  = ['Asep','Laki-laki','baca buku',1992];

var arrayDaftarPeserta = {
    nama: 'Asep',
    jenis_kelamin: 'Laki-laki',
    hobi: 'baca buku',
    tahun_lahir: 1992
}

console.log('Nama : ' + arrayDaftarPeserta.nama);
console.log('Jenis Kelamin : ' + arrayDaftarPeserta.jenis_kelamin);
console.log('Hobi : ' + arrayDaftarPeserta.hobi);
console.log('Tahun Lahir : ' + arrayDaftarPeserta.tahun_lahir);


// Soal 2
var buah_buahan = [{nama: 'strawberry', warna: 'merah', ada_bijinya: 'tidak', harga: 9000},
{nama: 'jeruk', warna: 'oranye', ada_bijinya: 'ada', harga: 8000},
{nama: 'semangka', warna: 'hijau & merah', ada_bijinya: 'ada', harga: 10000},
{nama: 'Pisang', warna: 'Kuning', ada_bijinya: 'tidak', harga: 5000}]

console.log(buah_buahan[0])


// Soal 3
var dataFilm = []

function tambahDataFilm(objek){
    dataFilm.push(objek);
}

var detail_film = {
    nama: 'Milea',
    durasi: 2,
    genre: 'Romantic',
    tahun: 2020
}

dataFilm.push(tambahDataFilm(detail_film));
console.log(dataFilm);


// Soal 4
// release 1
class Animal{
    constructor(name){
        this.name = name
        this.legs = 4
        this.cold_blooded = false
    }

    get a_name(){
        return this.name;
    }

    get a_legs(){
        return this.legs;
    }

    get a_blood(){
        return this.cold_blooded;
    }
}

var sheep = new Animal('shaun');
console.log(sheep.a_name)
console.log(sheep.a_legs)
console.log(sheep.a_blood)


// release 2
class Ape extends Animal{
    constructor(name){        
        super(name);
        this.legs = 2
    }

    yell(){
        console.log('Auooo');
    }
}

class Frog extends Animal{
    constructor(name){        
        super(name);        
    }

    jump(){
        console.log('hop hop');
    }
}

var sungokong = new Ape('kera sakti');
sungokong.yell()

var kodok = new Frog('buduk');
kodok.jump()


// Soal 5
function Clock({ template }) {
  
  var timer;

  function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };

}

var clock = new Clock({template: 'h:m:s'});
clock.start();