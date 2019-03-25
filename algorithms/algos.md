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

## Hashing

A hashing algorithm is a cryptographic hash function. It is a mathematical algorithm that maps data of arbitrary size to a hash of a fixed size. It’s designed to be a one way function impossible to invert.

**MD5** - Message-Digest algorithm 5 is a fairly widely used hash function with a 128-bit hash value. It is faster than MDs earlier hash functions but it’s considered insecure due to its vulnerability to collision attacks.

**SHA-family** - Secure Hash Algorithm is a cryptographic hash function designed by the USA’s NSA. It has since gone through several iterations the safer one being considered to be SHA-2. SHA is used in SSL/TLS certificates.

**Collisions** occur when two different pieces of data end up with the same hash value.

**Linear Probing** is a mechanism for resolving hash collisions of values of hash functions by sequentially searching the hash table for a free location.