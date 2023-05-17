function palidrome(string) {
  let length = string.length;

  for (let i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function numPalidrome(number) {
  let num = number;
  let rev = 0;

  while (num > 0) {
    let digit = num % 10;

    rev = rev * 10 + digit;

    num = Math.floor(num / 10);
  }

  if (number === rev) {
    console.log("palidrome");
  } else {
    console.log("not palidrome");
  }
}

function fizzBizz(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
      array[i] = "FizzBuzz";
    } else if ((i + 1) % 3 === 0) {
      array[i] = "Fizz";
    } else if ((i + 1) % 5 === 0) {
      array[i] = "Buzz";
    } else {
      array[i] = `${i + 1}`;
    }
  }

  return array;
}
function romanToNumber(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = romanNumerals[roman[i]];
    const next = romanNumerals[roman[i + 1]];

    if (next && next > current) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }

  return result;
}

function reverseArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }

  return arr;
}

function removePrimes(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = 0;
    for (let j = 2; j <= arr[i] / 2; j++) {
      if (arr[i] % j === 0) {
        flag = 1;
        break;
      }
    }
    if (flag === 0 && arr[i] !== 1) {
      for (let k = i; k < arr.length - 1; k++) {
        arr[k] = arr[k + 1];
      }
      arr.length--;
      i--;
    }
  }
  return arr;
}

function findLargestwithoutSorting(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

function problem(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

function problemInofn(arr, target) {
  let result = [];
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (map[complement]) {
      result.push([complement, arr[i]]);
    }
    map[arr[i]] = true;
  }

  return result;
}

function changeString(strng, num) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newStr = "";

  for (let i = 0; i < strng.length; i++) {
    let index = alphabet.indexOf(strng[i]);
    if (index !== -1) {
      const newIndex = (index + num) % 26;
      const newChar = alphabet[newIndex];
      newStr += newChar;
    } else {
      newStr += strng[i];
    }
  }
  return newStr;
}
function frequency(array) {
   let freq = {}
  
   for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (freq[element]) {
       freq[element] ++
    } else {
      freq[element ] =1
    }
    
   }
   return freq
    
}

function deleteElement(array , element) {
     
     let newArr= []

     for (let i = 0; i < array.length; i++) {
       if (array[i] !== element) {
          newArr[newArr.length] = array[i]
       }
        
     }
     return newArr

}
 function reverString(string) {
    let revStrng = ""
    for (let i = string.length-1 ; i >= 0 ; i -- ) {
    
      revStrng += string[i]
      
    }
    return revStrng
 }

function kLarge(array,k) {
   
    let newArr=[]
    let temp
    for (let i = 0; i < array.length; i++) {
         
      if (newArr.indexOf(array[i]) === -1) {
         newArr[newArr.length] = array[i]
      }
      
    }
     for (let i = 0; i < newArr.length; i++) {
       for (let j = i +1; j < newArr.length; j++) {
          if (newArr[i] < newArr[j] ) {
             temp = newArr[i]
             newArr[i] = newArr[j]
             newArr[j] = temp
          }
       }
     } 
     
    

   return newArr[k-1]
}

function wordReverse(string) {
  let result =[] ;

  string.split(" ").forEach(element => {
      result.push(element.split("").reverse().join(""))
    });
    
    return result.join(" ")
     

}

function space(params) {
  let newstr =    params.replaceAll(' ', '').replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase()
  
   if ( newstr.split("").reverse().join("") === newstr) {
     return true
   }else{
    return false
   }
  
}
  

