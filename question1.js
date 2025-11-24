
//Write code that returns a new array containing only adult users (age ≥ 18) AND also formats their names so the first letter is uppercase and the rest lowercase.



const users = (str) => {

    let result = str.filter(e  => e.age >= 18).map(e => ({
        name : e.name.charAt(0).toUpperCase() + e.name.slice(1).toLowerCase(),age : e.age
    }));

    return result;
}


console.log(users( [
  { name: "Hidden", age: 20 },
  { name: "alex", age: 17 },
  { name: "JOHN", age: 25 },
  { name: "maria", age: 15 }
]));



// [
//   { name: "Hidden", age: 20 },
//   { name: "John", age: 25 }
// ]


