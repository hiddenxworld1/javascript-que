
/*
let number = -2;

if (number > 0) {
  console.log(`The ${number} is a positive number`);
} else if (number < 0) {
  console.log(`The ${number} is a negative number`);
} else {
  console.log(`The ${number} is a zero`);
}
*/

let number = 0;
let result =
  number > 0
    ? `This ${number} is a positive`
    : number < 0
    ? `This ${number} is negative`
    : `The ${number} is zero`;

console.log(result);
