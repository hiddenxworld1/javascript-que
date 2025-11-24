



const arrayToString = (str) => {
    return str.reduce((acc , curr) => acc + "-" + curr);
 };

 console.log(arrayToString(["a", "b", "c", "d"]));
 