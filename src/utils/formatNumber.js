function formatNumber(input) {
  const num = parseFloat(input);
  if (Math.abs(num) >= 1000000) {
    return (num / 1000000).toFixed(2) + "m";
  } else if (Math.abs(num) >= 1000) {
    return (num / 1000).toFixed(2) + "k";
  } else {
    return num.toFixed(2);
  }
}

export default formatNumber;
