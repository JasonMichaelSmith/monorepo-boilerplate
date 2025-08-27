export { };

// ==============================================
// 3. MEMOIZATION EXAMPLES
// ==============================================

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Basic Memoization Function
function memoize(fn) {
    const cache = new Map(); // A JavaScript quirk with a return function with a reference type access to cache retains that reference type for all subsequent calls
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// Pass the function reference (without calling it)
const memoizedFib = memoize(fibonacci);

console.log("#1 fibonacci(20)");
console.time();
memoizedFib(20);
console.timeEnd();

// Notice on the second call, the MS duration for the Fibonacci is significantly less, because now the
// time is simply in the operation to stringify, look, and fetch the result from cache in the map object
console.log("#2 fibonacci(20)");
console.time();
memoizedFib(20);
console.timeEnd();