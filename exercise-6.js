////Digit Perkalian Minium////

function digitPerkalianMinimum(angka) {
    var bilangan1 = [];
    var hasil = [];
    for (var a = 0; a <= angka; a++) {
        if (angka % a == 0) {
            bilangan1.push(a);
        }
    }
    var bilangan2 = []; 
    for (var b = 0; b <= bilangan1.length; b++) {
        if (angka % bilangan1[b] == 0) {
            bilangan2.push(bilangan1[b]);
        }
    }
    var tampung = [];
    for (var i = 0; i < bilangan1.length/2; i++) {
        for (var j = 0; j < bilangan2.length; j++) {
            if (bilangan1[i]*bilangan2[j] == angka) {
                tampung.push(`${bilangan1[i]}${bilangan2[j]}`);
            }
        }
    }
    var digit = [];
    for (var x = 0; x < tampung.length; x++) {
        digit.push(tampung[x].length);
    }

    //Masuk ke prose Pembandingan//
    if (digit.length <= 1) {
        return digit[0];
    } else
    if (digit.length > 1) {
        var banding = '';
        for (var y = 0; y < digit.length; y++) {
            for (var z = y + 1; z < digit.length; z++) {
                if (digit[y] > digit[z] || digit[z] == digit[y]) {
                    banding = digit[z];
                }
            }
        }
    }
    return banding;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2