function fixNumber(num) {
  // for CardNumber
  // this function concat zeros after the number
  const allZeroArray = Array(16).fill("0");
  let result;
  for (let index = 0; index < num.length; index++) {
    allZeroArray[index] = num[index];
  }
  result = allZeroArray.join("");
  return result;
}

export default fixNumber;
