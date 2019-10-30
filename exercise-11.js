function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var trueArr = [];
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i+1] - arr[i]) === (arr[i+2] - arr[i+1])) {  // bandingin perbedaan pas di i dan setelah i
            trueArr.push(true);
        }
    }
    if (trueArr.length === arr.length-2) {  // jumlah kemungkinan perbandingan dalam sebuah array dengan panjang selalu n-2 
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
