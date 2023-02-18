function range(start, end, step) {
  let arr = [];
  if (start < end) {
    for (var i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else if (start > end) {
    for (var j = start; j >= end; j += step) {
      arr.push(j);
    }
  }
  return arr;
}

function sum(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(range(5, 2, -1));
