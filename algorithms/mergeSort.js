const mergeSort = (arrInput, startIndex, endIndex) => {
  if (endIndex - startIndex < 1) {
    return; // stop when we have 1 element left
  } else {
    const middleIndex = parseInt((endIndex + startIndex) / 2, 10);
    mergeSort(arrInput, startIndex, middleIndex); // split left array
    mergeSort(arrInput, middleIndex + 1, endIndex); // split right array
    merge(arrInput, startIndex, middleIndex, endIndex); // 
  }
};

const merge = (arrOutput, startIndex, middleIndex, endIndex) => {
  const leftArr = arrOutput.slice(startIndex, middleIndex + 1);
  const rightArr = arrOutput.slice(middleIndex + 1, endIndex + 1);
  let leftPointer = 0;
  let rightPointer = 0;

  for (let i = startIndex; i <= endIndex; i+=1) {

    // If we are out of elements in left array but not right array
    // sort right array
    if (leftPointer === leftArr.length) {
      while(rightPointer < rightArr.length) {
        arrOutput[i] = rightArr[rightPointer];
        rightPointer +=1;
        i+=1;
      }
      return; // stop because we are out of numbers in left and right arrays
    }

    // If we are out of elements in right array but not left array
    // sort left array
    if (rightPointer === rightArr.length) {
      while(leftPointer < leftArr.length) {
        arrOutput[i] = leftArr[leftPointer];
        leftPointer +=1;
        i+=1;
      }
      return; // stop because we are out of numbers in left and right arrays
    }

    // Compare pointers, check for the smallest and set as first element in output array
    if (leftArr[leftPointer] <= rightArr[rightPointer]){
      arrOutput[i] = leftArr[leftPointer];
      leftPointer+=1;
    }
    else {
      arrOutput[i] = rightArr[rightPointer];
      rightPointer+=1;
    }
  }

}

const arrInput = [2000, 427, 1, 4, 64, 234, 2043, 54, 0, 1, 435, 678, 23456, 5432];
console.log(arrInput);
mergeSort(arrInput, 0, arrInput.length - 1);
console.log(arrInput);