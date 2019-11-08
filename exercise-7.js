function urutkanAbjad(str) {
    var urut = 'abcdefghijklmnopqrstuvwxyz'
    var result = ''
    
    for (var a = 0; a < urut.length; a++) {
      for (var b = 0; b < str.length; b++) {
        if (urut[a] == str[b]) {
          result += str[b];
        }
      }
    }
    return result;
  }
  
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'