// contoh function yang memiliki callback sebagai parameter
function periksaDokter(nomorAntri, callback){
    if(nomorAntri > 50){
        callback(false)
    }
    else if(nomorAntri < 10){
        callback(true)
    }
}

// menjalankan function periksaDokter yang sebelumnya sudah dideklarasi
periksaDokter(65, function(check){
    if(check){
        console.log('sebentar lagi giliran saya')
    }
    else{
        console.log('saya jalan jalan dulu')
    }
})


var isMomHappy = true;
// Promise
var willIGetNewPhone = new Promise(
    function(resolve, reject){
        if(isMomHappy){
            var phone = {
                brand: 'samsung',
                color: 'black'
            };
            resolve(phone); //janji dipenuhi
        }
        else{
            var reason = new Error('mom is not happpy');
            reject(reason); //janji tidak dipenuhi
        }
    }
);


function askMom(){
    willIGetNewPhone
    .then(function(dipenuhi){
        console.log(dipenuhi);
    })

    .catch(function(error){
        console.log(error.message);
    })
}

// tagih janji
askMom()