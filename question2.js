// Task:

// Apply a 10% discount to products costing more than 400.
// Capitalize the first letter of each product name.
// Return a new array without modifying the original array.



const products = (arr) => {
    let result = arr.map(e => ({
        name: e.name.charAt(0).toUpperCase() + e.name.slice(1).toLowerCase(),
        price: e.price > 400 ? e.price * 0.9 : e.price
    }));

    return result;
}

console.log(products([
    { name: "laptop", price: 800 },
    { name: "phone", price: 500 },
    { name: "tablet", price: 300 },
    { name: "monitor", price: 200 }
]))



// [
//   { name: "Laptop", price: 720 },  // 10% discount applied
//   { name: "Phone", price: 450 },   // 10% discount applied
//   { name: "Tablet", price: 300 },  // price ≤ 400, no discount
//   { name: "Monitor", price: 200 }  // price ≤ 400, no discount
// ]
