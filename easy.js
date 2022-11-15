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

const array = [55, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];
console.log(isValidSubsequence(array, sequence));


// ---------- 3. SORTED SQUARED ARRAY ---------- //
// ---------- 4. TOURNAMENT WINNER ---------- //
// ---------- 5. NON-CONSTRUCTIBLE CHANGE ---------- //
// ---------- 6. FIND CLOSEST VALUE IN BST ---------- //
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