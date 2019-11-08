function checkAB(num) {
    var posisiA = [];
    var posisiB = [];
    var hasil = [];
    var hasilAkhir  = 0;
    //Looping untuk menentukan letak index dari huruf 'a' dan 'b'//
    for (var a = 0; a < num.length; a++) {
        if (num[a] == 'a') {
            posisiA.push(a);
        } else
        if (num[a] == 'b') {
            posisiB.push(a);
        }
    }
    if (posisiB.length == 0) {
        return false;
    }
    for (var i = 0; i < posisiA.length; i++) {
        for (var j = 0; j < posisiB.length; j++) {
            hasil.push(posisiB[j] - posisiA[i])
        }
    }
    for (x = 0; x < hasil.length; x++) {
        if (hasil[x] == '4') {
            hasilAkhir = hasil[x] - 1;
        } else
        if (hasil[x] == '-4') {
            hasilAkhir = hasil[x] + 1;
        }
    }
    if (hasilAkhir == 0) {
        return false;
    } else
    if (hasilAkhir == '3' || hasilAkhir == '-3') {
        return true;
    }
    return hasilAkhir;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false