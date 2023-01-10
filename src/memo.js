function computingSquare(num) {
  return num * num;
}

function memoizedSqaure() {
  let cache = {};
  return function optimizedSquare(num) {
    if (num in cache) {
      console.log(`Returning from cache`);
      return cache[num];
    } else {
      console.log(`computing square`);
      const result = computingSquare(num);
      cache[num] = result;
      return result;
    }
  };
}

const memoSqaure = memoizedSqaure();

console.log(memoSqaure(2));
console.log(memoSqaure(8));
console.log(memoSqaure(4));
console.log(memoSqaure(8));
