// Farhan Aufar

function sumArray(arr, int) {
    let resultPairs = []; 
    let encounteredNumbers = new Set();

    for (let number of arr) {
        let difference = int - number;
        if (encounteredNumbers.has(difference)) {
            resultPairs.push([difference, number]);
        }
        encounteredNumbers.add(number);
    }
  
    return resultPairs;
}

// TEST CASES
console.log(sumArray([2, 1, 4, 3], 5));    
console.log(sumArray([1, 8, 10, 3], 11)); 
