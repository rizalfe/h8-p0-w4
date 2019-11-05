////Menentukan FPB////

function fpb(angka1, angka2) {
    var hasil1 = [];
    for (var a = 0; a < angka1; a++) {
        if (angka1 % a == 0) {
            hasil1.push(a);
        }
    }

    var hasil2 = [];
    for (var b = 0; b < angka2; b++) {
        if (angka2 % b == 0) {
            hasil2.push(b);
        }
    }

    var tampung = [];
    for (i = 0; i < hasil1.length; i++) {
        for (j = 0; j < hasil2.length; j++) {
            if (hasil1[i] == hasil2[j]) {
                tampung.push(hasil2[j])
            }
        }
    }

    if (tampung.length <= 1) {
        return tampung[0];
    } else
        if (tampung.length > 1) {
            var result = '';
            for (var x = 0; x < tampung.length; x++) {
                for (var y = x + 1; y < tampung.length; y++) {
                    if (tampung[x] < tampung[y]) {
                        result = tampung[y];
                    }
                }
            }
        }
    return result;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1