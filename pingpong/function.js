/* takes in an array of length 9 where each index 0-8 correspond to the 9 places on a tic tac toe -
  valid players are "X" and "O"
  prints out if X wins, O wins or nobody wins
*/

function ticTacToe(arr) {
  for (var i=0; i<arr.length; i++){
    if (arr[i] !== "X" && arr[i] !== "O"){
      return "invalid input";
    }
  }
  if (arr[0] == "X" && arr[1] == "X" && arr[2] == "X") {
    return "X Wins";
  }
  if (arr[3] == "X" && arr[4] == "X" && arr[5] == "X") {
    return "X Wins";
  }
  if (arr[0] == "O" && arr[1] == "O" && arr[2] == "O") {
      return "O Wins";
  }

  return "";
}

module.exports = ticTacToe;
