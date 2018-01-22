const ticTacToe = require("./function.js");

test('get back string', () => {
  expect(ticTacToe([])).toBe("");
});

test('each element in array is X or O', () => {
  expect(ticTacToe(['Y','Y','Y','Y','Y','Y','Y','Y','Y'])).toBe("invalid input");
})

test('first winning case with X at 0,1,2', () => {
  expect(ticTacToe(["X","X","X","O","O","X","O","X","O"])).toBe('X Wins');
});
test('first winning case with O at 0,1,2', () => {
  expect(ticTacToe(["O","O","O","X","O","X","O","X","O"])).toBe('O Wins');
});
test('second winning case with X at 3,4,5', () => {
  expect(ticTacToe(["O","O","X","X","X","X","O","X","O"])).toBe('X Wins');
});

// 
//
// //CHIRS FUNCTION
//
// function ticTacToe(board){
//   if(board.length < 9){
//     return "Invalid board";
//   }
//   if(board[0] == 'x' && board[1] == 'x' && board[2] == 'x'){
//     return 'X wins';
//   }
//   return "Nobody wins";
// }
//
//
// //CHRIS' TESTS
//
// test("no moves equals no winner", () => {
//   expect(ticTacToe(Array(9).fill(''))).toBe("Nobody wins");
// });
//
// test("if length of input is less than 9", () => {
//   expect(ticTacToe(Array(8).fill(''))).toBe("Invalid board")
// });
//
// test("first row is a win for x", () => {
//   expect(ticTacToe(['x','x','x','','','','','',''])).toBe("X wins");
// });
