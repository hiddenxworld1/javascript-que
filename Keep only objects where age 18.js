

//Keep only objects where age ≥ 18

const  users =  (obj)  => {
    return obj.filter(e => e.age >= 18 )
}

console.log(users([
  { name: "A", age: 15 },
  { name: "B", age: 18 },
  { name: "C", age: 25 }
]));
