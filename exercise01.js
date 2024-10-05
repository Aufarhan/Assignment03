// Farhan Aufar

const isArithmeticProgression = (arr) => {
    if (arr.length <= 2) return false;
    const selisih = arr[1] - arr[0];

    for (let y = 2; y < arr.length; y++) {
        if (arr[y] - arr[y - 1] !== selisih) {
        return false;
        }
    }
    return true;
    };

// TEST CASES
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); 
console.log(isArithmeticProgression([2,4,6,12,24]));  
console.log(isArithmeticProgression([2,4,6,8]));  
console.log(isArithmeticProgression([2,6,18,54])); 
console.log(isArithmeticProgression([1,2,3,4,7 ])); 