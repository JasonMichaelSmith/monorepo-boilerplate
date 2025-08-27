export { };

// ==============================================
// 1. BASIC MEMOIZE WITH PROPER TYPES
// ==============================================

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function memoize<TArgs extends readonly unknown[], TReturn>(
    fn: (...args: TArgs) => TReturn
): (...args: TArgs) => TReturn {
    const cache = new Map<string, TReturn>();

    return function (...args: TArgs): TReturn {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log(`✅ Cache HIT for key: ${key}`);
            return cache.get(key)!; // Non-null assertion since we checked has()
        }

        console.log(`❌ Cache MISS for key: ${key}`);
        const result = fn(...args);
        cache.set(key, result);
        console.log(`💾 Cached result for ${key}: ${result}`);

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

// ==============================================
// 2. ADVANCED MEMOIZE WITH OPTIONS
// ==============================================

interface MemoizeOptions {
    readonly maxSize?: number;
    readonly ttl?: number; // Time to live in milliseconds
    readonly keyGenerator?: (args: readonly unknown[]) => string;
}

// Note that we require the readonly type, so when an object with this cache-entry type is
// instantiated, none of these two keys can be reassigned against the reference type
interface CacheEntry<T> {
    readonly value: T;
    readonly timestamp: number;
}

function advancedMemoize<TArgs extends readonly unknown[], TReturn>(
    fn: (...args: TArgs) => TReturn,
    options: MemoizeOptions = {}
): (...args: TArgs) => TReturn {
    const {
        maxSize = 100,
        ttl = null,
        keyGenerator = JSON.stringify
    } = options;

    const cache = new Map<string, CacheEntry<TReturn>>();

    return function (...args: TArgs): TReturn {
        const key = keyGenerator(args);
        const now = Date.now();

        // Check if cached result exists and is valid
        if (cache.has(key)) {
            const cached = cache.get(key)!;

            // Check TTL if specified
            if (ttl === null || (now - cached.timestamp) < ttl) {
                console.log(`✅ Cache hit for ${key}`);
                return cached.value;
            } else {
                console.log(`⏰ Cache entry expired for ${key}`);
                cache.delete(key);
            }
        }

        console.log(`❌ Cache miss for ${key}`);
        const result = fn(...args);

        // Manage cache size (LRU eviction)
        if (cache.size >= maxSize) {
            const firstKey = cache.keys().next().value;
            console.log(`🗑️  Evicting oldest entry: ${firstKey}`);
            cache.delete(firstKey);
        }

        // Cache the result
        cache.set(key, {
            value: result,
            timestamp: now
        });

        return result;
    };
}