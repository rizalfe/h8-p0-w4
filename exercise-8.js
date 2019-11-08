function tukarBesarKecil(kalimat) {
    var hurufKecil = 'abcdefghijklmnopqrstuvwxyz'
    var hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var hasil = '';

    for (var a = 0; a < kalimat.length; a++) {
        if (kalimat[a] != String) {
            hasil += kalimat[a];
        } else
        if (kalimat[a] == String) {
            for (var b = 0; b < hurufBesar.length; b++) {
                if (kalimat[a] == hurufBesar[b]) {
                    hasil += hurufKecil[b];
                }
            }
            for (var c = 0; c < hurufKecil.length; c++) {
                if (kalimat[a] == hurufKecil[c]) {
                    hasil += hurufBesar[c];
                }
            }
        }
    }
    return hasil;
}
  
// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"