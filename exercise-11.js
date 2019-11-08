function shoppingTime(memberId, money) {
    //Ini adalah step untuk melihat kondisi kostumer apakah seorang member atau bukan & memiliki uang yang cukup atau tidak//
    if (memberId == undefined && money == undefined) {
        return 'Maaf, toko X hanya berlaku untuk member saja';
    } else
    if (memberId.length == 0 && money != undefined) {
        return 'Maaf, toko X hanya berlaku untuk member saja';
    } else
    if (memberId != undefined && money != undefined) {
        var stacattu = ['Stacattu', 1500000 ];
        var zoro = ['Zoro', 500000 ];
        var hnn = ['H&N', 250000 ];
        var uniklooh = ['Uniklooh', 175000 ];
        var casingHP = ['Casing Handphone', 50000];
        var jumlahUang = 0;
        var belanjaan = [];
        if (money >= stacattu[1]) {
            jumlahUang = money - stacattu[1];
            belanjaan.push(stacattu[0])
        } else
            if (money < stacattu[1]) {
                jumlahUang = money;
            }

        if (jumlahUang >= zoro[1]) {
            jumlahUang = jumlahUang - zoro[1];
            belanjaan.push(zoro[0]);
        } else
            if (money < zoro[1]) {
                jumlahUang = money;
            }

        if (jumlahUang >= hnn[1]) {
            jumlahUang = jumlahUang - hnn[1];
            belanjaan.push(hnn[0]);
        } else
            if (money < hnn[1]) {
                jumlahUang = money;
            }

        if (jumlahUang >= uniklooh[1]) {
            jumlahUang = jumlahUang - uniklooh[1];
            belanjaan.push(uniklooh[0]);
        } else
            if (money < uniklooh[1]) {
                jumlahUang = money;
            }

        if (jumlahUang >= casingHP[1]) {
            jumlahUang = jumlahUang - casingHP[1];
            belanjaan.push(casingHP[0]);
        }  else
            if (money < casingHP[1]) {
                return 'Mohon maaf, uang tidak cukup';
            }

        var result = {
            memberId: memberId,
            money: money,
            listPurchased: belanjaan,
            changeMoney: jumlahUang,
        };
        return result;
    }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja