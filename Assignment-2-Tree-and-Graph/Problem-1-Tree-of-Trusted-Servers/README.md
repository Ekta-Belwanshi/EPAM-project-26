# Tree of Trusted Servers

## Problem Description

A tree of servers is given, where Server 1 is the root. Each server has a security key. A server is trusted if the XOR of all security keys on the path from Server 1 to that server is greater than or equal to K.

The task is to count the total number of trusted servers.

## Approach

I used BFS to traverse the tree starting from Server 1.

For every server, I store the XOR value from the root to that server.

For a child server:

`pathXor[child] = pathXor[parent] ^ key[child]`

This allows the path XOR to be calculated without traversing the complete path again for every server.

An adjacency list is used to represent the tree because a tree contains only N-1 edges.

## Why BFS?

BFS visits every server once and works in O(N) time.

An iterative BFS is used instead of recursive DFS to avoid possible stack overflow for a highly skewed tree with up to 10^5 nodes.

## Complexity

* Time Complexity: O(N)
* Space Complexity: O(N)

## Technologies Used

* C++
* STL
* BFS
* Adjacency List

## Files

* `solution.cpp` — C++ solution for the problem.

## Note

For the provided samples, the calculated output differs from the sample output given in the problem statement. The solution follows the stated condition that a server is trusted when its root-to-server path XOR is greater than or equal to K.
