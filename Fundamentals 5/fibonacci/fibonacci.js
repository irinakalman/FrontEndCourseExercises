const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }

  let arr = [0, 1];
  for (let i = arr.length; i <= n; ++i) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

module.exports = fibonacci;
