// Given an array of usernames, return a new array where:
// Each username starts with uppercase
// Rest of the letters are lowercase
// All usernames shorter than 3 characters must be removed

const usernames = (arr) => {
  let result = arr
    .filter((name) => name.length >= 3)
    .map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());

  return result;
};

console.log(usernames(["hiDdEn", "AL", "john", "MIA", "xo", "ROBERT"]));
