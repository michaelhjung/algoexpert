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
// ---------- 8. NODE DEPTHS ---------- //
// ---------- 9. DEPTH-FIRST SEARCH ---------- //
// ---------- 10. MINIUMUM WAITING TIME ---------- //
// ---------- 11. CLASS PHOTOS ---------- //
// ---------- 12. TANDEM BICYCLE ---------- //
// ---------- 13. REMOVE DUPLICATES FROM LINKED LISTS ---------- //
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
