const rotate = (num) => {
  str = num.toString();
  return parseInt(
    str.charAt(str.length - 1) + str.substring(0, str.length - 1)
  );
};

const isPrime = (num) => {
  if (num > 1) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const isCircular = (num) => {
  str = num.toString();
  for (let i = 0; i < str.length; i++) {
    if (!isPrime(parseInt(str))) {
      return false;
    }
    str = str.charAt(str.length - 1) + str.substring(0, str.length - 1);
  }
  return true;
};

const limit = 1000000;
n = 0;
for (let i = 1; i <= limit; i++) {
  if (isCircular(i)) {
    n++;
  }
}

console.log("There are " + n + " circular numbers below " + limit);
