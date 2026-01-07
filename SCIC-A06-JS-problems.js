function reverseString(str) {
  let stringReversed = str.split("").reverse().join("");

  return stringReversed;
}

// console.log(reverseString("hello"));

function countVowel(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (const c of str) {
    if (vowels.includes(c.toLowerCase())) {
      count++;
    }
  }
  return count;
}
// console.log(countVowel("programming"));

function checkIfPalindrome(str) {
  const revStr = str.toLowerCase().split("").reverse().join("");
  if (str === revStr) {
    return true;
  } else {
    return false;
  }
}
// console.log(checkIfPalindrome("hello"));

function findMaxNum(arr) {
  const maxNum = Math.max(...arr);
  return maxNum;
}
// console.log(findMaxNum([5, 1, 9, 3]));

function removeDup(arr) {
  const filteredArr = new Set([...arr]);
  return [...filteredArr];
}
// console.log(removeDup([1, 2, 2, 3, 4, 4]));

function calcSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
// console.log(calcSum([1, 2, 3, 4]));

function findEvens(arr) {
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenArr.push(arr[i]);
  }
  return evenArr;
}
// console.log(findEvens([1, 2, 3, 4, 5, 6]));

function capitalize(str) {
  let capString = [];
  for (let word of str.split(" ")) {
    capString.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return capString.join(" ");
  //   return str.split(" ");
}
// console.log(capitalize("aminur rahman"));

function calcFactorial(num) {
  let factorial = 1;
  for (let i = 0; i < num; i++) {
    factorial *= i + 1;
  }
  return factorial;
}
// console.log(calcFactorial(5));

function pingPong() {
  let result = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) result.push("ping");
    else if (i % 5 === 0) result.push("pong");
    else if (i % 3 === 0 && i % 5 === 0) result.push("pingPong");
    else result.push(i);
  }
  return result.join(",");
}
// console.log(pingPong());
