


//Convert an array of objects to an array of names

const getNames = (str) => {
    return str.map(e => e.name);
}
console.log(getNames([
  { name: "Aditya", age: 20 },
  { name: "Rajesh", age: 25 },
  { name: "HiddenxWorld", age: 30 }
]));