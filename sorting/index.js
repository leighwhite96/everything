var arr = [21,7,32,17,5,57,4,18];
var sorting = arr => {
  //finding the minimum in the array
function getMinOfArray(arr) {
  return Math.min.apply(null, arr);
}
//while the first number in the array is not equal to the minimum run this for loop
while (arr[0] != getMinOfArray(arr)) {
//if the number at index i is greater than the number in index i+1
//assign what they originally were and then switch them
//for loop keeps going until the number in the first position is the minimum
for(var i=0;i<arr.length;i++){
  if(arr[i]>arr[i+1]){
    var x = arr[i];
    var y = arr[i+1]
    //Switch.
    arr[i+1] = x;
    arr[i] = y;
  }
}
}
 return arr
}
//this exports it
module.export = sorting
