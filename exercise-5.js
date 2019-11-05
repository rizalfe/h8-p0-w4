////Ubah Huruf////

function ubahHuruf(kata) {
    var alphabets = 'abcdefghijklmnopqrstuvwxyz'
    var hasil = '';

    for (var a = 0; a < kata.length; a++) {
        for (var b = 0; b < alphabets.length; b++) {
            if (kata[a] == alphabets[b]) {
                hasil += alphabets[b + 1];
            }
        }
    }
    return hasil;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu