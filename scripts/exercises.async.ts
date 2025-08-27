export { };

// ==============================================
// 1. ASYNCHRONOUS PROGRAMMING
// ==============================================

function test(id: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 1) {
                resolve({ id });
            }
            else {
                reject(new Error("id 1 or less"));
            }
        }, 1000);
    });
}

/*
try {
    const id = await test(1);
    console.log(id)
} catch (e) {
    console.log("error: " + e);
}
*/

// Concurrent exection
const users = await Promise.all([test(2), test(3)]);
//console.log(users);

// For handling mixed results
const mixed = await Promise.allSettled([test(1), test(3)])
//console.log(mixed.filter(x => x.status === "fulfilled"));
//console.log(mixed);

function demonstrateEventLoop() {
    console.log('1: Synchronous');

    setTimeout(() => console.log('2: setTimeout (macrotask)'), 0);

    Promise.resolve().then(() => console.log('3: Promise (microtask)'));

    console.log('4: Synchronous');

    // Output: 1, 4, 3, 2
}
//demonstrateEventLoop();