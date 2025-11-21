// Palindrome

const palindrome = (name) => {
  let clean = name.toLowerCase();
  let reversed = clean.split("").reverse().join("");

  if (clean === reversed) {
    console.log("Its a palindrome");
  } else {
    console.log("Its not a palindrome");
  }

  return reversed;
};

console.log(palindrome("Nitin"));
