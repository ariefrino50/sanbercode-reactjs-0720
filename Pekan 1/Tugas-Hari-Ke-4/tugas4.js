
var loop = 0;

console.log('LOOPING PERTAMA');
while(loop <= 20){
    if(loop % 2 === 0){
        console.log(loop + ' I love coding');
    }
    loop += 1;
}

console.log('\n\nLOOPING KEDUA');
while(loop >= 0){
    if(loop % 2 === 0){
        console.log(loop + ' I will become a frontend developer');
    }
    loop -= 1;
}



for(var loop = 1; loop <=20; loop++){

    var kata;

    if(loop % 2 != 0){
        kata = ' Santai';
    }

    else if(loop % 2 === 0){
        kata = ' Berkualitas';
    }

    if((loop % 3 === 0) && (loop % 2 != 0)){
        kata = ' I Love Coding';
    }

    console.log(loop + kata);
}



var simbol  = '';
for(var loop = 1;loop <= 7; loop++){
    for(var lloop = 1; lloop <= loop; lloop++){        
        simbol  = simbol.concat('#');        
    }
    simbol  = simbol.concat('\n');
}

console.log(simbol);



var kalimat = 'Saya sangat senang belajar javascript';
console.log(kalimat.split(' '))



var daftarBuah  = ['2. Apel', '5. Jeruk', '3. Anggur', '4. Semangka', '1. Mangga'];
for(buah of daftarBuah.sort()){
    console.log(buah);
}