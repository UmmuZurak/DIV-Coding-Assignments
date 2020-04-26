// Write a JavaScript program that accept two integers
// and display the larger integer.

function maxInteger(num1, num2) {
  let numArray = [];

  if (Number.isInteger(num1) === true && Number.isInteger(num2) === true) {
    numArray.push(num1);
    numArray.push(num2);

    let maxNum = Math.max(...numArray);

    console.log(maxNum);
  } else {
    console.log('input integers')
  }
}

maxInteger(49, 24);
