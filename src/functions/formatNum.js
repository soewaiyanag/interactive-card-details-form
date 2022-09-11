function formatNum(value) {
  return value.match(/.{1,4}/g).join(" ");
}

export default formatNum;
