function stringChop(str, size) {
  if (str === null) return [];
  if (size <= 0) return [str]; // though prompt ensures size is positive
  
  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."));
alert(stringChop(str, size));