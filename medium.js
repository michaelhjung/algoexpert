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
// ---------- 5. SPIRAL TRAVERSE ---------- //
// ---------- 6. LONGEST PEAK ---------- //
// ---------- 7. ARRAY OF PRODUCTS ---------- //
// ---------- 8. FIRST DUPLICATE VALUE ---------- //
// ---------- 9. MERGE OVERLAPPING INTERVALS ---------- //
// ---------- 10. BST CONSTRUCTION ---------- //
// ---------- 11. VALIDATE BST ---------- //
// ---------- 12. BST TRAVERSAL ---------- //
// ---------- 13. MIN HEIGHT BST ---------- //
// ---------- 14. FIND KTH LARGEST VALUE IN BST ---------- //
// ---------- 15. RECONSTRUCT BST ---------- //
// ---------- 16. INVERT BINARY TREE ---------- //
// ---------- 17. BINARY TREE DIAMETER ---------- //
// ---------- 18. FIND SUCCESSOR ---------- //
// ---------- 19. HEIGHT BALANCED BINARY TREE ---------- //
// ---------- 20. MAX SUBSET SUM NO ADJACENT ---------- //
// ---------- 21. NUMBER OF WAYS TO MAKE CHANGE ---------- //
// ---------- 22. MIN NUMBER OF COINS FOR CHANGE ---------- //
// BRUTE FORCE METHOD:
function minNumberOfCoinsForChange(n, denoms) {
    if (n === 0) return 0;
    const queue = [];
    denoms.forEach(d => queue.push(n));
    let count = 0;
    while (queue.length) {
        let currLength = queue.length;
        ++count;
        for (let i = 0; i < currLength; i++) {
            const num = queue.shift();
            for (let j = 0; j < denoms.length; j++) {
                if (num - denoms[j] > 0) queue.push(num - denoms[j]);
                else if (num - denoms[j] === 0) return count;
            }
        }
    }
    return -1;
}
// ---------- 23. LEVENSHTEIN DISTANCE ---------- //
// ---------- 24. NUMBER OF WAYS TO TRAVERSE GRAPH ---------- //
// ---------- 25. KADANE'S ALGORITHM ---------- //
// ---------- 26. SINGLE CYCLE CHECK ---------- //
// ---------- 27. BREADTH-FIRST SEARCH ---------- //
// ---------- 28. RIVER SIZES ---------- //
// ---------- 29. YOUNGEST COMMON ANCESTOR ---------- //
// ---------- 30. REMOVE ISLANDS ---------- //
// ---------- 31. CYCLE IN GRAPH ---------- //
// ---------- 32. MINIMUM PASSES OF MATRIX ---------- //
// ---------- 33. TASK ASSIGNMENT ---------- //
// ---------- 34. VALID STARTING CITY ---------- //
// ---------- 35. MIN HEAP CONSTRUCTION ---------- //
// ---------- 36. LINKED LIST CONSTRUCTION ---------- //
// ---------- 37. REMOVE KTH NODE FROM END ---------- //
// ---------- 38. SUM OF LINKED LISTS ---------- //
// ---------- 39. PERMUTATIONS ---------- //
// ---------- 40. POWERSET ---------- //
// ---------- 41. PHONE NUMBER MNEMONICS ---------- //
// ---------- 42. STAIRCASE TRAVERSAL ---------- //
// ---------- 43. SEARCH IN SORTED MATRIX ---------- //
// ---------- 44. THREE NUMBER SORT ---------- //
// ---------- 45. MIN MAX STACK CONSTRUCTION ---------- //
// ---------- 46. BALANCED BRACKETS ---------- //
// ---------- 47. SUNSET VIEWS ---------- //
// ---------- 48. SORT STACK ---------- //
// ---------- 49. NEXT GREATER ELEMENT ---------- //
// ---------- 50. LONGEST PALINDROMIC SUBSTRING ---------- //
// ---------- 51. GROUP ANAGRAMS ---------- //
// ---------- 52. VALID IP ADDRESSES ---------- //
// ---------- 53. REVERSE WORDS IN STRING ---------- //
// ---------- 54. MINIMUM CHARACTERS FOR WORDS ---------- //
// ---------- 55. SUFFIX TRIE CONSTRUCTION ---------- //
