const reversed = (str) => {
  let reverse = str.split("").reverse().join("");
  return reverse;
};
console.log(reversed("Hello!word"));
