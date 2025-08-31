export { };

//
// Fizz Buzz
//
const fizz = 'Fizz';
const buzz = 'Buzz';

const fb = () => {
    for (let i = 1; i <= 100; i++) {
        const im3 = i % 3 === 0;
        const im5 = i % 5 === 0;

        // 3 && 5
        if (im3 && im5) console.log(fizz + buzz);
        // Fizz
        else if (im3) console.log(fizz);
        // Buzz
        else if (im5) console.log(buzz);
        // Else
        else console.log(i);
    }
};
//fb();

//
// Array Duplicates
//
const findDuplicatesSlow = (values: (number | string)[]): (number | string)[] => {
    const duplicates: (number | string)[] = [];
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if (i == j) continue;
            if (values[i] == values[j]) duplicates.push(values[i]);
        }
    }
    return [...new Set(duplicates)]; // Removes duplicates
};
console.time("slow");
console.log(findDuplicatesSlow([1, 2, 3, 3, 4, 5, 4, 6]));
console.timeEnd("slow");

const findDuplicatesFast = (values: (number | string)[]): (number | string)[] => {
    const seen: Set<number | string> = new Set();
    const duplicates: Set<number | string> = new Set();
    for (const v of values) {
        if (seen.has(v)) {
            duplicates.add(v);
        } else {
            seen.add(v);
        }
    }
    return Array.from(duplicates);
};
console.time("fast");
console.log(findDuplicatesFast([1, 2, 3, 3, 4, 5, 4, 6]));
console.timeEnd("fast");

//
// Find Anagrams
// For example, “cat” and “act” are anagrams, but “cat” and dog are not.
//
const findAnagrams = (w1: string, w2: string): boolean => {
    const words = [w1, w2];
    return findDuplicatesFast(words.map(x => Array.from(x).sort().toString())).length >= 1;
};
console.log(findAnagrams("cat", "act")); // yes
console.log(findAnagrams("cat", "dog")); // no