const insertionSort = (arrInput) => {
  for (let i = 1; i < arrInput.length; i+=1) {
    if (arrInput[i] < arrInput[0]) {
      // if element is less than the first element, move itto first position
      arrInput.unshift(arrInput.splice(i, 1)[0]);
    }
    else if (arrInput[i] > arrInput[i - 1]) {
      // if not carry on
      continue;
    }
    else {
      // find position
      for (let j = 1; j < i; j+=1) {
        if (arrInput[i] > arrInput[j-1] && arrInput[i] < arrInput[j]) {
          // move element to postion
          arrInput.splice(j, 0, arrInput.splice(i,1)[0]);
        }
      }
    }
  }
}

const arrInput = [3, 0, 2, 5, -1, 4, 1];
console.log(arrInput);
insertionSort(arrInput);
console.log(arrInput);