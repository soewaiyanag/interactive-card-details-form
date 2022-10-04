function formatTo2Digits(num) {
  return num.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
}

export default formatTo2Digits;
