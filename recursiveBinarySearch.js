function recursiveBinarySearch(array, item, start, end) {
  const middle = Math.floor((start + end) / 2);

  if (item === array[middle]) {
    return middle;
  }

  if (start === end) {
    return -1;
  }

  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, 0, middle - 1);
  }

  return recursiveBinarySearch(array, item, middle + 1, end);
}
