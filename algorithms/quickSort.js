const quickSort = (arrInput, startIndex, endIndex) => {
  if (startIndex < endIndex) { // confirm we have more than 1 element left
    const pivotIndex = divideArr(arrInput, startIndex, endIndex); // return pivot index
    quickSort(arrInput, startIndex, pivotIndex - 1); // exclude pivot, sort left
    quickSort(arrInput, pivotIndex + 1, endIndex); // exclude pivot, sort right
  }
}

const divideArr = (arrInput, startIndex, endIndex) => {
  const pivot = arrInput[endIndex]; // pivot is last element
  let wall = startIndex; // is the first number after the wall
  for ( let i = startIndex; i < endIndex; i+=1) { // compare i to number before pivot
    if (arrInput[i] <= pivot) {
      // swap with first number after wall if it is smaller or equal to pivot
      const tempVar = arrInput[wall];
      arrInput[wall] = arrInput[i];
      arrInput[i] = tempVar;
      wall+=1; // shift wall position
    }
  }
  arrInput[endIndex] = arrInput[wall];
  arrInput[wall] = pivot;
  return wall; // index doubels as the pivot index because the wall stops at pivot
}

const arrInput = [2000, 427, 1, 4, 64, 234, 2043, 54, 0, 1, 435, 678, 23456, 5432];
console.log(arrInput);
quickSort(arrInput, 0, arrInput.length - 1);
console.log(arrInput);