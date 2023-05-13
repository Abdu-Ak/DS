// fn = fn-1 + fn-2

// O(2^n)
function recurisiveFibonacci(n) {
  if (n < 2) {
    return n;
  }

  return recurisiveFibonacci(n - 1) + recurisiveFibonacci(n - 2);
}
//  n! = n*(n-1)

//  O(n)
function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

// O(n)

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
// O(logn)

function binarySearch(array, target) {
  let leftIndex = 0;
  let RightIndex = array.length - 1;

  while (leftIndex <= RightIndex) {
    let middleIndex = Math.floor((leftIndex + RightIndex) / 2);
    if (target === array[middleIndex]) {
      return middleIndex;
    }
    if (target < array[middleIndex]) {
      RightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

// O(logn)
function recursiveBinary(array, target) {
  return search(array, target, 0, array.length - 1);
}

function search(array, target, leftIndex, RightIndex) {
  if (leftIndex > RightIndex) {
    return -1;
  }
  
  let middleIndex = Math.floor((leftIndex + RightIndex) / 2);

  if (target === array[middleIndex]) {
    return middleIndex;
  }    

  if (target < array[middleIndex]) {
    return search(array, target, leftIndex, middleIndex - 1);
  } else {
    return search(array, target, middleIndex + 1, RightIndex);
  }
}

console.log(recursiveBinary([1,2,3,4,4,5,6,],4));