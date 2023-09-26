function formatCardNumber(value) {
  try {
    return value.match(/.{1,4}/g).join(" ");
  } catch (TypeError) {
    return "";
  }
}

export default formatCardNumber;
