  


  //Extract only the first letter of each word

  const firstLetter = (str) => {
    let result = str.map(e => e[0]);
    return result;
  }

  console.log(firstLetter(["Hidden", "Alpha", "Beta"]));
  