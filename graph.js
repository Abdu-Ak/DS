class Graph {
  constructor() {
    this.list = new Map();
  }

  addVertex(value) {
    this.list.set(value, []);
  }
  addEdge(vert1, vert2) {
    if (!this.list.has(vert1)) this.addVertex(vert1);
    if (!this.list.has(vert2)) this.addVertex(vert2);

    this.list.get(vert1).push(vert2);
  }

  display() {
    const keys = this.list.keys();

    for (let x of keys) {
      console.log(x, ":", this.list.get(x));
    }
  }

  shortestDistance(startNode, targetNode) {
    let q = [startNode];
    let visited = {};
    let distance = new Map();

    visited[startNode] = true;
    distance.set(startNode, 0);

    while (q.length) {
      let currentNode = q.shift();

      if (currentNode === targetNode) {
        return distance.get(currentNode);
      }

      for (let x of this.list.get(currentNode)) {
        if (!visited[x]) {
          visited[x] = true;
          distance.set(x, distance.get(currentNode) + 1);
          q.push(x);
        }
      }
    }
    return -1;
  }

  bfsAll() {
    let visited = {};
    for (let node of this.list.keys()) {
      if (!visited[node]) {
        this.bfs(node, visited);
      }
    }
  }

  bfs(start, visited = {}) {
    let q = [start];
    visited[start] = true;

    while (q.length) {
      let currentNode = q.shift();
      console.log(currentNode);

      for (let x of this.list.get(currentNode)) {
        if (!visited[x]) {
          visited[x] = true;
          q.push(x);
        }
      }
    }
  }
  
  dfs(start) {
    let visited = {};
    dfsSearch(start, visited, this.list);
  }

  dfsSearch(vertex, visited, list) {
    visited[vertex] = true;
    console.log(visited);

    for (let x of list.get(vertex)) {
      if (!visited[x]) dfsSearch(x, visited, list);
    }
  }
}

const graph = new Graph();
graph.addVertex(777);
graph.addEdge(12, 34);
graph.addEdge(32, 34);
graph.addEdge(54, 4);
graph.addEdge(54, 12);
graph.addEdge(34, 21);

graph.bfs(54);
// graph.bfsAll()
graph.dfs(54);

console.log(graph.shortestDistance(54, 21));

// graph.display()

// Directed graph: Also known as a digraph, it is a graph where each edge has a direction. That is, the edge connects two vertices in a specific direction, represented by an arrow.

// Undirected graph: This is a graph where each edge is bidirectional, meaning that the edge connects two vertices without any particular direction.

// Weighted graph: This is a graph where each edge has a weight or cost assigned to it. The weight can represent any meaningful quantity such as distance, time, or cost.

// Unweighted graph: This is a graph where each edge does not have any weight or cost assigned to it.
