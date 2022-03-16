function breadthFirstSearch(graph, start, end) {
  const queue = [start];

  while (queue.length > 0) {
    const current = queue.shift();

    if (!graph[current]) {
      graph[current] = [];
    }

    if (graph[current].includes(end)) {
      return true;
    }

    queue = [...queue, ...graph[current]];
  }

  return false;
}
