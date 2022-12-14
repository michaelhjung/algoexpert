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
function getNthFib(n, memo = []) {
    // Write your code here.
    if (memo[n]) return memo[n];
    let result;
    if (n === 1) result = 0;
    else if (n <= 3) result = 1;
    else result = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);

    memo[n] = result;
    return result;
}


// ---------- 15. PRODUCT SUM ---------- //
function productSum(array, depth = 1) {
    // Write your code here.
    let sum = 0;
    if (!array.length) return sum;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") sum += array[i];
        else sum += productSum(array[i], depth + 1);
    }

    return sum * depth;
}


// ---------- 16. BINARY SEARCH ---------- //
function binarySearch(array, target, startIdx = 0) {
    // Write your code here.
    if (!array.length || (array.length === 1 && array[0] !== target)) return -1;

    const m = Math.floor(array.length / 2);
    if (array[m] === target) return startIdx + m;
    else {
        if (target > array[m]) return binarySearch(array.slice(m + 1), target, startIdx + (m + 1));
        else return binarySearch(array.slice(0, m), target, startIdx);
    }
}
// // ALTERNATIVE SOLUTION:
// function binarySearch(array, target) {
//     let left = 0;
//     let right = array.length - 1;
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (array[mid] === target) return mid;
//         else if (array[mid] < target) left = mid + 1;
//         else right = mid - 1;
//     }

//     return -1;
// }


// ---------- 17. FIND THREE LARGEST NUMBERS ---------- //
function findThreeLargestNumbers(array) {
    // Write your code here.
    const first = Math.max(...array);
    array.splice(array.indexOf(first), 1);
    const second = Math.max(...array);
    array.splice(array.indexOf(second), 1);
    const third = Math.max(...array);
    array.splice(array.indexOf(third), 1);

    return [third, second, first];
}


// ---------- 18. BUBBLE SORT ---------- //
function bubbleSort(array) {
    // Write your code here.
    if (array.length === 1) return array;
    let alreadySorted = 0;

    for (let i = 0; i < array.length; i++) {
        let curr = array[i];
        let next = array[i + 1];

        if (curr > next) {
            array[i] = next;
            array[i + 1] = curr;
        }
        else alreadySorted++;

        if (i === array.length - 2) {
            if (alreadySorted === array.length - 1) return array;
            i = -1;
            alreadySorted = 0;
        }
    }
}


// ---------- 19. INSERTION SORT ---------- //
function insertionSort(array) {
    // Write your code here.
    for (let i = 1; i < array.length; i++) {
        let pointer = i;
        let curr = array[pointer];
        let left = i - 1;

        while (curr < array[left] && (left >= 0)) {
            let tmp = curr;
            array[pointer] = array[left];
            array[left] = tmp;
            left--;
            pointer--;
        }
    }

    return array;
}


// ---------- 20. SELECTION SORT ---------- //
function selectionSort(array) {
    // Write your code here.
    for (let i = 0; i < array.length; i++) {
        let min = array[i];
        let newMinIndex;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j];
                newMinIndex = j;
            }
        }

        if (min !== array[i]) {
            let tmp = array[i];
            array[i] = min;
            array[newMinIndex] = tmp;
        }
    }

    return array;
}


// ---------- 21. PALINDROME CHECK ---------- //
// function isPalindrome(string) {
//     // Write your code here.
//     let reverseString = string.slice(0).split('').reverse().join('');

//     if (reverseString === string) return true;
//     else return false;
// }
// WITHOUT BUILT IN METHODS:
function isPalindrome(string) {
    // Write your code here.
    let pointer = string.length - 1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[pointer]) return false;
        else pointer--;
    }

    return true;
}


// ---------- 22. CAESAR CIPHER ENCRYPTOR ---------- //
function caesarCipherEncryptor(string, key) {
    // Write your code here.
    const alphas = "abcdefghijklmnopqrstuvwxyz";
    let translated = "";

    for (let i = 0; i < string.length; i++) {
        const alphaIndex = (alphas.indexOf(string[i]) + key) % 26;
        translated += alphas[alphaIndex];
    }

    return translated;
}


// ---------- 23. RUN-LENGTH ENCODING ---------- //
function runLengthEncoding(string) {
    // Write your code here.
    let translation = "";
    let currLetter = string[0];
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === currLetter && count < 9) {
            count++;
        } else {
            translation += `${count.toString()}${currLetter}`;
            currLetter = string[i];
            count = 1;
        }

        if (i === string.length - 1) {
            translation += `${count.toString()}${currLetter}`;
        }
    }

    return translation;
}


// ---------- 24. GENERATE DOCUMENT ---------- //
function generateDocument(characters, document) {
    // Write your code here.
    if (!document) return true;

    const charGiven = {};
    const charNeeded = {};

    characters.split('').forEach(char => {
        if (!charGiven[char]) charGiven[char] = 1;
        else charGiven[char]++;
    });

    document.split('').forEach(char => {
        if (!charNeeded[char]) charNeeded[char] = 1;
        else charNeeded[char]++;
    });

    for (let char in charNeeded) {
        if (charGiven[char] < charNeeded[char] || !charGiven[char]) return false;
    }

    return true;
}


// ---------- 25. FIRST NON-REPEATING CHARACTER ---------- //
function firstNonRepeatingCharacter(string) {
    // Write your code here.
    let charCounts = {};

    for (let i = 0; i < string.length; i++) {
        if (!charCounts[string[i]]) charCounts[string[i]] = 1;
        else charCounts[string[i]]++;
    }

    // for (let char in charCounts) {
    //     if (charCounts[char] === 1) return string.indexOf(char);
    // }
    // OR:
    for (let j = 0; j < string.length; j++) {
        if (charCounts[string[j]] === 1) return j;
    }

    return -1;
}


// ---------- 26. SEMORDNILAP ---------- //
function semordnilap(words) {
    // Write your code here.
    const set = new Set();
    const res = [];
    for (let word of words) {
        const reverse = word.split('').reverse().join('');
        if (set.has(reverse)) res.push([word, reverse]);
        set.add(word);
    }
    return res;
}
