console.log('test');

// for loop
const arr = [1,2,3,4,56,67,655,45];
const n = 2;
// const stringArray = ["apple", "banana", "orange", "grape"];

// FIRST METHOD:
const largestNumber = Math.max(...arr);
// console.log("The largest number is:", largestNumber);

// SECOND METHOD: 
// a
const arr2 = [1, 2, 3, 4, 56, 67, 655, 45];
// Initialize max with the first element of the array
let max = null;
// Iterate through the array starting from the second element
for (let i = 1; i < arr2.length; i++) {
  // Check if the current element is greater than the current max
  if (arr2[i] > max) {
    // Update max if the current element is greater
    max = arr2[i];
  }
}
// console.log("The largest number is:", max);
// b
const arrr = [1, 2, 3, 4, 56, 67, 655, 45];
let max2 = arrr[0];
let secondMax = arrr[1];
for (let i = 0; i < arrr.length; i++) {
  if (arrr[i] > max2) {
    secondMax = max2;
    max2 = arrr[i];
  } else if (arrr[i] > secondMax && arrr[i] < max2) {
    secondMax = arrr[i];
  }
}
// console.log("The 2nd largest number is:", secondMax);


// THIRD VERSION : 
const arr3 = [1, 2, 3, 4, 56, 67, 655, 45];
// Sort the array in descending order
arr3.sort((a, b) => b - a);
// Access the first and second elements to get the 1st and 2nd largest numbers
const firstLargest = arr[0];
const secondLargest = arr[1];
// console.log("The 1st largest number is:", firstLargest);
// console.log("The 2nd largest number is:", secondLargest);




// for in loop


// for of loop


// while loop


// do while loop

function findThirdLargest(arr) {
    // Check if the array has at least three elements
    if (arr.length < 3) {
      return "Array should have at least three elements";
    }
  
    let firstLargest = arr[0];
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;
  
    // Iterate through the array to find the 3rd largest element
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > firstLargest) {
        thirdLargest = secondLargest;
        secondLargest = firstLargest;
        firstLargest = arr[i];
      } else if (arr[i] > secondLargest) {
        thirdLargest = secondLargest;
        secondLargest = arr[i];
      } else if (arr[i] > thirdLargest) {
        thirdLargest = arr[i];
      }
    }
  
    return thirdLargest;
  }
  
  // Example usage:
  const array = [4, 7, 1, 9, 3, 8];
  const result = findThirdLargest(array);
  console.log("Third Largest Number:", result);

























  