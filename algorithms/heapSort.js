const heapSort = (arrInput) => {
  let heapSize = arrInput.length; // define heap size
  maxHeap(arrInput, heapSize); // get max heap when function is called
  for (let i = arrInput.length - 1; i >= 0; i-=1) {
    swap(0, i, arrInput); // swap array as long as there are elements left
    heapSize-=1; // decrement heap size
    heapify(0, heapSize, arrInput); // create left and right arrays
  }
}

const swap = (x, y, arr) => {
  arr[x] = arr.splice(y, 1, arr[x])[0];
  return arr;
}

const maxHeap = (arrInput, heapSize) => {
  for (let i = Math.floor(heapSize / 2);i >= 0; i-=1) {
    heapify(i, heapSize, arrInput);
  }
}

const left = (i) =>  { return  2 * i + 1; }
const right = (i) =>  { return  2 * i + 2; }

const heapify = (i, heapSize, arrInput) => {
  let largest = i;
  if (left(i) < heapSize && arrInput[left(i)] > arrInput[i]) {
    largest = left(i);
  }
  if (right(i) < heapSize && arrInput[right(i)] > arrInput[largest]) {
    largest = right(i);
  }
  if (largest != i) {
    swap(i, largest, arrInput);
    heapify(largest, heapSize, arrInput);
  }
}

const arrInput = [2000, 427, 1, 4, 64, 234, 2043, 54, 0, 1, 435, 678, 23456, 5432];
console.log(arrInput);
heapSort(arrInput);
console.log(arrInput);
