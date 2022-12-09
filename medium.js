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
// ---------- 29. YOUNGEST COMMON ANCESTOR ---------- //
// ---------- 30. REMOVE ISLANDS ---------- //
// ---------- 31. CYCLE IN GRAPH ---------- //
// ---------- 32. MINIMUM PASSES OF MATRIX ---------- //
// ---------- 33. TASK ASSIGNMENT ---------- //
// ---------- 34. VALID STARTING CITY ---------- //
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
// ---------- 35. MIN HEAP CONSTRUCTION ---------- //
// ---------- 36. LINKED LIST CONSTRUCTION ---------- //
// ---------- 37. REMOVE KTH NODE FROM END ---------- //
// ---------- 38. SUM OF LINKED LISTS ---------- //
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
// ---------- 39. PERMUTATIONS ---------- //
// ---------- 40. POWERSET ---------- //
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
// ---------- 41. PHONE NUMBER MNEMONICS ---------- //
// ---------- 42. STAIRCASE TRAVERSAL ---------- //
// ---------- 43. SEARCH IN SORTED MATRIX ---------- //
// ---------- 44. THREE NUMBER SORT ---------- //
// ---------- 45. MIN MAX STACK CONSTRUCTION ---------- //
// ---------- 46. BALANCED BRACKETS ---------- //
// ---------- 47. SUNSET VIEWS ---------- //
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
// ---------- 48. SORT STACK ---------- //
// ---------- 49. NEXT GREATER ELEMENT ---------- //
// ---------- 50. LONGEST PALINDROMIC SUBSTRING ---------- //
// ---------- 51. GROUP ANAGRAMS ---------- //
// ---------- 52. VALID IP ADDRESSES ---------- //
// ---------- 53. REVERSE WORDS IN STRING ---------- //
// ---------- 54. MINIMUM CHARACTERS FOR WORDS ---------- //
// ---------- 55. SUFFIX TRIE CONSTRUCTION ---------- //
