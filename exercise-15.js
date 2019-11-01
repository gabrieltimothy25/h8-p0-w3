function groupAnimals(animals) {
    // you can only write your code here!
    var result = [];
    var letters = [];
    // Grouping Stage
    for (var i = 0; i < animals.length; i++) { 
        var temp = [];
        var huruf = animals[i][0];
        for (var j = 0; j < animals.length; j++) {
            if (huruf === animals[j][0]) {
                temp.push(animals[j]);
            }
        } 
        result.push(temp);
    } 
    // Filtering Duplicates Stage
    var resultUnique = [];
    for (var i = 0; i < result.length; i++) {
        var found = false;
        for (var j = 0; j < resultUnique.length; j++) {
            if (result[i][0] === resultUnique[j][0]) {
                found = true;
            }
        }
        if (found === false) {
            resultUnique.push(result[i])
        }
    }
    // Sorting and Final Stage
    let bubbleSort = (inputArr) => {
        let len = inputArr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len-1; j++) {
                if (inputArr[j][0] > inputArr[j + 1][0]) {
                    let tmp = inputArr[j];
                    inputArr[j] = inputArr[j + 1];
                    inputArr[j + 1] = tmp;
                }
            }
        }
        return inputArr;
    };
    return bubbleSort(resultUnique);
}

  //['ayam', 'anoa', 'cacing', 'kuda', 'kancil']
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]



