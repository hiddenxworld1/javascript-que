
const largestValue = num => {
   let max = 0;
   
   for (const ele of num) {
    if (num[ele] > max ){
        max = num[ele]
    }
   }
    return max;
}

console.log(largestValue([1,2,3,598,8,5,55,54,,5]));
