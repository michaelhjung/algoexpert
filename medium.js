// ---------- 1. THREE NUMBER SUM ---------- //
// BRUTE FORCE METHOD:
function threeNumberSum(array, targetSum) {
    // Write your code here.
    array.sort((a, b) => a - b);
    const queue = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            for (let k = j + 1; k < array.length; k++) {
                if (array[i] + array[j] + array[k] === targetSum) {
                    queue.push([array[i], array[j], array[k]]);
                }
            }
        }
    }
    return queue;
}
// ---------- 2. SMALLEST DIFFERENCE ---------- //
// BRUTE FORCE METHOD:
function smallestDifference(arrayOne, arrayTwo) {
    const smallestDistance = {
        v1: arrayOne[0],
        v2: arrayTwo[0],
        distance: Math.abs(arrayOne[0] - arrayTwo[0])
    }

    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            if (Math.abs(arrayOne[i] - arrayTwo[j]) < smallestDistance.distance) {
                smallestDistance.v1 = arrayOne[i];
                smallestDistance.v2 = arrayTwo[j];
                smallestDistance.distance = Math.abs(arrayOne[i] - arrayTwo[j]);
            }
        }
    }

    return [smallestDistance.v1, smallestDistance.v2];
}
// ---------- 3. MOVE ELEMENT TO END ---------- //
// BRUTE FORCE METHOD:
function moveElementToEnd(array, toMove) {
    array.sort();
    let startSpliceI;
    let numToSplice = 1;
    for (let i = 0; i < array.length; i++) {
        if ((startSpliceI || startSpliceI === 0) && array[i] === toMove) numToSplice++;
        else if ((!startSpliceI && startSpliceI !== 0) && array[i] === toMove) startSpliceI = i;
        else if ((startSpliceI || startSpliceI === 0) && array[i] !== toMove) {
            const spliced = array.splice(startSpliceI, numToSplice);
            array.push(...spliced);
            break;
        }
    }

    return array;
}
// ---------- 4. MONOTONIC ARRAY ---------- //
function isMonotonic(array) {
    // Write your code here.
    let increaseCount = 0;
    let decreaseCount = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) increaseCount++;
        else if (array[i] < array[i - 1]) decreaseCount++;
    }

    if (increaseCount === 0 || decreaseCount === 0) return true;
    else return false;
}
// ---------- 5. SPIRAL TRAVERSE ---------- //
function spiralTraverse(array) {
    // Write your code here.
    const result = [];

    let top = 0;
    let bottom = array.length - 1;
    let left = 0;
    let right = array[0].length - 1;

    while (top <= bottom && left <= right) {
        // push all top row
        for (let col = left; col <= right; col++) {
            result.push(array[top][col]);
        }
        if (top === bottom) break;

        // push all right column
        for (let row = top + 1; row <= bottom; row++) {
            result.push(array[row][right]);
        }
        if (left === right) break;

        // push all bottom row
        for (let col = right - 1; col >= left; col--) {
            result.push(array[bottom][col]);
        }

        // push all left column
        for (let row = bottom - 1; row > top; row--) {
            result.push(array[row][left]);
        }

        top++;
        bottom--;
        left++;
        right--;
    }

    return result;
}
// ---------- 6. LONGEST PEAK ---------- //
// BRUTE FORCE METHOD:
function longestPeak(array) {
    // Write your code here.
    let longest = [];
    for (let i = 1; i < array.length - 1; i++) {
        let left = array[i - 1];
        let curr = array[i];
        let right = array[i + 1];

        if (curr > left && curr > right) {
            let leftValley = [];
            let leftTmp = array[i - 1];
            for (let j = i - 2; j >= 0; j--) {
                if (array[j] >= leftTmp) break;
                else {
                    leftValley.push(array[j]);
                    leftTmp = array[j];
                }
            }

            let rightValley = [];
            let rightTmp = array[i + 1];
            for (let k = i + 2; k < array.length; k++) {
                if (array[k] >= rightTmp) break;
                else {
                    rightValley.push(array[k]);
                    rightTmp = array[k];
                }
            }

            const potPeak = [...leftValley, left, curr, right, ...rightValley];
            if (potPeak.length > longest.length) longest = [...potPeak];
        }
    }

    return longest.length;
}
// ---------- 7. ARRAY OF PRODUCTS ---------- //
function arrayOfProducts(array) {
    // Write your code here.
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const prod = array.reduce((acc, curr, index) => index !== i ? acc * curr : acc, 1);
        result.push(prod);
    }
    return result;
}
// ---------- 8. FIRST DUPLICATE VALUE ---------- //
function firstDuplicateValue(array) {
    // Write your code here.
    const seen = new Set();
    for (let el of array) {
        if (seen.has(el)) return el;
        seen.add(el);
    }

    return -1;
}
// ---------- 9. MERGE OVERLAPPING INTERVALS ---------- //
function mergeOverlappingIntervals(array) {
    // Write your code here.
    array.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < array.length; i++) {
        const currSubArr = array[i];
        let nextSubArr = array[i + 1];

        while (nextSubArr && nextSubArr[0] <= currSubArr[1]) {
            currSubArr[0] = Math.min(nextSubArr[0], currSubArr[0]);
            currSubArr[1] = Math.max(nextSubArr[1], currSubArr[1]);
            array.splice(i + 1, 1);
            nextSubArr = array[i + 1];
        }
    }

    return array;
}
// ---------- 10. ZERO SUM SUBARRAY ---------- //
// function zeroSumSubarray(nums) {
//     // Write your code here.
//     const hashmap = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) return true;
//         let hasZero = false;
//         Object.keys(hashmap).forEach(key => {
//             hashmap[key] += nums[i];
//             if (hashmap[key] === 0) hasZero = true;
//         });
//         if (hasZero) return true;

//         hashmap[i] = nums[i];
//     }
//     if (hashmap[nums.length - 1] === 0) return true;
//     return false;
// }
// FASTER SOLUTION:
function zeroSumSubarray(nums) {
    let sum = 0;
    const set = new Set();
    for (let num of nums) {
        sum += num;
        if (num === 0 || sum === 0 || set.has(sum)) return true;
        set.add(sum);
    }
    return false;
}
// ---------- 11. BST CONSTRUCTION ---------- //
// ---------- 12. VALIDATE BST ---------- //
function validateBst(root, min = -Infinity, max = Infinity) {
    // Write your code here.
    if (!root) return true;
    if (root.value < min || root.value >= max) return false;
    return validateBst(root.left, min, root.value) && validateBst(root.right, root.value, max);
}
// ---------- 13. BST TRAVERSAL ---------- //
function inOrderTraverse(tree, array) {
    // Write your code here.
    if (!tree) return;
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
    return array;
}

function preOrderTraverse(tree, array) {
    // Write your code here.
    if (!tree) return;
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
    return array;
}

function postOrderTraverse(tree, array) {
    // Write your code here.
    if (!tree) return;
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
    return array;
}
// ---------- 14. MIN HEIGHT BST ---------- //
function minHeightBst(array) {
    // Write your code here.
    if (!array.length) return null;
    const mid = Math.floor(array.length / 2);
    const head = new BST(array[mid]);
    head.left = (minHeightBst(array.slice(0, mid)));
    head.right = (minHeightBst(array.slice(mid + 1)));

    return head;
}
// ---------- 15. FIND KTH LARGEST VALUE IN BST ---------- //
function findKthLargestValueInBst(tree, k) {
    // Write your code here.
    let visited = { count: 0, value: null };

    const reverseInOrder = (tree, k, visited) => {
        if (!tree || visited.count >= k) return null;
        reverseInOrder(tree.right, k, visited);
        if (visited.count < k) {
            visited.count++;
            visited.value = tree.value;
            reverseInOrder(tree.left, k, visited);
        }
    }
    reverseInOrder(tree, k, visited);

    return visited.value;
}
// ---------- 16. RECONSTRUCT BST ---------- //
// ---------- 17. INVERT BINARY TREE ---------- //
// ---------- 18. BINARY TREE DIAMETER ---------- //
// ---------- 19. FIND SUCCESSOR ---------- //
// ---------- 20. HEIGHT BALANCED BINARY TREE ---------- //
// ---------- 21. MERGE BINARY TREES ---------- //
// ---------- 22. SYMMETRICAL TREE ---------- //
// ---------- 23. MAX SUBSET SUM NO ADJACENT ---------- //
// ---------- 24. NUMBER OF WAYS TO MAKE CHANGE ---------- //
function numberOfWaysToMakeChange(n, denoms) {
    // Write your code here.
    const ways = new Array(n + 1).fill(0);
    ways[0] = 1;
    for (let denom of denoms) {
        for (let i = 1; i < ways.length; i++) {
            if (i >= denom) ways[i] += ways[i - denom];
        }
    }
    return ways[n];
}
// ---------- 25. MIN NUMBER OF COINS FOR CHANGE ---------- //
// BRUTE FORCE METHOD:
// function minNumberOfCoinsForChange(n, denoms) {
//     if (n === 0) return 0;
//     const queue = [];
//     denoms.forEach(d => queue.push(n));
//     let count = 0;
//     while (queue.length) {
//         let currLength = queue.length;
//         ++count;
//         for (let i = 0; i < currLength; i++) {
//             const num = queue.shift();
//             for (let j = 0; j < denoms.length; j++) {
//                 if (num - denoms[j] > 0) queue.push(num - denoms[j]);
//                 else if (num - denoms[j] === 0) return count;
//             }
//         }
//     }
//     return -1;
// }
function minNumberOfCoinsForChange(n, denoms) {
    // Write your code here.
    const table = new Array(n + 1).fill(Infinity);
    table[0] = 0;
    for (let coin of denoms) {
        for (let amt = 1; amt < table.length; amt++) {
            if (coin <= amt) table[amt] = Math.min(table[amt], table[amt - coin] + 1);
        }
    }
    return table[n] === Infinity ? -1 : table[n];
}
// ---------- 26. LEVENSHTEIN DISTANCE ---------- //
// ---------- 27. NUMBER OF WAYS TO TRAVERSE GRAPH ---------- //
function numberOfWaysToTraverseGraph(width, height, memo = {}) {
    // Write your code here.
    const key = `${width},${height}`;
    if (key in memo) return memo[key];
    if (width === 0 || height === 0) return 0;
    if (width === 1 || height === 1) return 1;

    memo[key] = numberOfWaysToTraverseGraph(width - 1, height, memo) + numberOfWaysToTraverseGraph(width, height - 1, memo);
    return memo[key];
}
// ---------- 28. KADANE'S ALGORITHM ---------- //
// ---------- 29. STABLE INTERNSHIPS ---------- //
// ---------- 30. UNION FIND ---------- //
// ---------- 31. SINGLE CYCLE CHECK ---------- //
function hasSingleCycle(array) {
    // Write your code here.
    const seen = new Set();
    for (let i = 0; i < array.length; i += 0) {
        if (seen.has(i) || seen.size === array.length) {
            if (i !== 0) return false;
            break;
        }
        seen.add(i);
        const nextI = (i + array[i]) % array.length;
        i = nextI >= 0 ? nextI : array.length + nextI;
    }

    return seen.size === array.length;
}
// ---------- 32. BREADTH-FIRST SEARCH ---------- //
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array) {
        // Write your code here.
        const queue = [this];
        while (queue.length) {
            const qLen = queue.length;
            for (let i = 0; i < qLen; i++) {
                const node = queue.shift();
                array.push(node.name);
                queue.push(...node.children);
            }
        }
        return array;
    }
}
// ---------- 33. RIVER SIZES ---------- //
// helper:
const findNeighbors = (matrix, node) => {
    const [row, col] = node;
    const neighbors = [];

    // up
    if (row > 0 && matrix[row - 1][col] === 1) neighbors.push([row - 1, col]);
    // down
    if (row < matrix.length - 1 && matrix[row + 1][col] === 1) neighbors.push([row + 1, col]);
    // left
    if (col > 0 && matrix[row][col - 1] === 1) neighbors.push([row, col - 1]);
    // right
    if (col < matrix[0].length - 1 && matrix[row][col + 1] === 1) neighbors.push([row, col + 1]);

    return neighbors;
}
function riverSizes(matrix) {
    // Write your code here.
    const counts = [];
    const seen = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let startNode = [i, j];
            if (!seen.has(startNode.toString()) && matrix[i][j] === 1) {
                seen.add(startNode.toString());
                const stack = [[startNode]];
                let count = 0;
                while (stack.length) {
                    const currPath = stack.pop();
                    count++;
                    const lastNode = currPath[currPath.length - 1];
                    const neighbors = findNeighbors(matrix, lastNode);
                    neighbors.forEach(neighbor => {
                        const copyPath = currPath.slice(0);
                        if (!seen.has(neighbor.toString())) {
                            copyPath.push(neighbor);
                            stack.push(copyPath);
                            seen.add(neighbor.toString());
                        }
                    });
                }
                counts.push(count);
            }
        }
    }
    return counts;
}
// ---------- 34. YOUNGEST COMMON ANCESTOR ---------- //
// ---------- 35. REMOVE ISLANDS ---------- //
function removeIslands(matrix) {
    // Write your code here.
    const seen = new Set();
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            // for all on border:
            if (row === 0 || row === matrix.length - 1 || col === 0 || col === matrix[row].length - 1) {
                if (matrix[row][col] === 1 && !seen.has([row, col].toString())) {
                    const stack = [[row, col]];
                    while (stack.length) {
                        const node = stack.pop();
                        const [r, c] = node;
                        seen.add(node.toString());
                        matrix[r][c] = 2;

                        if (r + 1 <= matrix.length - 1 && !seen.has([r + 1, c].toString()) && matrix[r + 1][c] === 1) stack.push([r + 1, c]);
                        if (r - 1 >= 0 && !seen.has([r - 1, c].toString()) && matrix[r - 1][c] === 1) stack.push([r - 1, c]);
                        if (c + 1 <= matrix[r].length - 1 && !seen.has([r, c + 1].toString()) && matrix[r][c + 1] === 1) stack.push([r, c + 1]);
                        if (c - 1 >= 0 && !seen.has([r, c - 1].toString()) && matrix[r][c - 1] === 1) stack.push([r, c - 1]);
                    }
                }
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 1) matrix[row][col] = 0;
            if (matrix[row][col] === 2) matrix[row][col] = 1;
        }
    }

    return matrix;
}
// ---------- 36. CYCLE IN GRAPH ---------- //
// ---------- 37. MINIMUM PASSES OF MATRIX ---------- //
// ---------- 38. TWO COLORABLE ---------- //
// ---------- 39. TASK ASSIGNMENT ---------- //
function taskAssignment(k, tasks) {
    // Write your code here.
    const sortedTasks = tasks.map((val, idx) => ({ val, idx })).sort((a, b) => a.val - b.val);
    const res = [];

    let l = 0, r = sortedTasks.length - 1;
    while (l < r) {
        res.push([sortedTasks[l].idx, sortedTasks[r].idx]);
        l++;
        r--;
    }

    return res;
}
// ---------- 40. VALID STARTING CITY ---------- //
function validStartingCity(distances, fuel, mpg) {
    // Write your code here.
    for (let i = 0; i < fuel.length; i++) {
        fuel[i] *= mpg;
    }

    for (i = 0; i < distances.length; i++) {
        let distanceLeft = fuel[i];
        const map = i > 0 ? [...distances.slice(i), ...distances.slice(0, i)] : [...distances];
        for (let j = 0; j < map.length; j++) {
            if (j !== 0) distanceLeft += fuel[(i + j) % distances.length];
            distanceLeft -= distances[(i + j) % distances.length];
            if (distanceLeft < 0) break;
        }
        if (distanceLeft >= 0) return i;
    }
}
// ---------- 41. MIN HEAP CONSTRUCTION ---------- //
// ---------- 42. LINKED LIST CONSTRUCTION ---------- //
// ---------- 43. REMOVE KTH NODE FROM END ---------- //
function removeKthNodeFromEnd(head, k) {
    // Write your code here.
    let size = 0;
    let curr = head;
    while (curr) {
        size++;
        curr = curr.next;
    }

    let n = size - k;
    if (n === 0) {
        head.value = head.next.value;
        head.next = head.next.next;
    } else {
        curr = head;
        prev = null;
        while (n > 0) {
            prev = curr;
            curr = curr.next;
            n--;
        }
        prev.next = curr.next;
    }
}
// ---------- 44. SUM OF LINKED LISTS ---------- //
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    // Write your code here.
    let dig1 = [];
    let dig2 = [];

    let node1 = linkedListOne;
    let node2 = linkedListTwo;
    while (node1) {
        dig1.push(node1.value);
        node1 = node1.next;
    }
    while (node2) {
        dig2.push(node2.value);
        node2 = node2.next;
    }

    const sumNum = Number(dig1.reverse().join('')) + Number(dig2.reverse().join(''));
    const sumStr = sumNum.toString();

    const head = new LinkedList(Number(sumStr[sumStr.length - 1]));
    let curr = head;
    for (let i = sumStr.length - 2; i >= 0; i--) {
        curr.next = new LinkedList(Number(sumStr[i]));
        curr = curr.next;
    }

    return head;
}
// ---------- 45. MERGING LINKED LISTS ---------- //
function mergingLinkedLists(headA, headB) {
    const set = new Set();
    while (headA) {
        set.add(headA);
        headA = headA.next;
    }
    while (headB) {
        if (set.has(headB)) return headB;
        headB = headB.next;
    }
    return null;
}
// ---------- 46. PERMUTATIONS ---------- //
// ---------- 47. POWERSET ---------- //
function powerset(array) {
    // Write your code here.
    const result = [];
    const stack = [array];
    const seen = new Set();

    while (stack.length) {
        const curr = stack.pop();
        seen.add(curr.toString());
        result.push(curr);
        for (let i = 0; i < curr.length; i++) {
            const copyCurr = curr.slice(0);
            copyCurr.splice(i, 1);
            if (!seen.has(copyCurr.toString())) stack.push(copyCurr);
        }
    }

    return result;
}
// ---------- 48. PHONE NUMBER MNEMONICS ---------- //
// ---------- 49. STAIRCASE TRAVERSAL ---------- //
// ---------- 50. SEARCH IN SORTED MATRIX ---------- //
// ---------- 51. THREE NUMBER SORT ---------- //
function threeNumberSort(array, order) {
    // Write your code here.
    // WITHOUT ACCOUNTING FOR SPACE COMPLEXITY:
    // const first = [];
    // const middle = [];
    // const last = [];
    // for (let num of array) {
    //     if (num === order[0]) first.push(num);
    //     else if (num === order[1]) middle.push(num);
    //     else if (num === order[2]) last.push(num);
    // }
    // array = [...first, ...middle, ...last];
    // return array;


    // SPACE COMPLEXITY O(1):
    // let pointer = 0;
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] === order[0]) {
    //         // swap;
    //         let tmp = array[pointer];
    //         array[pointer] = order[0];
    //         array[i] = tmp;
    //         pointer++;
    //     }
    // }
    // pointer = array.length - 1;
    // for (let i = array.length - 1; i >= 0; i--) {
    //     if (array[i] === order[2]) {
    //         // swap;
    //         let tmp = array[pointer];
    //         array[pointer] = order[2];
    //         array[i] = tmp;
    //         pointer--;
    //     }
    // }
    // return array;


    // MORE OPTIMIZED:
    let first = 0, second = 0, third = array.length - 1;
    while (second <= third) {
        if (array[second] === order[0]) {
            let tmp = array[first];
            array[first] = array[second];
            array[second] = tmp;
            first++;
            second++;
        } else if (array[second] === order[2]) {
            let tmp = array[third];
            array[third] = array[second];
            array[second] = tmp;
            third--;
        } else {
            second++;
        }
    }
    return array;
}
// ---------- 52. MIN MAX STACK CONSTRUCTION ---------- //
class MinMaxStack {
    constructor() {
        this.stack = [];
    }

    peek() {
        // Write your code here.
        return this.stack[this.stack.length - 1].val;
    }

    pop() {
        // Write your code here.
        return this.stack.pop().val;
    }

    push(number) {
        // Write your code here.
        const min = this.stack[this.stack.length - 1] ? Math.min(number, this.stack[this.stack.length - 1].min) : number;
        const max = this.stack[this.stack.length - 1] ? Math.max(number, this.stack[this.stack.length - 1].max) : number;
        this.stack.push({ val: number, min: min, max: max });
    }

    getMin() {
        // Write your code here.
        return this.stack[this.stack.length - 1].min;
    }

    getMax() {
        // Write your code here.
        return this.stack[this.stack.length - 1].max;
    }
}
// ---------- 53. BALANCED BRACKETS ---------- //
function balancedBrackets(string) {
    // Write your code here.
    const brackets = {
        "}": "{",
        "]": "[",
        ")": "("
    }
    const stack = [];
    for (let b of string) {
        const top = stack[stack.length - 1];
        if (b in brackets && brackets[b] === top) stack.pop();
        else if (b in brackets && brackets[b] !== top) return false;
        else if (b === "{" || b === "[" || b === "(") stack.push(b);
    }
    console.log(stack);
    return stack.length === 0
}
// ---------- 54. SUNSET VIEWS ---------- //
function sunsetViews(buildings, direction) {
    // Write your code here.
    if (!buildings.length) return [];
    const result = direction === "EAST" ? [] : [0];

    for (let i = direction === "EAST" ? 0 : 1; direction === "EAST" ? i < buildings.length - 1 : i < buildings.length; i++) {
        let curr = buildings[i];
        let max;
        if (direction === "EAST") max = Math.max(...buildings.slice(i + 1));
        else max = Math.max(...buildings.slice(0, i));
        if (max < curr) result.push(i);
    }
    direction === "EAST" ? result.push(buildings.length - 1) : null;

    return result;
}
// ---------- 55. SORT STACK ---------- //
function sortStack(stack) {
    // Write your code here.
    if (!stack.length) return stack;
    const top = stack.pop();
    sortStack(stack);
    insertInSortedOrder(stack, top);
    function insertInSortedOrder(stack, value) {
        if (!stack.length || stack[stack.length - 1] <= value) {
            stack.push(value);
            return;
        }

        const top = stack.pop();
        insertInSortedOrder(stack, value);
        stack.push(top);
    }
    return stack;
}
// ---------- 56. NEXT GREATER ELEMENT ---------- //
function nextGreaterElement(array) {
    // Write your code here.
    const res = new Array(array.length).fill(-1);
    const stack = [];
    for (let i = 2 * (array.length - 1); i >= 0; i--) {
        circularIdx = i % array.length;
        while (stack.length) {
            if (stack[stack.length - 1] <= array[circularIdx]) stack.pop();
            else {
                res[circularIdx] = stack[stack.length - 1];
                break;
            }
        }
        stack.push(array[circularIdx]);
    }
    return res;
}
// ---------- 57. LONGEST PALINDROMIC SUBSTRING ---------- //
function longestPalindromicSubstring(string) {
    // Write your code here.
    if (string === string.slice(0).split("").reverse().join("") || string.length === 1) return string;

    let maxPal = "";
    for (let i = 0; i < string.length; i++) {
        const prevChar = string[i - 1];
        const currChar = string[i];
        const nextChar = string[i + 1];
        const nextNextChar = string[i + 2];
        let currPal = prevChar === currChar && currChar === nextChar && nextChar !== nextNextChar ? `${prevChar}${currChar}${nextChar}` : currChar === nextChar ? `${currChar}${nextChar}` : currChar;
        let leftPointer = currPal.length === 3 ? i - 2 : i - 1;
        let rightPointer = currPal.length >= 2 ? i + 2 : i + 1;
        while (leftPointer >= 0 && rightPointer <= string.length - 1 && string[leftPointer] === string[rightPointer]) {
            currPal = string[leftPointer] + currPal + string[rightPointer];
            leftPointer--;
            rightPointer++;
        }
        if (currPal.length > maxPal.length) maxPal = currPal;
    }

    return maxPal;
}

// ---------- 58. GROUP ANAGRAMS ---------- //
function groupAnagrams(words) {
    // Write your code here.
    const allAnagrams = {};
    for (let word of words) {
        let sortedWord = word.split('').sort().join('');
        if (allAnagrams[sortedWord]) allAnagrams[sortedWord].push(word);
        else allAnagrams[sortedWord] = [word];
    }
    return Object.values(allAnagrams);
}
// ---------- 59. VALID IP ADDRESSES ---------- //
const isValidPart = (string) => {
    if (string.length > 3 || string.length < 1) return false;
    if (string.length >= 2 && string[0] === "0") return false;
    if (Number(string) > 255) return false;

    return true;
}

function validIPAddresses(string) {
    // Write your code here.
    if (string.length < 4 || string.length > 12) return [];
    if (string.length === 4) return [`${string[0]}.${string[1]}.${string[2]}.${string[3]}`];
    const result = [];

    for (let i = 1; i < 4; i++) {
        let currentIPParts = ['', '', '', ''];
        currentIPParts[0] = string.slice(0, i);
        if (!isValidPart(currentIPParts[0])) continue;

        for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
            currentIPParts[1] = string.slice(i, j);
            if (!isValidPart(currentIPParts[1])) continue;

            for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
                currentIPParts[2] = string.slice(j, k);
                currentIPParts[3] = string.slice(k);
                if (isValidPart(currentIPParts[2]) && isValidPart(currentIPParts[3])) {
                    result.push(currentIPParts.join('.'));
                }
            }
        }
    }

    return result;
}
// ---------- 60. REVERSE WORDS IN STRING ---------- //
function reverseWordsInString(string) {
    // Write your code here.
    const newSentence = [];
    let start = 0;
    for (let i = 0; i <= string.length; i++) {
        if (i === string.length) {
            const word = string.slice(start, i);
            newSentence.unshift(word);
            return newSentence.join('');
        }
        if (string[i] === " ") {
            const word = string.slice(start, i);
            newSentence.unshift(word);
            start = i + 1;
            newSentence.unshift(" ");
        }
    }

    return newSentence.join('');
}
// ---------- 61. MINIMUM CHARACTERS FOR WORDS ---------- //
function minimumCharactersForWords(words) {
    // Write your code here.
    const allNeededChar = {};
    for (let word of words) {
        const wordCharCount = {};
        for (let letter of word) {
            if (wordCharCount[letter]) wordCharCount[letter]++;
            else wordCharCount[letter] = 1;
        }
        const wordCharCountArr = Object.entries(wordCharCount);
        wordCharCountArr.forEach(entry => {
            if (allNeededChar[entry[0]] && entry[1] > allNeededChar[entry[0]]) allNeededChar[entry[0]] = entry[1];
            else if (!allNeededChar[entry[0]]) allNeededChar[entry[0]] = entry[1];
        });
    }

    const result = [];
    Object.entries(allNeededChar).forEach(entry => {
        for (let i = 0; i < entry[1]; i++) {
            result.push(entry[0]);
        }
    });

    return result;
}
// ---------- 62. ONE EDIT ---------- //
// ---------- 63. SUFFIX TRIE CONSTRUCTION ---------- //
