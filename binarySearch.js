function binarySearch(arr, el) {
  let start = 0;
  let end = arr.length;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (arr[middle] === el) {
      return middle;
    }

    if (el < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
