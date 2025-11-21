

const duplicate = (num) => {

    let arr = [];

    for (const ele of num) {
       if (!arr.includes(ele)) {
        arr.push(ele);
       } 
    }
return arr
}

console.log(duplicate([1,22,3,598,8,55,55,54,5]));

