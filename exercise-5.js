function memoize(fn) {
  let cache = {}

  return function verify(x) {

        if (x in cache) {
         return `Fetching from cache for ${cache[x]}`;

        } else {
           let result = fn(x);
           cache[x] = result;
        return `Calculating result for ${result}`;
        }
    }
  }

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}



let factory = memoize(factorial);
console.log(factory(10));
console.log(factory(6));
console.log(factory(5));
console.log(factory(5));
















