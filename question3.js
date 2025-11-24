// Tasks:
// Capitalize the first letter of each customer’s name.
// Calculate the total spending per customer using reduce.
// Return an object with the format:

const orders = (arr) => {
  let result = arr.map((e) => ({
    customer:
      e.customer.charAt(0).toUpperCase() + e.customer.slice(1).toLowerCase(),
    total: e.total,
  }));

  return result.reduce((acc, { customer, total }) => {
    acc[customer] = (acc[customer] || 0) + total;
    return acc;
  });

  return result;
};

console.log(
  orders([
    { customer: "alice", total: 120 },
    { customer: "bob", total: 80 },
    { customer: "charlie", total: 200 },
    { customer: "alice", total: 150 },
    { customer: "bob", total: 50 },
  ])
);
