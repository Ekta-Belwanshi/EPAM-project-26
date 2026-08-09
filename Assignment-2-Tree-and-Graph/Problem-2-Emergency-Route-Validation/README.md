# Emergency Route Validation

## Problem Description

A connected undirected graph represents a country's highway system. City 1 is the capital. A city is efficiently reachable if the shortest path from City 1 to that city contains at most D roads.

The task is to count all efficiently reachable cities, including the capital.

## Approach

I used BFS starting from City 1 because BFS finds the shortest path in an unweighted graph.

I maintain a `distance` array where:

`distance[i]` = shortest distance from City 1 to City i.

The capital starts with distance 0. For every unvisited neighbouring city:

`distance[next] = distance[current] + 1`

After finding the distance, I count the cities whose distance is less than or equal to D.

The graph is stored using an adjacency list.

## Why BFS?

BFS explores the graph level by level. Therefore, when a city is visited for the first time, its shortest distance from City 1 is known.

## Complexity

* Time Complexity: O(N + M)
* Space Complexity: O(N + M)

## Technologies Used

* C++
* STL
* BFS
* Adjacency List

## Files

* `solution.cpp` — C++ solution for the problem.
