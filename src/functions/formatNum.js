function formatNum(value) {
  try {
    return value.match(/.{1,4}/g).join(" ");
  } catch (TypeError) {
    return "";
  }
}

export default formatNum;
