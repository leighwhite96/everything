function hasPair(A, sum){
  console.log(A);
  console.log(sum);
  for(var i = 0; i < A.length; i++){
    for(var j = i+1; j < A.length; j++){
      if(A[i] + A[j] == sum) {
        return true;
      }
    }
  }
  return false;
}
