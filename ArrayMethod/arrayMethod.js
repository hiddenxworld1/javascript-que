


//Push :  add to end 
 let name = ["adit","aditi","nitesh"]
 name.push("HiddenxWorld")
console.log(name);


// Unshift : add to start 
name.unshift("Hello")
console.log(name);



// Pop : delete from end and return it 

name.pop();
console.log(name);

// Shift : delete from start and return it 

name.shift();
console.log(name);



//Qs  for the given start state of an array, change it to final form using methods.


let start = ["January","july","march","august"];

start.shift();
start.shift();
start.unshift("june");
start.unshift("july")

console.log(start);


//indexOf : returns index of something 

let color = ["red","blue","green","yellow","violet"]


console.log(color.indexOf("blue"));
console.log(color.includes("black"));


// concat : merge 2 array 
console.log(name.concat(color));


//reverse : reverse an array 

console.log(color.reverse());


// Slice : copies a portion of an array 

console.log(color.slice(1,3));
console.log(color.slice(1));
console.log(color.slice(-2));
console.log(color.slice());

//Splice : remove || replace || add elements in place 

console.log(color.splice(3));

console.log(color);
console.log(color.splice(0,1));
console.log(color);
console.log(color.splice(0,1,"orange","black"));
console.log(color);


//Sort : sorts an array 

let cars = ["car","bmw","gwagon","z","a","c","x"];

console.log(cars.sort());


// Qs for the given start state of an array, change it to final form using methods.

let months = ["January","july","march","august"];

months.splice(0,2,"july","june");
console.log(months);


let language = ["c","c++","html","javascript","python","java","C#","sql"]

console.log(language.reverse().indexOf("javascript"));



// Array References : Address in memory 

// Constant Array : 

// Nested Arrays : array of arrays  is also called (Multi dimensional array )

let numbers = [[2,4],[3,6],[4,8]];

console.log(numbers);

