// SORT

function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

const unsortedList = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const sortedList = selectionSort(unsortedList.slice()); 

console.log(sortedList);

//LINIAR


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}

const listLinearSearch = [5, 9, 3, 1, 2, 8, 4, 7, 6];
const targetLinearSearch = 7;
const resultLinearSearch = linearSearch(listLinearSearch, targetLinearSearch);

console.log(resultLinearSearch);

// BINARY

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return false;
}

const listBinarySearch = [5, 9, 3, 1, 2, 8, 4, 7, 6];
const targetBinarySearch = 7;
const resultBinarySearch = binarySearch(listBinarySearch, targetBinarySearch);

console.log(resultBinarySearch);
