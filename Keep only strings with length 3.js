 //Keep only strings with length > 3

 const greaterlength = (str) =>{
  return str.filter(e => e.length > 3)
 } 

 console.log(greaterlength( ["js", "java", "api", "node", "go"]));
 