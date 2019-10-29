function pasanganTerbesar(num) {
    // you can only write your code here!
    let arr = [];
    numSplit = num.toString().split('');
    for (var i = 0; i < numSplit.length; i++) {
        var current = parseInt(numSplit[i].concat(numSplit[i+1]));
        arr.push(current);
    } 
    arr.sort(function(value1, value2) {return value1 < value2});
    return arr[0];
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99