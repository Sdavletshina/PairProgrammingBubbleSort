
const swap = (arr, ind1, ind2) => [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];

function bubbleSort(arr){
  let sorted;
  for(let i = arr.length-1; i>=0; --i){
      sorted = true;
      for(let j = 0; j<i; ++j){
        if(arr[j]>arr[j+1]) {
          swap(arr, j, j+1);
          sorted = false;
        }
      }
      if(sorted) break;
    }
  return arr;
  }


