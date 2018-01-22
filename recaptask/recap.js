function solution(A) {

  if (!Array.isArray(A)) {
    return "You entered something that wasn't an array"
  }
  
  for (var i = 0; i < A.length; i++) {
    if (Array.isArray(A[i])) {
      return "You entered an array with an array in"
    }
  }

  let number = 1;

  while (A.includes(number)) {
    number++;
  }
  return number;
}

module.exports = solution;
