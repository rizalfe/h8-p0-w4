////Mencari Nilai Modus////

function cariModus(arr) {
    var tampung = [];
    var hasil = 0;
    var cek = '';
    var hasilCek = 0;

    for (var a = 0; a < arr.length; a++) {
        for (var b = a + 1; b < arr.length; b++) {
            if (arr[a] == arr[b]) {
                tampung.push(arr[a]);
                if (tampung.length > 1) {
                    hasil = tampung[0];
                } else
                hasil = Number(tampung);
            }
        }
    }

    //Proses mengecek nilai value dari array (arr)//
    cek = tampung[0];
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] == cek) {
            hasilCek++;
        }
    }

    if (tampung.length == 0 || hasilCek > 2) {
        return -1;
    }
    return hasil;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1