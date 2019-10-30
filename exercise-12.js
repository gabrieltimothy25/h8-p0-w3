function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var trueArr = [];
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i+1] / arr[i]) === (arr[i+2] / arr[i+1])) {  // bandingin rasio pas di i dan setelah i
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
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false