// ---------- 1. TWO NUMBER SUM ---------- //
// function twoNumberSum(array, targetSum) {
//     // Write your code here.
//     for (let i = 0; i < array.length; i ++) {
//         const num1 = array[i];

//         for (let j = i + 1; j < array.length; j++) {
//             const num2 = array[j];

//             if (num1 + num2 === targetSum) return [num1, num2];
//         }
//     }
//     return [];
// }

// BETTER SOLUTION:
function twoNumberSum(array, targetSum) {
    const checked = new Set();

    for (let num of array) {
        const neededNum = targetSum - num;

        if (checked.has(neededNum)) return [num, neededNum];
        checked.add(num);
    }

    return [];
}

// const array = [3, 5, -4, 8, 11, 1, -1, 6];
// const targetSum = 10;
// console.log(twoNumberSum(array, targetSum));


// ---------- 2. VALIDATE SUBSEQUENCE ---------- //
// function isValidSubsequence(array, sequence) {
//     // Write your code here.
//     if (sequence.length > array.length) return false;
//     if ((sequence.length === array.length) && (String(array.join('')) !== String(sequence.join('')))) return false;

//     let copyArr = array.slice(0);

//     for (let i = 0; i < sequence.length; i++) {
//         const currNum = sequence[i];
//         const currNumI = copyArr.indexOf(currNum);
//         if (currNumI === -1) return false;
//         copyArr = copyArr.slice(currNumI + 1);
//     }

//     return true;
// }

// BETTER SOLUTION:
function isValidSubsequence(array, sequence) {
    let seqI = 0;

    for (let i = 0; i < array.length; i++) {
        if (seqI === sequence.length) break;
        if (array[i] === sequence[seqI] && seqI < sequence.length) seqI++;
    }

    return seqI === sequence.length;
}

// const array = [55, 1, 22, 25, 6, -1, 8, 10];
// const sequence = [1, 6, -1, 10];
// console.log(isValidSubsequence(array, sequence));


// ---------- 3. SORTED SQUARED ARRAY ---------- //
function sortedSquaredArray(array) {
    // Write your code here.
    const newArr = [];
    array.forEach(num => {
        newArr.push(num * num);
    });
    return newArr.sort((a, b) => a - b);
}

// const array = [1, 2, 3, 5, 6, 8, 9];
// console.log(sortedSquaredArray(array));


// ---------- 4. TOURNAMENT WINNER ---------- //
function tournamentWinner(competitions, results) {
    // Write your code here.
    const totals = {};

    for (let i = 0; i < results.length; i++) {
        const home = competitions[i][0];
        const away = competitions[i][1];

        if (results[i] === 0) {
            if (totals[away]) totals[away] += 3;
            else totals[away] = 3;
        }
        if (results[i] === 1) {
            if (totals[home]) totals[home] += 3;
            else totals[home] = 3;
        }
    }

    let highestScore = 0;
    let indexOfHighestScore = 0;
    const scores = Object.values(totals);
    for (let j = 0; j < scores.length; j++) {
        const score = scores[j];

        if (score > highestScore) {
            highestScore = score;
            indexOfHighestScore = j;
        }
    }

    const teams = Object.keys(totals);

    return teams[indexOfHighestScore];
}

// const competitions = [
//     ["HTML", "C#"],
//     ["C#", "Python"],
//     ["Python", "HTML"],
// ];
// const results = [0, 0, 1];
// console.log(tournamentWinner(competitions, results));


// ---------- 5. NON-CONSTRUCTIBLE CHANGE ---------- //
function nonConstructibleChange(coins) {
    // Write your code here.
    if (coins.length === 1 && coins[0] === 1) return 2;
    if (coins.length <= 1) return 1;

    const checked = [];
    const maxTotal = (arr) => arr.reduce((prev, curr) => prev + curr, 0);
    let prevMaxTotal;
    coins.sort((a, b) => a - b);

    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        if (coin > prevMaxTotal) return prevMaxTotal;

        checked.push(coin);
        const nextMaxTotal = maxTotal(checked);
        prevMaxTotal = nextMaxTotal + 1;
    }

    return prevMaxTotal;
}
// const coins = [5, 7, 1, 1, 2, 3, 22];
// console.log(nonConstructibleChange(coins));


// ---------- 6. FIND CLOSEST VALUE IN BST ---------- //
// helper fn
function dfs(tree, target, diff) {
    if (!tree) return;

    const currDiff = Math.abs(target - tree.value);
    if (currDiff < diff.value) {
        diff.closest = tree.value;
        diff.value = currDiff;
    }

    if (target > tree.value) dfs(tree.right, target, diff);
    else if (target < tree.value) dfs(tree.left, target, diff);
    else return;
}

function findClosestValueInBst(tree, target) {
    // Write your code here.
    /*
    PSEUDOCODE:
        1. Create a variable to store the smallest absolute value difference, and actual value.
        2. Traverse through the BST with a depth-first-search to compare differences.
        3. Compare the target with each node and store the smallest absolute value difference, and actual value.
        4. Return the value with the smallest absolute value difference.
    */

    const diff = { value: Infinity, closest: null };
    dfs(tree, target, diff);
    return diff.closest;
}


// ---------- 7. BRANCH SUMS ---------- //
// BFS WITH INCORRECT ORDER:
// function branchSums(root) {
//     // Write your code here.
//     const result = [];
//     let currNode = root;
//     let branchPath = [currNode];
//     const stack = [branchPath];

//     while (stack.length) {
//         const currPath = stack.pop();
//         currNode = currPath[currPath.length - 1];
//         if (!currNode.left && !currNode.right) {
//             let sum = 0;

//             for (let node of currPath) {
//                 sum += node.value;
//             }

//             result.push(sum);
//         }

//         if (currNode.left) stack.push([ ...currPath, currNode.left ]);
//         if (currNode.right) stack.push([ ...currPath, currNode.right ]);
//     }

//     return result;
// }

// BETTER SOLUTION:
function branchSums(root, sum = 0, sums = []) {
    const currentSum = root.value + sum;

    if (!root.left && !root.right) sums.push(currentSum);

    if (root.left) branchSums(root.left, currentSum, sums);
    if (root.right) branchSums(root.right, currentSum, sums);

    return sums;
}


// ---------- 8. NODE DEPTHS ---------- //
function branchSums(root) {
    // Write your code here.
    let sum = 0;
    let currNode = root;
    let branchPath = [currNode];
    const stack = [branchPath];

    while (stack.length) {
        const currPath = stack.pop();
        const distance = currPath.length - 1;
        sum += distance;

        currNode = currPath[currPath.length - 1];

        if (currNode.left) stack.push([...currPath, currNode.left]);
        if (currNode.right) stack.push([...currPath, currNode.right]);
    }

    return sum;
}


// ---------- 9. DEPTH-FIRST SEARCH ---------- //
function depthFirstSearch(array, root = this) {
    // Write your code here.
    array.push(root.name);
    if (root.children.length) {
        root.children.forEach(child => {
            this.depthFirstSearch(array, child);
        });
    }

    return array;
}


// ---------- 10. MINIUMUM WAITING TIME ---------- //
function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b);
    let finalSum = 0;
    let prevSum = 0;

    if (queries.length <= 1) return 0;
    else if (queries.length === 2) return queries[0];

    for (let i = 0; i < queries.length - 1; i++) {
        const query = queries[i];
        prevSum += query;
        finalSum += prevSum;
    }

    return finalSum;
}


// ---------- 11. CLASS PHOTOS ---------- //
function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
    /* Psuedocode:
        1. Find max height of all students. Sort will likely help.
        2. Student with max height needs to go in back, so all with that shirt
           goes in back.
        3. Check if each student in that array has a corresponding student in
           the other array with a shorter height
    */

    redShirtHeights.sort((a, b) => a - b);
    blueShirtHeights.sort((a, b) => a - b);

    const tallestRed = redShirtHeights[redShirtHeights.length - 1];
    const tallestBlue = blueShirtHeights[blueShirtHeights.length - 1];

    if (tallestRed > tallestBlue) {
        for (let i = 0; i < redShirtHeights.length - 1; i++) {
            if (redShirtHeights[i] <= blueShirtHeights[i]) return false;
        }
    }
    else if (tallestBlue > tallestRed) {
        for (let i = 0; i < blueShirtHeights.length - 1; i++) {
            if (blueShirtHeights[i] <= redShirtHeights[i]) return false;
        }
    }
    else if (tallestBlue === tallestRed) return false;

    return true;
}


// ---------- 12. TANDEM BICYCLE ---------- //
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
    /* Pseudocode:
        1. If fastest is true, take the fastest half of both shirts combined
           and pair them with the complimentary shirt that's slower.
        2. Otherwise, just sort them both normally and pair each slightly faster
           one with a slower one.
    */
    let sum = 0;

    if (fastest) {
        redShirtSpeeds.sort((a, b) => b - a);
        blueShirtSpeeds.sort((a, b) => a - b);
    }
    else {
        redShirtSpeeds.sort((a, b) => a - b);
        blueShirtSpeeds.sort((a, b) => a - b);
    }

    for (let i = 0; i < redShirtSpeeds.length; i++) {
        redShirtSpeeds[i] > blueShirtSpeeds[i] ? sum += redShirtSpeeds[i] : sum += blueShirtSpeeds[i];
    }

    return sum;
}


// ---------- 13. REMOVE DUPLICATES FROM LINKED LISTS ---------- //
function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    if (!linkedList.next) return linkedList;
    const seen = new Set();
    let currNode = linkedList;
    let prevNode = null;

    while (currNode.next) {
        if (seen.has(currNode.value)) {
            prevNode.next = currNode.next;
        } else {
            prevNode = currNode;
            seen.add(currNode.value);
        }

        currNode = currNode.next;
    }

    if (seen.has(currNode.value)) prevNode.next = null;

    return linkedList;
}


// ---------- 14. NTH FIBONACCI ---------- //
// ---------- 15. PRODUCT SUM ---------- //
// ---------- 16. BINARY SEARCH ---------- //
// ---------- 17. FIND THREE LARGEST NUMBERS ---------- //
// ---------- 18. BUBBLE SORT ---------- //
// ---------- 19. INSERTION SORT ---------- //
// ---------- 20. SELECTION SORT ---------- //
// ---------- 21. PALINDROME CHECK ---------- //
// ---------- 22. CAESAR CIPHER ENCRYPTOR ---------- //
// ---------- 23. RUN-LENGTH ENCODING ---------- //
// ---------- 24. GENERATE DOCUMENT ---------- //
// ---------- 25. FIRST NON-REPEATING CHARACTER ---------- //
