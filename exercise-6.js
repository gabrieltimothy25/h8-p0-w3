function angkaPalindrome(num) {
    // you can only write your code here!
    var i = num+1;
    while (num) {
        splitI = i.toString().split('');
        arrReverse = splitI.reverse();
        arrJoined = arrReverse.join('');
        if (i == arrJoined) {
            return i;
        } 
        i++;
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001