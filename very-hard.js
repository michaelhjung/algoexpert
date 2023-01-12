// ---------- 1. Apartment Hunting ---------- //
// ---------- 2. Calendar Matching ---------- //
// ---------- 3. Waterfall Streams ---------- //
// ---------- 4. Minimum Area Rectangle ---------- //
// ---------- 5. Line Through Points ---------- //
// ---------- 6. Right Smaller Than ---------- //
// ---------- 7. Iterative In-order Traversal ---------- //
// ---------- 8. Flatten Binary Tree ---------- //
// ---------- 9. Right Sibling Tree ---------- //
// ---------- 10. All Kinds of Node Depths ---------- //
// ---------- 11. Compare Leaf Traversal ---------- //
// ---------- 12. Max Profit With K Transactions ---------- //
// ---------- 13. Palindrome Partitioning Min Cuts ---------- //
// ---------- 14. Longest Increasing Subsequence ---------- //
// ---------- 15. Longest String Chain ---------- //
// ---------- 16. Square of Zeroes ---------- //
// ---------- 17. Knuth-Morris-Pratt Algorithm ---------- //
// ---------- 18. A* Algorithm ---------- //
// ---------- 19. Rectangle Mania ---------- //
// ---------- 20. Detect Arbitrage ---------- //
// ---------- 21. Two-Edge-Connected Graph ---------- //
// ---------- 22. Airport Connections ---------- //
// ---------- 23. Merge Sorted Arrays ---------- //
// ---------- 24. LRU Cache ---------- //
// ---------- 25. Rearrange Linked List ---------- //
// ---------- 26. Linked List Palindrome ---------- //
// ---------- 27. Zip Linked List ---------- //
// ---------- 28. Node Swap ---------- //
// ---------- 29. Number of Binary Tree Topologies ---------- //
// ---------- 30. Non-Attacking Queens ---------- //
// ---------- 31. Merge Sort ---------- //
function mergeSort(array) {
    // Write your code here.
    if (array.length === 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return mergeSortedArrays(mergeSort(left), mergeSort(right));
}
//helper:
function mergeSortedArrays(left, right) {
    const sortedArray = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }
    if (i < left.length) sortedArray.push(...left.slice(i));
    if (j < right.length) sortedArray.push(...right.slice(j));
    return sortedArray;
}
// ---------- 32. Count Inversions ---------- //
// ---------- 33. Smallest Substring Containing ---------- //
// ---------- 34. Longest Balanced Substring ---------- //
