function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var biaya = 2000;

    if (arrPenumpang.length == 0) {
        return '[]';
    }
    else {
        var hasil = [];
        for (var a = 0; a < arrPenumpang.length; a++) {
            var temp = [];
            var obj = {}
            obj.penumpang = arrPenumpang[a][0];
            obj.naikDari = arrPenumpang[a][1];
            obj.tujuan = arrPenumpang[a][2];
            obj.bayar = 0;
            hasil.push(obj);

            var asal = [];
            var ke = [];
            for (var c = 0; c < rute.length; c++) {
                if (obj.naikDari == rute[c]) {
                    asal.push([c])
                }
                else if (obj.tujuan == rute[c]) {
                    ke.push([c])
                }
                    // if (arrPenumpang[a][b] == rute[c]) {
                    //     temp.push(c)
                    //     for (d = 0; d < temp.length; d++) {
                            
                    //     }
                    // }
            }
            obj.bayar = (ke - asal) * biaya
        }
    }
    return hasil;
}
  
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
console.log(naikAngkot([])); //[]