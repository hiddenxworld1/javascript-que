 

 //Convert all strings to uppercase

 const capital = (str) => {
    let result = str.map(e => e.toUpperCase());
    return result;
 }

 console.log(capital(["js", "node", "react"]));
 