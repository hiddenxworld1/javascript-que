   
   //Count Vowels
   
   const vowels = (str) => {
  let vowel = "aeiou";
  vowel.split("");

  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      result.push(str[i]);
    }
  }
  return result.length;
};

console.log(vowels("hello"));
