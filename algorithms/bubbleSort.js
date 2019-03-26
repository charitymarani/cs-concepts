const bubbleSort = (arr) => {
  for(let i = 0; i < arr.length - 1; i+=1) {
      // loop through array, skip last elem
      // i - no. of already sorted elems
      for (let j = 0; j < arr.length - i - 1; j+=1) {
        // swap
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1]
          arr[j + 1] = temp;
      }
    }
  }
};

const aInput = [100, 10, 15, 23, 2, 9, 28, 1, 36, 1];
console.log(aInput);
bubbleSort(aInput);
console.log(aInput);