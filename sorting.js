// O(n^2)

function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

// O(n^2)

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let numToInsert = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > numToInsert) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = numToInsert;
  }
}

// worst O(n^2)
// averge O(nlogn)

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  let pivot = array[array.length - 1];

  let left = [];
  let right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// O(nlogn)

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sortedArr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

// O(n^2)

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
   
}

let array = [-9, -4, 2, 4, 7, 0];
mergeSort(array);
console.log(quickSort(array));
