

//Multiply each number by 10

const multiply = (arr) => {
 let result =  arr.map(e => e * 10);  
 return result;
};

console.log(multiply([1,2,3,4,5,6,7,8,9,10]));
