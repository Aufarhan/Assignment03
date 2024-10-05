// Farhan Aufar

function arrSum(arr) {
    let currentMax = arr[0];
    let globalMax = arr[0];
    let startIndex = 0, endIndex = 0, tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currentMax + arr[i]) {
            currentMax = arr[i];
            tempStart = i;
        } else {
            currentMax += arr[i];
        }

        if (currentMax > globalMax) {
            globalMax = currentMax;
            startIndex = tempStart;
            endIndex = i;
        }
    }

    return [arr.slice(startIndex, endIndex + 1), globalMax];
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3]));
