function changeMe(arr) {
    var tahunIni = 2019;
    var number = 1;
    for (var a = 0; a < arr.length; a++) {
        var umurSekarang = tahunIni - arr[a][3];
        console.log(number + '. ' + arr[a][0] + ' ' + arr[a][1] + ':')
        if (arr[a].length == 3) {
            umurSekarang = String('Invalid Birth Year');
        }
        umurSekarang;
        number++;

        var result = {
            firstName: arr[a][0],
            lastName: arr[a][1],
            gender: arr[a][2],
            age: umurSekarang,
        };
        console.log(result);
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""