/* at a basic level we're trying to compare two numbers and see which one is smaller.
We compare if the second one is smaller than the first or not.

We apply this to each two adjacent elements in the array.

Each iteration moves the maximum to the end.

*/

function sort(arr){
  const length = arr.length;
  for(let i = 0; i < length; i++){
    for(let j = i + 1; j < length; j++){
      if(arr[j] < arr[i]){
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  } return arr;
}
