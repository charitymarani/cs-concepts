const selectionSort = (arr) => {
  for (let wall = 0; wall < arr.length - 1; wall +=1) { // loop stops before last element
    // find smallest number
    // wall - index, points at 1st number behind wall
    let indexOfSmallest = wall;
    for(let j = wall + 1; j < arr.length; j+=1) {
      if (arr[indexOfSmallest] > arr[j]) {
        indexOfSmallest = j;
      }
    }

    // smallest element is on indexOfSmallest
    // swap smallest with first
    const temp = arr[wall];
    arr[wall] = arr[indexOfSmallest];
    arr[indexOfSmallest] = temp;
    // loop
  }
}


const aInput = [10, 15, 23, 2, 9, 28, 1, 1, 4, 12, 1, 1000, 36];
console.log(aInput);
selectionSort(aInput);
console.log(aInput);