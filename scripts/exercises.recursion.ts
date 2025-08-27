export { };

// ==============================================
// 2. RECURSION EXAMPLES
// ==============================================

// Classic Factorial
function factorial(n) {
    if (n <= 1) return 1;
    console.log("factorial");
    return n * factorial(n - 1);
}
//console.log(factorial(3)); // executes x2
//console.log(factorial(4)); // executes x3 (4 * 3 * 2 * 1)
//console.log(factorial(5)); // executes x4 (5 * 4 * 3 * 2 * 1)

// Fibonacci with basic recursion
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
//console.log(fibonacci(20));

// Tree Traversal
class TreeNode {
    val: any;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: any, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Note that this demonstrates both recursion and reference types, as the same result array is used for every subsequent traversal call
function inorderTraversal(root: TreeNode | null, result: any = []) {
    if (!root) return result;

    inorderTraversal(root.left, result);
    result.push(root.val);
    inorderTraversal(root.right, result);

    return result;
}
//console.log(inorderTraversal(new TreeNode(1, new TreeNode(2))));

// Deep clone basic
const obj = { a: 1, b: 2, c: [1, 2, 3] };
function deepClone(obj: any) {
    // Simply return anything that isn't an object
    if (obj == null || typeof obj !== "object") return obj;
    if (obj instanceof Array) return obj.map(x => deepClone(x));

    const cloned = {};
    for (let key in obj) {
        cloned[key] = deepClone(obj[key]);
    }
    return cloned;
}
//console.log(deepClone(1));
//console.log(deepClone(obj));

// Flatten Nested Array
function flattenArray(arr) {
    const results: any[] = [];

    for (let x of arr) {
        if (Array.isArray(x)) {
            results.push(...flattenArray(x));
        } else {
            results.push(x);
        }
    }
    return results;
}
//console.log(flattenArray([1, 2, 3, [4, 5]]));