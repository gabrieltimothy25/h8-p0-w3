function palindrome(kata) {
    // you can only write your code here!
    var splitKata = kata.split('');
    var arrReverse = splitKata.reverse();
    var arrJoined = arrReverse.join('');
    if (kata === arrJoined) {
        return true;
    } else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false