function isEven(checkNum) {
  // if the number is negative then convert it to positive
  if (checkNum < 0) checkNum *= -1;

  // if the number is zero then it's even
  if (checkNum == 0) {
    result = true;
  }

  // if the number is odd then it's odd
  else if (checkNum == 1) {
    result = false;
  }

  // if the number isn't 0 or 1 then keep subtracting until it is
  else {
    checkNum = checkNum - 2;
    isEven(checkNum);
  }

  return result;
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
