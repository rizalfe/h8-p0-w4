////Menentukan Median////

function cariMedian(arr) {
    //Sorting Terlebih Dahulu//
    var hasil = [];
    for (var a = 0; a < arr.length; a++) {
        for (var b = a + 1; b < arr.length; b++) {
            if (arr[a] > arr[b]) {
                hasil = arr[b];
                arr[b] = arr[a];
                arr[a] = hasil;
            }
        }
    }

    //Masuk Ke Pembahasan//
    var temp = 0;
    if (arr.length % 2 == 0) {
        temp = (arr[arr.length/2-1] + arr[arr.length/2])/2;
    } else 
    if (arr.length % 2 != 0) {
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += arr[i];
            temp = Math.ceil(total/arr.length);
        }
    }
    return temp;
}
  
// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5