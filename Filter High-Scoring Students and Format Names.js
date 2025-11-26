

// Return a new array containing only the names of students who scored 80 or more.
// Capitalize the first letter of each name.


const students = (arr) => {
  let result = arr.filter(e => e.score >= 80).map(e => e.name.charAt(0).toUpperCase() + e.name.slice(1).toLowerCase()
  );

return result ;
}

console.log(students([
  { name: "alice", score: 85 },
  { name: "bob", score: 92 },
  { name: "charlie", score: 78 },
  { name: "dave", score: 65 }
]));

// ["Alice", "Bob"]



