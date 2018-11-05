function split(arr) {
  /* your code here to define the firstHalf and secondHalf arrays */
let mid = Math.floor(arr.length/2);
  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid);
  return [firstHalf, secondHalf];
}
function merge(arr1, arr2){
  let i = 0;
  let j = 0;
  let sorted = [];
  while(i<arr1.length && j<arr2.length){

    if(arr1[i]<arr2[j]) {
    sorted.push(arr1[i]);
    i++;
    }
    else if (arr1[i] >= arr2[j]){
      sorted.push(arr2[j]);
      j++;
    }
  }
  while(i<arr1.length){
    sorted.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sorted.push(arr2[j]);
    j++;
  }
  // return [...sorted, ...((arr1.length - i < arr2.length - j) ? arr2.slice(j) : arr1.slice(i))]
  return sorted
}

function mergeSort(arr){
  if(arr.length<=1) return arr;
  else{
    let halves = split(arr);
    return merge(mergeSort(halves[0]), mergeSort(halves[1]))
  }

}
