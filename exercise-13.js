function targetTerdekat(arr) {
    // you can only write your code here!
    var arrX = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            indexO = i;
        } else if (arr[i] === 'x') {
            arrX.push(i);
        }
    }
    function absoluteVal(num) {
        return num < 0 ? -num : num;
    }
    if (arrX.length != 0) {
        var minDist = absoluteVal(arrX[0]-indexO);
        for (var i = 1; i < arrX.length; i++) {
            if (absoluteVal(arrX[i]-indexO) < minDist) {
                minDist = absoluteVal(arrX[i]-indexO);
            }
        }
        return minDist;
    } else {
        return 0;
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2