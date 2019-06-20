# Algorithms

## Search

**Breadth First Search** traverses to down a tree level by level. Starts with level two branches, then level one branches then finally the bottom nodes.

**Depth First Search** traverses down through one branch of a tree until we get to a bottom node, and then working our way back to the “top” of the tree.

**A\* Search** finds the shortest path efficiently. It’s the most popular pathfinding algorithms for its flexibility and wide usage. Starting from a specific starting node of a graph, it aims to find a path to the given goal node by optimizing resources i.e travelling the least distance, using the shortest time, etc. It does this by maintaining a tree of paths originating at the start node and extending those paths one edge at a time until its termination criterion is satisfied.

## Sorting

**Heap Sort**  involves building a Heap data structure from the given array and then utilizing the heap to sort the array. The structure is either a Max-Heap or Min-Heap. Once heap is built, the first element of the Heap is already sorted as desired. The algorithm continues to build a heap from the remaining elements and continues this cycle until sorting is done.

**Merge Sort** first divides the whole array iteratively into equal halves and will continue to do so until the atomic values are reached. For example an array of length 8 will be divided into 2 arrays first, then 4 arrays then 8(single value) arrays. The algorithm then starts by joining/merging them back together a step at a time as it sorts. So it goes back to 4 arrays of 2 sorted values each; then 2 arrays of 4 sorted values each and finally one array of 8 sorted values.

**Quick Sort** is somewhat similar to merge sort the difference being that it does the sorting when breaking down the array into sub-arrays/partitions. It starts by picking a pivot and all elements smaller than the pivot are moved to its left and larger ones to the right. It continues to sort through the partitions until it’s done.

**Insertion Sort** iterates over the array and compares two items at a time. It swaps the items if one is larger than the other and continues to iterate left, comparing and swapping until the minimum is at the front of the array.

**Bubble sort** is acomparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.

**Selection sort** sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. In every iteration, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

## Hashing

A hashing algorithm is a cryptographic hash function. It is a mathematical algorithm that maps data of arbitrary size to a hash of a fixed size. It’s designed to be a one way function impossible to invert.

**MD5** - Message-Digest algorithm 5 is a fairly widely used hash function with a 128-bit hash value. It is faster than MDs earlier hash functions but it’s considered insecure due to its vulnerability to collision attacks.

**SHA-family** - Secure Hash Algorithm is a cryptographic hash function designed by the USA’s NSA. It has since gone through several iterations the safer one being considered to be SHA-2. SHA is used in SSL/TLS certificates.

**Collisions** occur when two different pieces of data end up with the same hash value.

**Linear Probing** is a mechanism for resolving hash collisions of values of hash functions by sequentially searching the hash table for a free location.

## Time Complexity

Time complexity is the amount of time it takes to run an algorithm. To decide what algorithm is better, we would look at how much space and memory it needs(space complexity). What's nore important though is how much time it takes. Faster algorithms are better. A timer is not enough to get time complexity because things like device used, input size etc affect the length of time. What is needed is a measure that represents a complexity that takes into consideration the input size and takes care of the difference between devices.

### Using Functions

Takes the length of input as an argument and returns the number of operations(e.g assignment, comparison, addition etc.)
Time complexity for:

    ```java
    int sum = 0;
    for (int i=0; i < n; i++) {
      sum = sum + array[i];
    }

    ```

becomes

    ```sh
    timeComplexity(no. of operations) = 4n + 2
    - 4n(<, ++, 3rd = and +) that happen n times
    - 2 (for the first 2 assignments that only happen twice no matter how long the input is)

    ```

Alternatively:

    ```java
    int sum = 0;
    for (int i=0; i < n; i++) {
      sum = sum + array[i];
    }

    ```

becomes

    ```sh
    timeComplexity(no. of operations) = 3n + 2
    - 3n(<, ++, =+) that happen n times
    - 2 (for the first 2 assignments that only happen twice no matter how long the input is)

    ```

## Big O Notation

### O(N)

`O(N)` describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set.

According to Big O Notation, the two time complexities above: `4n + 2` and `3n + 2` are pretty much the same despite looking different. It hides the unimportant(2) and keeps the important(4n/3n). O(N) can be seen as a container for all algorithms with a linear time complexity.

### O(1)

`O(1)` describes an algorithm that will always execute in the same time (or space) regardless of the size of the input data set. Complexity is always calculated for the worst case scenario.

  ```js
    if(n > 50) {
      return true;
    }
    else {
      return false;
    }
  ```

Time complexity for the above is 2 - it checks for length and either returns true of false. It doesn't matter how bit the input is, it will remain the same. In Big O Notation, all constant algorithms are in `O(1)`, this is the fastest Big O measure.

### O(N^2)

`O(N^2)` represents an algorithm whose performance is directly proportional to the square of the size of the input data set. This is common with algorithms that involve nested iterations over the data set. Deeper nested iterations will result in O(n^3), O(n^4) etc.

  ```java
    // Whole algorithm
    // T = n * (5 + 3n + 1) + 2
    // n - number of times entire operation will be executed
    // 3n + 1 - from inner loop
    // 2 - from the first 2 assignments - never changes
    // 5 - from i < n, i++, array[i] < 10, result = and result + array[i]
    // T = 6n + 3n^2 + 2
    int result = 0;
    for (int i = 0; i < n; i++) {
      if (array[i] < 10) {
        result = result + array[i]
      }

      // T = 3n + 1
      // 3n - condition, increment and print that will happen n times
      // 1 - assignment of j
      for (int j = 0; j < n; j++) {
        print(array[j]);
      }
    }
  ```

We get the Big O complexity of the above by getting the biggest term i.e `3n^2` and removing the constant i.e. `2n`. Big O complexity then becomes `O(N^2)`

### O(2^N)

`O(2^N)` denotes an algorithm whose growth doubles with each additon to the input data set. The growth curve of an O(2N) function is exponential - starting off very shallow, then rising meteorically. E.g

  ```java
    int Fibonacci(int number) {
        if (number <= 1) return number;
        return Fibonacci(number - 2) + Fibonacci(number - 1);
        }
  ```

### O(log N)

Explanation sourced [here](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/).

Binary search technique is a good example of this in action. It works by selecting the middle element of the data set, essentially the median, and compares it against a target value. If the values match it will return success. If the target value is higher than the value of the probe element it will take the upper half of the data set and perform the same operation against it. Likewise, if the target value is lower than the value of the probe element it will perform the operation against the lower half. It will continue to halve the data set with each iteration until the value has been found or until it can no longer split the data set.

The iterative halving of data sets described in the binary search example produces a growth curve that peaks at the beginning and slowly flattens out as the size of the data sets increase e.g. an input data set containing 10 items takes one second to complete, a data set containing 100 items takes two seconds, and a data set containing 1000 items will take three seconds. Doubling the size of the input data set has little effect on its growth as after a single iteration of the algorithm the data set will be halved and therefore on a par with an input data set half the size. This makes algorithms like binary search extremely efficient when dealing with large data sets.

### Time complexity for common sorting algorithms

|                       | Best case        | Average case     | Worst case       |
| --------------------- | ---------------- | ---------------- | ---------------- |
| **Bubble Sort**       | O(N)             | O(N^2)           | O(N^2)           |
| **Selection Sort**    | O(N^2)           | O(N^2)           | O(N^2)           |
| **Insertion Sort**    | O(N)             | O(N^2)           | O(N^2)           |
| **Merge Sort**        | O(n log(n))      | O(n log(n))      | O(n log(n))      |
| **Quick Sort**        | O(n log(n))      | O(n log(n))      | O(N^2)           |
| **Heap Sort**         | O(n log(n))      | O(n log(n))      | O(n log(n))      |

# Data Structures

## Stack

Similar to a stack of books - the book piled on last becomes the first thing taken off the stack. Browser's back button works similarly to a stack as well. Methods: pop, push, peek, length. The Array object in JS already has all the functions needed to use it as a stack.

## Set

Like an array but there are no duplicate items and the values are in no particular order.

## Queues

A queue is similar to a stack the major differene being that a queue is first in first out(FIFO). Similar to a print queue or a queue of people.

enqueue - pushes the first item onto the queue. dequeue - takes an item off the queue. There's 2 ways to deal with an array, items can either go into an array at the beginning of an arraay or at the end of an array. In queues they go in at the end of the array and come off at the beginning of the array. Hence enqueue .push() and dequeue .shift().

### Priority Queues

In a priority queue, you pass both the element and priority into the queue. Elements with a higher priorty are sent to the beginning of the queue.

## Binary Search Tree

A tree data structure is a way to hold data that when visualized looks like a tree you'd see in nature. All data points in the tree are called nodes. The top of the tree is the root node which branches out into additional nodes; each of which may have more child nodes and so on. Nodes with branches leading to other nodes are the parent of the nodes of the branches that lead to the child. Leaf nodes are nodes at the end of the tree that have no children. In each children of the node are parents of their own subtree.

The Binary Search Tree is different from any other tree data structure in the sense that it can only have 2 branches for every single node. They are also ordered. Each subtree(left) is less or equal to the parent node and each right subtree is greater than or equal to the parent node. Because they use the principal of binary search, on average operations are able to skip about half the tree so that each lookup, insertion or deletion. takes time proportional to the logarithm of the number of items stored in the tree. This is better than the linear time needed to find items by key in an unsorted array but slower than the corresponding operations on a hash table.

### Traversal & Height

Height - distance from the root node to any given leaf node. Different paths in a highly branched tree structure may have different heights; at least a minimum height and a maximum height. If a tree is balanced, these values will be different at most by one.

Min Height - distance from the root node to the first leaf node without 2 children
Max Height - distance from the root node to the most bottom node
Balanced tree - min and max values will be different at most by one

A balanced tree makes searching through it much more efficient.

Tree traversal methods can be used to explore tree data structures and find all the values of a tree. E.g BFS, DFS and A*S.

inOrder Traversal - begins search at left most node and end at the right most node

preOrder Traversal - explores the root nodes first before the leaves

postOrder Traversal - explores the leaf nodes before the roots

levelOrder Traversal - is the BFS

## Linked List

Here, elements are stored in a node. The node contains the element(info) and reference(link) to the next node. Like arrays, they can be used to implement other data structures. Each has a Head - points to first node and size.

| Arrays                | Linked Lists     |
| --------------------- | ---------------- |
| Fixed size            | Dynamic size     |
| Inefficient insertions and deletions    | Efficient insertions and deletions          |
| Random access i.e efficient indexing    | No random access            |
| May resukt in memory wast        | No memory waste      |
| Sequential access is faster because elements are in contiguous memory locations       | Sequential access is slow because elements are not in contiguous memory locations      |

## Trie

## Heap

### Heap (max and min)

### Heap visualizatio

## Graphs

### Graphs: adjacency list, adjacency matrix, incidence matrix

### Graphs: breadth-first search

## Hash Tables

## Additional Resources

* Shilpa Jain's [article](https://codeburst.io/i-learned-all-data-structures-in-a-week-this-is-what-it-did-to-my-brain-547194ed5047)
* [freeCodeCamp](https://youtu.be/t2CEgPsws3U)
