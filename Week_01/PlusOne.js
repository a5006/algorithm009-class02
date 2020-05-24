/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let temp = 0;
  let len = digits.length;
  let arr = [];
  while (digits.length) {
    let s = 0;
    if (digits.length === len) {
      //如果是最后一位
      let s = digits.pop() + 1;
      if (s > 9) {
        //如果大于10
        temp = 1;
        s = 10 - s;
      }
    } else {
      //如果不是最后一位
      s = digits.pop();
      if (temp) {
        s = s + temp();
        temp = 0;
      }
      if (s > 9) {
        temp = 1;
        s = 10 - s;
      }
    }
    arr.unshift(s);
  }
  if (temp) {
    temp = 0;
    arr.unshift(1);
  }
  return arr;
};
