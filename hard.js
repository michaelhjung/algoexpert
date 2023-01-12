// ---------- 1. Four Number Sum ---------- //
// ---------- 2. Subarray Sort ---------- //
// ---------- 3. Largest Range ---------- //
// ---------- 4. Min Rewards ---------- //
// ---------- 5. Zigzag Traverse ---------- //
// ---------- 6. Same BSTs ---------- //
// ---------- 7. Validate Three Nodes ---------- //
// ---------- 8. Max Path Sum in Binary Tree ---------- //
// ---------- 9. Find Nodes Distance K ---------- //
// ---------- 10. Max Sum Increasing Subsequence ---------- //
// ---------- 11. Longest Common Subsequence ---------- //
// ---------- 12. Min Number of Jumps ---------- //
// ---------- 13. Water Area ---------- //
// ---------- 14. Knapsack Problem ---------- //
// ---------- 15. Disk Stacking ---------- //
// ---------- 16. Numbers in Pi ---------- //
// ---------- 17. Maximum Sum Submatrix ---------- //
// ---------- 18. Maximize Expression ---------- //
// ---------- 19. Dijkstra's Algorithm ---------- //
// ---------- 20. Topological Sort ---------- //
// ---------- 21. Kruskal's ALgorithm ---------- //
// ---------- 22. Boggle Board ---------- //
// ---------- 23. Continuous Median ---------- //
// ---------- 24. Sort K-Sorted Array ---------- //
// ---------- 25. Laptop Rentals ---------- //
// ---------- 26. Find Loop ---------- //
// ---------- 27. Reverse Linked List ---------- //
function reverseLinkedList(head) {
    // Write your code here.
    let curr = head, prev = null;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
// ---------- 28. Merge Linked Lists ---------- //
// ---------- 29. Shift Linked List ---------- //
// ---------- 30. Lowest Common Manager ---------- //
// ---------- 31. Interweaving Strings ---------- //
// ---------- 32. Solve Sudoku ---------- //
// ---------- 33. Generate Div Tags ---------- //
// ---------- 34. Amgiuous Measurements ---------- //
// ---------- 35. Shifted Binary Search ---------- //
// ---------- 36. Search For Range ---------- //
// ---------- 37. Quickselect ---------- //
// ---------- 38. Index Equals Value ---------- //
// ---------- 39. Quick Sort ---------- //
// ---------- 40. Heap Sort ---------- //
// ---------- 41. Radix Sort ---------- //
// ---------- 42. Shorten Path ---------- //
// ---------- 43. Largest Rectangle Under Skyline ---------- //
// ---------- 44. Longest Substring Without Duplicates ---------- //
// ---------- 45. Underscorify Substring ---------- //
// ---------- 46. Pattern Matcher ---------- //
// ---------- 47. Multi String Search ---------- //
