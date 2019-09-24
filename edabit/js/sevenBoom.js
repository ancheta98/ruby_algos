// Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array.
// Otherwise, return "there is no 7 in the array".

// Examples
// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 170]));
console.log(sevenBoom([76, 55, 44, 32]))
console.log(sevenBoom([86, 48, 100, 66]))
// console.log(sevenBoom([2, 55, 60, 97, 86]));
//todo: rework code so that it works for nums > 100 with a 7 in the tens place
//idea: join all numbs from arr together into a string split by char and then do that
function sevenBoom(arr) {
  let flag = "there is no 7 in the array";
  //checks each index to see if it is larger than ten, if it is not then we evaluate if it is 7
  // if it is we set flag
  arr.map(x =>
    x < 10
      ? arr.includes(7)
        ? (flag = "Boom!")
        : (flag = "there is no 7 in the array")
      : greaterThanTen(x)
  );
  function greaterThanTen(idx) {
      console.log(idx, "before")
    if (flag == "Boom!"){
        return flag;
    }
    let remainder = idx % 10;
    idx = idx - remainder
    console.log(idx, "after")
    if (remainder == 7 || 70) {
        console.log("boomed here")
      flag = "Boom!";
      return flag;
    } else if (idx > 10) {
        console.log("greater than ten")
      greaterThanTen(idx);
    }
  }
  return flag;
}
