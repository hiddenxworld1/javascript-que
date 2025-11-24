// Given an array of product objects, return a new array containing only the product names, but formatted as:
// First letter uppercase
// Rest lowercase
// Ignore any products whose name length is less than 4

const products = (arr) => {
  return arr
    .filter((e) => e.name.length >= 4)
    .map((e) => e.name.charAt(0).toUpperCase() + e.name.slice(1).toLowerCase());
};

console.log(products([
    { name: "lAPTop", price: 800 },
    { name: "TV", price: 300 },
    { name: "PHONE", price: 500 },
    { name: "pen", price: 20 },
  ])
);
