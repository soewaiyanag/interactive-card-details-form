function formatNumber(num, maxDigits) {
  const strNum = num.toString();
  if (strNum.length < maxDigits) {
    return "0".repeat(maxDigits - strNum.length) + strNum;
  }
  return strNum;
}

export default formatNumber;
