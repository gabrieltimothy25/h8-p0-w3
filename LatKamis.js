// CARI ANGKA YANG SAMA ANTARA PARAMETER 1 dan 2
function sama(num1, num2) {
    // tulis code
    var arraySama = [];
    var arrayUnique = [];
    for (var i = 0; i < num1.length; i++) {
      for (var j = 0; j < num2.length; j++) {
        if (num1[i] === num2[j]) {
          arraySama.push(num1[i]);
        } 
      }
    }
    for (var i = 0; i < arraySama.length; i++) {
      var found = false;
      for (var j = 0; j < arrayUnique.length; j++) {
        if (arraySama[i] == arrayUnique[j]) {
          found = true;
        }
      }
      if (found === false) {
        arrayUnique.push(arraySama[i]);
      }
    }
    return arrayUnique;
}
console.log(sama([1, 2, 3, 1], [5, 2, 1, 4])); 
[1,2]
console.log(sama([10, 21, 30], [21, 20, 45, 80, 90, 10])); 
// [10, 21]
console.log(sama([4, 3, 2, 1, 9, 10, 7, 8, 0], [23, 8, 22, 4, 2, 1])); 
// [4, 2, 1, 8] 
console.log(sama([80, 7, 75, 11, 78, 77, 16], [11, 7, 5, 8, 3])); 
// [7, 1]